import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Will trigger every time it's in view
        threshold: 0.2, // Trigger when 20% of the element is in view
    });

    return (
        <div
            ref={ref}
            className="container flex flex-col items-center justify-center px-4 py-24 mx-auto md:flex-row"
            id="contact"
        >
            {/* Text Section with animation */}
            <motion.div
                className="items-center w-full text-center md:w-1/2 md:text-left md:pl-8 sm:mb-[5px]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1 }}
            >
                <h1 className="mb-2 text-4xl font-bold">
                    Lets <span className="font-normal">talk for</span>
                </h1>
                <h2 className="mb-4 text-4xl font-bold">Something special</h2>
                <p className="mb-4 text-gray-500">
                    I seek to push the limits of creativity to create high-engaging,
                    user-friendly, and memorable interactive experiences.
                </p>
                <p className="flex items-center justify-center mb-2 md:justify-start">
                    <i className="mr-2 text-black fas fa-envelope"></i>
                    nurdiansyahjoyo@gmail.com
                </p>
                <p className="flex items-center justify-center md:justify-start">
                    <i className="mr-2 text-black fab fa-whatsapp"></i>
                    081316133984
                </p>
            </motion.div>

            {/* Form Section with animation */}
            <motion.div
                className="w-full mb-8 md:w-1/2 md:mb-0 sm:order-first sm:mt-[5px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ duration: 1 }}
            >
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Your website (If exists)"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="How can I help?"
                        className="w-full h-32 p-3 border border-gray-300 rounded"
                    />
                </form>
                <div className="flex mt-4 space-x-4">
                    <button type="submit" className="w-full p-3 text-white bg-black rounded">
                        Get In Touch
                    </button>
                    <a
                        href="#"
                        className="p-3 border border-gray-300 rounded"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="#"
                        className="p-3 border border-gray-300 rounded"
                        aria-label="Github"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="#"
                        className="p-3 border border-gray-300 rounded"
                        aria-label="Twitter"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="#"
                        className="p-3 border border-gray-300 rounded"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactForm;