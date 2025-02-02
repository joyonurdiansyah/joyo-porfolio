import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

// Data pengalaman kerja
const experiences = [
    {
        company: "PT Infotech Solutions",
        role: "Quality Assurance",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5qc5R1IAVy21rqbvhGaXQGq4KC9EBlsiJQ&s",
        period: "April 2024 - January 2025",
        description: "Menyusun dokumentasi pengujian UI untuk sistem SaaS Telkomsel di tiga browser utama dan berbagai perangkat, merancang serta menyusun Test Case untuk pengujian UI sistem SaaS dan GoHarvest, membuat User Acceptance Testing (UAT) untuk GoHarvest, melakukan pengujian API menggunakan Postman, menyusun pengujian request-response API dan mendokumentasikan hasilnya, menguji dan memvalidasi local environment untuk CMS GoHarvest yang dikembangkan dengan Laravel Framework 11, menyusun Minutes of Meeting (MOM) setelah diskusi internal, serta menghasilkan laporan sesuai kebutuhan tiket di Jira."
    },
    {
        company: "PT Bumi Alam Segar",
        role: "Web Developer",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Wings_%28Indonesian_company%29_logo.svg",
        period: "June 2023 - March 2024",
        description: "Mengembangkan aplikasi internal berbasis PHP dan Laravel yang meningkatkan produktivitas tim sebesar 20%, membuat diagram alur dan desain aplikasi serta berdiskusi dengan pengguna sebelum pengembangan, membuat model data dan skema tabel sesuai kebutuhan pengguna, menampilkan data dengan grafik untuk memudahkan pengguna, memperbaiki lebih dari 10 bug dalam sistem, membuat panduan penggunaan sistem dari awal hingga selesai, serta mengembangkan kode menggunakan PHP, Laravel, React JS, JavaScript, jQuery, Ajax, Vue.js, dan MySQL."
    },
    {
        company: "PT Global Putra Kreasindo",
        role: "Admin IT",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R1Unszc89rFtw5eGfz3lzlPJreD9KW5Qew&s",
        period: "January 2022 - June 2023",
        description: "Memigrasi lebih dari 500 data pengguna, produk, dan transaksi dari WordPress ke server private hosting, membuat Rest API Kurir menggunakan Lumen/Laravel 8, mengintegrasikan Payment Gateway menggunakan Doku, melakukan instalasi VM Server menggunakan Linux/CentOS, membuat dokumentasi flowchart menggunakan Visio, merancang dan membuat UI/UX flow, desain, dan prototype Mobile Apps, membantu lebih dari 30 merchant dalam onboarding platform dan meningkatkan jumlah merchant aktif sebesar 25%, serta menyelesaikan tugas-tugas IT lainnya terkait pengembangan dan pemeliharaan sistem dan infrastruktur perusahaan."
    },
    {
        company: "PUSINFOLAHTA TNI",
        role: "Internship UI/UX",
        logo: "https://pbs.twimg.com/profile_images/1303883233080213505/SBHxbubi_400x400.jpg",
        period: "September 2021 - December 2021",
        description: "Membuat UML (Unified Modeling Language) termasuk Use Case Diagram, Use Case Description, Activity Diagram, Sequence Diagram, Class Diagram, dan Database Design, serta membuat Wireframe, Usability Testing, Visual Design, dan Prototype UI untuk aplikasi kendaraan dinas berbasis Android."
    }
];

const Experience = () => {
    // Animasi untuk judul
    const controlsTitle = useAnimation();
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false });

    useEffect(() => {
        if (titleInView) {
            controlsTitle.start({ opacity: 1, y: 0 });
        } else {
            controlsTitle.start({ opacity: 0, y: 50 });
        }
    }, [titleInView, controlsTitle]);

    return (
        <div className="mt-10 font-sans text-white bg-black" id="experience">
            <div className="container p-4 pb-20 mx-auto">
                <motion.h1
                    ref={titleRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controlsTitle}
                    transition={{ duration: 0.6 }}
                    className="pt-20 pb-20 mb-8 text-5xl text-center"
                >
                    My <span className="font-bold">Experience</span>
                </motion.h1>

                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                ))}
            </div>
        </div>
    );
};

const ExperienceCard = ({ exp, index }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false });
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [inView, controls]);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleReadMoreClick = () => {
        setModalOpen(true); // Buka modal ketika "Read More" diklik
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`p-[60px] rounded-lg mb-6 ${index % 2 === 0 ? "bg-[#27272A]" : "border border-[#71717A]"
                }`}
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                    <img alt={`${exp.company} logo`} className="w-6 h-6 mr-2" src={exp.logo} />
                    <h2 className="ml-4 text-xl font-bold">{exp.role} at {exp.company}</h2>
                </div>
                <span className="text-[#D4D4D8] font-bold sm:ml-4">{exp.period}</span>
            </div>

            <p className="mt-4 text-gray-300">
                <span className="hidden lg:inline">{exp.description}</span>

                <span className="lg:hidden">
                    {exp.description.length > 150
                        ? exp.description.substring(0, 150) + "..."
                        : exp.description}
                </span>
            </p>

            {/* Tombol Read More hanya untuk mode sm */}
            {exp.description.length > 150 && (
                <div className="mt-4 lg:hidden">
                    <button
                        onClick={handleReadMoreClick}
                        className="relative ml-2 text-white cursor-pointer group button-experience"
                    >
                        Read More
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={toggleModal}
                >
                    <div
                        className="w-full max-w-3xl p-6 bg-white rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold">{exp.company}</h2>
                        <p className="mt-4 text-gray-700">{exp.description}</p>
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

ExperienceCard.propTypes = {
    exp: PropTypes.shape({
        company: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default Experience;
