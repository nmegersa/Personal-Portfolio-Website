import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = ["JavaScript", "React", "HTML", "CSS",
        "TailwindCSS", "Chart.js", "Version Control (Git/GitHub)", "REST APIs"];
    const backendSkills = ["Node.js", "Databases (SQL, PostgreSQL, MySQL)", "Docker",
        "Enviornment Variables/Configuration", "Python (FastAPI)", "REST API Design"];

    return (
        <section id="about" className="min-h-screen flex items justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                        About Me
                    </h2>
                    <div className="glass rounded-xl p-8 p-6 rounded-xl border-white/10 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <p className="text-gray-300 mb-6">
                            I’m a passionate software engineer with experience building backend, full-stack,
                            and front-end applications, eager to create innovative, real-world solutions
                            that make life easier and help people in meaningful ways.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </h3>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S. in Computer Science Minor in Computer Engineering</strong> - University of Colorado Boulder (Expected 2028)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Algorithms, Discrete Math, Computer Systems, Software Development, Databases
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> STEM Intern at Project: Return to Work, Inc. (June 2025 - August 2025)</h4>
                                    <p>I improved Microsoft 365 documentation workflows to make two weekly
                                        reports clearer and more consistent. I also supported LinkedIn outreach
                                        by drafting press releases, tracking performance, and helping drive a 20%
                                        increase in engagement, while coordinating across three teams to
                                        streamline project tracking and keep key initiatives on schedule.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Lead Retail Store Operations Associate at Big Lots! (September 2023 - June 2024)</h4>
                                    <p>
                                        I led front-end store operations by supporting cashiers, resolving customer issues,
                                        and maintaining a fast, accurate checkout flow. Through consistent customer
                                        engagement, I increased monthly rewards program enrollments by 20%, and I strengthened
                                        inventory processes to improve organization and reduce out-of-stock items by 15%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>


    );
}