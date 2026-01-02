import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "@emailjs/browser";
import githubLogo from "./GitHubLogo.png";
import linkedinLogo from "./LinkedIn_logo_initials.png";

export const Contacts = () => {
    const [formData, setFormData] = useState({
        to_name: "Nathan",
        from_name: "",
        from_email: "",
        reply_to: "",
        message: "",
    });

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Message Sent!");
                setFormData({
                    to_name: "Nathan",
                    from_name: "",
                    from_email: "",
                    reply_to: "",
                    message: "",
                });
            })
            .catch(() => alert("Error! Something went wrong, please try again."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 px-4"
        >
            <RevealOnScroll>
                <div className="px-4 w-full sm:w-150 sm:max-w-none">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <div className="space-y-6 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                        <h3 className="text-xl font-bold mb-4 text-center">Social Links</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                            <div className="flex flex-col items-center gap-3 text-center">
                                <h4 className="font-semibold">LinkedIn</h4>
                                <a
                                    href="https://www.linkedin.com/in/nathan-megersa-aco/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                >
                                    <img
                                        src={linkedinLogo}
                                        alt="LinkedIn"
                                        className="h-14 w-14 object-contain rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                                    />
                                </a>
                            </div>

                            <div className="flex flex-col items-center gap-3 text-center">
                                <h4 className="font-semibold">GitHub</h4>
                                <a
                                    href="https://github.com/nmegersa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                >
                                    <img
                                        src={githubLogo}
                                        alt="GitHub"
                                        className="h-14 w-14 object-contain rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 mt-6 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                        <h3 className="text-xl font-bold mb-4 text-center">Emails</h3>
                        <div className="flex flex-col items-center gap-3 text-center">
                            <h4 className="font-semibold">nmegersa91@gmail.com/name6562@colorado.edu</h4>
                        </div>
                    </div>
                    <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <input type="hidden" name="to_name" value={formData.to_name} />

                            <div className="relative">
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    value={formData.from_name}
                                    placeholder="Name..."
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    onChange={(e) =>
                                        setFormData({ ...formData, from_name: e.target.value })
                                    }
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    value={formData.from_email}
                                    placeholder="example123@gmail.com"
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            from_email: e.target.value,
                                            reply_to: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    placeholder="Your Message..."
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};