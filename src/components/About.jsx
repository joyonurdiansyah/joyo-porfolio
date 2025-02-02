import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import joyo from "../assets/joyo.png";

const About = () => {
    const [loading, setLoading] = useState(false);

    const handleLinkClick = (e, url) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            window.location.href = url;
        }, 3000);
    };

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div className="container flex flex-col items-center justify-between px-4 py-20 mx-auto lg:mt-36 sm:mt-1 md:flex-row" id="introduction">
            {/* Teks yang muncul dari kanan */}
            <motion.div
                ref={textRef}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : 100 }}
                transition={{ duration: 0.6 }}
                className="text-left md:w-1/2 sm:text-sm md:text-base"
            >
                <h1 className="mb-4 text-4xl font-light md:text-5xl">
                    Hello I’m <span className="font-bold">bang Joy.</span>
                </h1>
                <h2 className="mb-4 text-4xl font-light md:text-5xl">
                    Frontend <span className="font-bold">Developer</span>
                </h2>
                <h3 className="mb-4 text-4xl font-light md:text-5xl">
                    Based In <span className="font-bold">Indonesia.</span>
                </h3>
                <p className="mt-2 text-gray-600">
                    Saya adalah seorang Web Programmer berpengalaman yang juga memiliki keahlian sebagai Quality Assurance (QA).
                    Dengan pengalaman dalam pengembangan web, Saya telah berkontribusi dalam berbagai proyek yang melibatkan pengembangan
                    aplikasi web berbasis PHP, JavaScript, serta pengujian perangkat lunak untuk memastikan kualitas dan performa aplikasi.
                </p>

                {/* Social Media Links */}
                <div className="flex mt-20 space-x-4">
                    <a
                        className="p-3 text-white bg-black rounded"
                        href="https://www.facebook.com/joyo.nurdiansyah.1/"
                        onClick={(e) => handleLinkClick(e, "https://www.facebook.com/joyo.nurdiansyah.1/")}
                    >
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>

                    <a
                        className="p-3 text-black bg-white border border-black rounded"
                        href="https://www.linkedin.com/in/joyo-nurdiansyah/"
                        onClick={(e) => handleLinkClick(e, "https://www.linkedin.com/in/joyo-nurdiansyah/")}
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>

                    <a
                        className="p-3 text-black bg-white border border-black rounded"
                        href="https://www.instagram.com/joyonurdiansyah/"
                        onClick={(e) => handleLinkClick(e, "https://www.instagram.com/joyonurdiansyah/")}
                    >
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>

                    <a
                        className="p-3 text-black bg-white border border-black rounded"
                        href="https://discord.gg/EH3A9aXC"
                        onClick={(e) => handleLinkClick(e, "https://discord.gg/EH3A9aXC")}
                    >
                        <i className="fab fa-discord fa-2x"></i>
                    </a>
                </div>

                {loading && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div className="loader">
                            <div className="box box-1">
                                <div className="side-left"></div>
                                <div className="side-right"></div>
                                <div className="side-top"></div>
                            </div>
                            <div className="box box-2">
                                <div className="side-left"></div>
                                <div className="side-right"></div>
                                <div className="side-top"></div>
                            </div>
                            <div className="box box-3">
                                <div className="side-left"></div>
                                <div className="side-right"></div>
                                <div className="side-top"></div>
                            </div>
                            <div className="box box-4">
                                <div className="side-left"></div>
                                <div className="side-right"></div>
                                <div className="side-top"></div>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>

            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -100 }}
                transition={{ duration: 0.6 }}
                className="relative hidden mt-4 md:w-1/2 md:mt-0 md:right-20 sm:block"
            >
                <img
                    alt="Bangjoy"
                    className="w-full h-auto mx-auto mt-6 mb-6 md:mx-0 md:mt-0 md:mb-0"
                    src={joyo}
                />
            </motion.div>

        </div>
    );
};

export default About;
