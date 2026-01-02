import { useEffect, useMemo, useRef, useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

function dayIndexUTC() {
    const now = new Date();
    // number of whole days since epoch (UTC) -> changes once per day globally
    return Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 86400000);
}

export const SongOfTheDay = () => {
    const CLIENT_ID = import.meta.env.VITE_JAMENDO_CLIENT_ID;

    const audioRef = useRef(null);
    const [track, setTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState("");

    const todayKey = useMemo(() => {
        const d = new Date();
        return d.toISOString().slice(0, 10);
    }, []);

    useEffect(() => {
        if (!CLIENT_ID) {
            setError("Missing VITE_JAMENDO_CLIENT_ID in .env");
            return;
        }

       
        const cached = localStorage.getItem(`sotd:${todayKey}`);
        if (cached) {
            setTrack(JSON.parse(cached));
            return;
        }

        const controller = new AbortController();

        async function fetchSongOfTheDay() {
            try {
                setError("");

                // 1) get fullcount
                const baseParams =
                    `client_id=${encodeURIComponent(CLIENT_ID)}` +
                    `&format=json` +
                    `&fullcount=true` + 
                    `&limit=1` +
                    `&offset=0` +
                    `&type=single+albumtrack` + 
                    `&order=popularity_month` +  
                    `&imagesize=300` +           
                    `&audioformat=mp31`;         

                const url1 = `https://api.jamendo.com/v3.0/tracks/?${baseParams}`;
                const res1 = await fetch(url1, { signal: controller.signal });
                const data1 = await res1.json();

                const full = data1?.headers?.results_fullcount;
                if (!full || full <= 0) throw new Error("No tracks available from Jamendo query.");

                // 2) compute daily offset
                const offset = dayIndexUTC() % full;

                // 3) fetch the actual track at that offset
                const url2 = `https://api.jamendo.com/v3.0/tracks/?` +
                    `client_id=${encodeURIComponent(CLIENT_ID)}` +
                    `&format=json` +
                    `&limit=1` +
                    `&offset=${offset}` +
                    `&type=single+albumtrack` +
                    `&order=popularity_month` +
                    `&imagesize=300` +
                    `&audioformat=mp31`;

                const res2 = await fetch(url2, { signal: controller.signal });
                const data2 = await res2.json();

                const t = data2?.results?.[0];
                if (!t) throw new Error("Could not load today’s track.");

                // Jamendo returns stream url in `audio`, images in `image`/`album_image`,
                // and track page in `shareurl` :contentReference[oaicite:11]{index=11}
                setTrack(t);
                localStorage.setItem(`sotd:${todayKey}`, JSON.stringify(t));
            } catch (e) {
                if (e.name !== "AbortError") setError(e.message || "Failed to load song.");
            }
        }

        fetchSongOfTheDay();
        return () => controller.abort();
    }, [CLIENT_ID, todayKey]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onEnded = () => setIsPlaying(false);
        audio.addEventListener("ended", onEnded);
        return () => audio.removeEventListener("ended", onEnded);
    }, [track]);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch {
                alert("Browser blocked playback. Click Play again.");
            }
        }
    };

    return (
        <section id="song" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Song of the Day
                    </h2>

                    {error && <p className="text-red-400">{error}</p>}
                    {!track && !error && <p className="text-gray-400">Loading today’s song…</p>}

                    {track && (
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">
                            <div className="flex flex-col items-center gap-5">
                                <div
                                    className={`w-48 h-48 rounded-full overflow-hidden border border-white/10 shadow-lg
                ${isPlaying ? "animate-spin-slow" : ""}`}
                                >
                                    <img
                                        src={track.image || track.album_image}
                                        alt="Album cover"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="text-xl font-bold text-white">{track.name}</p>
                                    <p className="text-gray-400">{track.artist_name}</p>
                                </div>

                                <button
                                    onClick={togglePlay}
                                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 transition
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                >
                                    {isPlaying ? "Pause" : "Play"}
                                </button>

                                <audio ref={audioRef} src={track.audio} preload="none" />

                                {/* Attribution + backlink (important for Jamendo ToS) */}
                                <p className="text-sm text-gray-400">
                                    Music by <span className="text-gray-200">{track.artist_name}</span> via{" "}
                                    <a className="underline hover:text-white" href={track.shareurl} target="_blank" rel="noreferrer">
                                        Jamendo
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </RevealOnScroll>
        </section>
    );
};
