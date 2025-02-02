import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MySkill = () => {
    const skills = [
        { name: "Git", icon: "https://i.ibb.co/hRS2v7T/git.png" },
        { name: "Javascript", icon: "https://i.ibb.co/HqGfKdz/java-script.png" },
        { name: "Figma", icon: "https://i.ibb.co/HxMgCbn/figma.png" },
        { name: "React Js", icon: "https://i.ibb.co/s9Fhxnm/react-js.png" },
        { name: "Postgresql", icon: "https://i.ibb.co/CQBZRPT/postgre.png" },
        { name: "Postman", icon: "https://i.ibb.co/Pcv7xGd/astronaut.png" }, 
        { name: "PHP", icon: "https://i.ibb.co/G7fsY4D/php.png" },
        { name: "Laravel", icon: "https://i.ibb.co/RQ4662P/laravel.png" }, 
        { name: "MySQL", icon: "https://i.ibb.co/H4hwpvr/mysql.png" },
        { name: "Bootstrap", icon: "https://i.ibb.co/gjS282N/bootstrap.png" },
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.2,
    });

    return (
        <div ref={ref} className="flex flex-col items-center px-4 py-20 lg:mt-10 lg:mb-20" id="skills">
            <motion.h1 
                className="mb-16 text-3xl text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                My <span className="font-bold text-black-500">Skills</span>
            </motion.h1>

            <motion.div 
                className={`grid gap-8 w-full max-w-5xl ${isMobile ? "grid-cols-2" : "grid-cols-5"}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-4 transition border border-black rounded-lg shadow-md hover:shadow-lg"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-[156px] h-[156px] sm:w-[80px] sm:h-[80px] lg:w-[156px] lg:h-[156px] mb-2"
                        />
                        <p className="text-xs font-semibold text-center sm:text-sm lg:text-base">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MySkill;
