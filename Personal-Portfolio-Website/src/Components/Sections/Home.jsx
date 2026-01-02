import { RevealOnScroll } from "./RevealOnScroll";
import resume from "./resume.pdf"

export const Home = () => {

    return (
        <section id="home"
            className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight pb-2">
                        Hello, I'm Nathan Megersa
                    </h1>


                    <p className="mt-6">
                        I’m a Computer Science sophomore at the University of Colorado Boulder
                        (Go Buffs!) with a Computer Engineering minor. I’m focused on strong software
                        engineering fundamentals—data structures, algorithms, object-oriented programming,
                        and systems—and I enjoy debugging, learning new tools quickly,
                        and building clean, reliable code that solves real problems.
                    </p>
                    <div className="mt-6 flex justify-center space-x-4">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium 
                    transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover:bg-blue-500/10">
                            Contact Me
                        </a>
                        <a href={resume} download="Nathan-Megersa-Resume" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)">
                            Resume ↓
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>


    );

}