import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import eklinik from "../assets/projects/eklinik.png";
import formtamu from "../assets/projects/formtamu.png";
import sigralegalitas from "../assets/projects/sigralegalitas.png";
import bum from "../assets/projects/bum.png";

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.3,
    });

    return (
        <div className="w-full bg-black" id="projects" ref={ref}>
            <div className="container px-4 py-12 pb-20 mx-auto">
                <motion.h1
                    className="mb-16 text-4xl font-light text-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="pt-12 pb-12 mb-10 font-bold">Projects</span>
                </motion.h1>
                <div className="space-y-16">
                    {/* Project 1 */}
                    <div className="flex flex-col items-center mt-8 lg:flex-row lg:space-x-8">
                        <motion.img
                            alt="eKlinik Application screenshot"
                            className="w-full rounded-lg shadow-lg sm:w-3/4 lg:w-1/2"
                            src={eklinik}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.div
                            className="flex flex-col items-center justify-center p-4 mt-4 sm:w-3/4 lg:mt-0 lg:w-1/2"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="w-full mb-4 text-2xl font-bold text-center text-white lg:text-left">
                                01 E-Klinik Application
                            </h2>
                            <p className="w-full mt-2 text-center text-gray-400 lg:text-left">
                                eKlinik adalah aplikasi berbasis web untuk pengelolaan data pasien,
                                jadwal dokter, dan rekam medis secara digital. Aplikasi ini
                                membantu klinik meningkatkan efisiensi dan akurasi data.
                            </p>
                        </motion.div>
                    </div>

                    {/* Project 2 */}
                    <div className="flex flex-col items-center mt-8 lg:flex-row lg:space-x-8">
                        <motion.img
                            alt="Form Tamu Digital screenshot"
                            className="w-full rounded-lg shadow-lg sm:w-3/4 lg:w-1/2 sm:order-1 lg:order-2"
                            src={formtamu}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.div
                            className="flex flex-col items-center justify-center p-4 mt-4 sm:w-3/4 lg:mt-0 lg:w-1/2 sm:order-2 lg:order-1"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="w-full mb-4 text-2xl font-bold text-center text-white lg:text-left">
                                02 Form Tamu Digital
                            </h2>
                            <p className="w-full mt-2 text-center text-gray-400 lg:text-left">
                                Form Tamu Digital adalah aplikasi berbasis web untuk mencatat data
                                tamu yang berkunjung ke suatu lokasi. Dengan tampilan yang ramah
                                pengguna, aplikasi ini mempermudah pengelolaan dan pencatatan
                                daftar tamu secara modern.
                            </p>
                        </motion.div>
                    </div>

                    {/* Project 3 */}
                    <div className="flex flex-col items-center mt-8 lg:flex-row lg:space-x-8">
                        <motion.img
                            alt="SIGRA Legalitas screenshot"
                            className="w-full rounded-lg shadow-lg sm:w-3/4 lg:w-1/2"
                            src={sigralegalitas}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.div
                            className="flex flex-col items-center justify-center p-4 mt-4 sm:w-3/4 lg:mt-0 lg:w-1/2"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="w-full mb-4 text-2xl font-bold text-center text-white lg:text-left">
                                03 SIGRA Legalitas
                            </h2>
                            <p className="w-full mt-2 text-center text-gray-400 lg:text-left">
                                SIGRA Legalitas adalah aplikasi untuk mengelola dokumen legalitas
                                perusahaan. Aplikasi ini dirancang untuk memastikan semua dokumen
                                penting tersimpan dengan aman dan mudah diakses kapan saja.
                            </p>
                        </motion.div>
                    </div>

                    {/* Project 4 */}
                    <div className="flex flex-col items-center mt-8 lg:flex-row lg:space-x-8">
                        <motion.img
                            alt="Form Tamu Digital screenshot"
                            className="w-full rounded-lg shadow-lg sm:w-3/4 lg:w-1/2 sm:order-1 lg:order-2"
                            src={bum}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.div
                            className="flex flex-col items-center justify-center p-4 mt-4 sm:w-3/4 lg:mt-0 lg:w-1/2 sm:order-2 lg:order-1"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="w-full mb-4 text-2xl font-bold text-center text-white lg:text-left">
                                04 Content Management Systems 
                            </h2>
                            <p className="w-full mt-2 text-center text-gray-400 lg:text-left">
                                Aplikasi CMS berbasis web ini dirancang untuk mempermudah manajemen data dalam berbagai aspek operasional perusahaan. 
                                Dengan fitur untuk membuat rekap data karyawan, mengelola informasi panen, memantau maintenance pokok, serta mengelola 
                                kendaraan, aplikasi ini memberikan kemudahan dalam memonitor dan mencatat transaksi aktivitas harian pegawai, terutama 
                                di industri perkebunan kelapa sawit.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
