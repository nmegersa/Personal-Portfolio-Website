import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "emailjs-com";

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
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* hidden field so EmailJS gets to_name */}
                        <input type="hidden" name="to_name" value={formData.to_name} />

                        <div className="relative">
                            <input
                                type="text"
                                name="from_name"
                                required
                                value={formData.from_name}
                                placeholder="Name..."
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            </RevealOnScroll>
        </section>
    );
};
