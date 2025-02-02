import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutMeImage from "../assets/About-me.png";

const Myprofile = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger the animation when scrolling to this section
        threshold: 0.3, // Trigger when 30% of the element is in view
    });

    return (
        <section className="py-20 font-sans text-black bg-white" id="about" ref={ref}>
            <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 md:gap-10 sm:px-6 lg:px-16">
                {/* Gambar */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={aboutMeImage}
                        alt="About Me"
                        className="w-full max-w-xs rounded-lg sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg"
                    />
                </motion.div>

                {/* Teks */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-4 text-4xl font-bold text-center sm:text-left">
                        About <span className="text-black">Me</span>
                    </h2>
                    <p className="mb-4 leading-relaxed text-center text-gray-700 sm:text-left">
                        I am a passionate software developer with a focus on web application development and UI/UX design. My expertise includes working with PHP, Laravel, React, MySQL, and Firebase to create efficient and scalable systems. I have a strong background in both development and quality assurance, ensuring the highest standards in performance and user experience.
                    </p>
                    <p className="mb-4 leading-relaxed text-center text-gray-700 sm:text-left">
                        I began my career as an IT intern and quickly expanded my skill set through various roles, including as a Quality Assurance specialist and IT Admin. I have been responsible for developing internal applications, ensuring the quality of SaaS systems, and improving user experiences. Throughout my journey, I’ve worked on projects that involved testing APIs, migrating data, and designing user-friendly interfaces.
                    </p>
                    <p className="leading-relaxed text-center text-gray-700 sm:text-left">
                        When Im not coding or testing systems, I enjoy staying updated on the latest trends in web development and UI/UX. Im always eager to learn new tools and technologies to enhance my skill set. You can follow me on GitHub or connect with me on LinkedIn to see the projects Im working on and the technologies I use.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Myprofile;
