import { motion } from "framer-motion";
import IDcardscene from "../components/IDcardscene.jsx";

const Heyoo = () => {
    return (
        <div className="container flex flex-col items-center justify-center px-4 py-24 mx-auto md:flex-row" id="contact">
        
            <motion.div
                className="items-center w-full text-center md:w-1/2 md:text-left md:pl-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="mb-2 text-4xl font-bold">
                    LETS <span className="font-normal">CONNECT!</span>
                </h1>
                <h2 className="mb-4 text-4xl font-bold">Innovating with Purpose, Designing with Passion.</h2>
                <p className="mb-4 text-gray-500">
                    Empowering Creativity, Engaging Experiences.
                </p>
            </motion.div>

            <motion.div
                className="flex justify-center w-full mt-8 md:w-1/2 md:justify-start md:mt-0"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <IDcardscene />
            </motion.div>

        </div>
    );
};

export default Heyoo;
