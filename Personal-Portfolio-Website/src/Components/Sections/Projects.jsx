import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {

    return (

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Systems-Monitor</h3>
                        <p className="text-gray-400 mb-4">
                            Systems-Monitor is a full-stack monitoring dashboard that collects
                            CPU, memory, and disk usage metrics every 5 seconds and stores them
                            in PostgreSQL for both real-time visibility and historical analysis.
                            It includes FastAPI endpoints for health checks, latest readings,
                            and time-range queries, plus a Node.js web dashboard that visualizes
                            metrics with auto-refresh charts and date-range filtering—making it
                            useful for debugging performance issues and tracking system trends over time.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "FastAPI", "PostgreSQL", "Docker", "Environment Variables",
                                "JavaScript", "Chart.js", "Node.js"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/nmegersa/Systems-Monitor" className="blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project Repo →
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> The Lion King Board Game</h3>
                        <p className="text-gray-400 mb-4">
                            The Lion King Board Game is a turn-based C++ game built with object-oriented
                            design to keep gameplay logic clean, modular, and easy to extend. The game
                            manages player actions and overall game flow through structured classes, and
                            it uses file I/O to save and load game state so players can continue progress
                            across runs. This project strengthened my skills in OOP architecture,
                            state management, and building maintainable C++ programs.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C++", "Arrays", "File I/O", "Git/Github", "OOP"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/nmegersa/The-Lion-King-Game" className="blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project Repo →
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Personal Portfolio Website </h3>
                        <p className="text-gray-400 mb-4">
                            My personal website is a responsive portfolio built to showcase my work, skills, 
                            and experience in a clean, modern format. It’s designed with reusable React 
                            components and styled with Tailwind CSS for fast, consistent UI development 
                            across devices. The site highlights my background and projects while giving 
                            visitors an easy way to learn about me and connect.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript", "TailwindCSS", "React", "Tailwind CSS", "Responsive Design", "Git/Github"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/nmegersa/Personal-Portfolio-Website" className="blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project Repo →
                            </a>
                            <a href="#" className="blue-400 hover:text-blue-300 transition-colors my-4">
                                View Demo →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>


    );
}