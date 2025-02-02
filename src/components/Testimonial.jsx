import { useEffect, useRef } from "react";

// Impor gambar-gambar lokal
import sertifikat1 from "../assets/sertifikat/sertifikat1.jpg";
import sertifikat2 from "../assets/sertifikat/sertifikat2.jpg";
import sertifikat3 from "../assets/sertifikat/sertifikat3.jpg";
import sertifikat4 from "../assets/sertifikat/sertifikat4.jpg";
import sertifikat5 from "../assets/sertifikat/sertifikat5.jpg";
import sertifikat6 from "../assets/sertifikat/sertifikat6.jpg";

const ScrollingImageAnimation = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const clonedContent = container.innerHTML;
            container.innerHTML += clonedContent; // Duplikasikan konten agar efek looping terlihat mulus
        }
    }, []);

    return (
        <div className="relative w-full py-10 mx-auto mt-20 overflow-hidden max-w-12xl" id="testimonial">
            {/* Title */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold">
                    My <span className="font-black">Certificates</span>
                </h1>
            </div>

            {/* Scrolling Container */}
            <div className="w-full overflow-hidden">
                <div
                    ref={containerRef}
                    className="flex w-max animate-scroll"
                >
                    {[sertifikat1, sertifikat2, sertifikat3, sertifikat4, sertifikat5, sertifikat6].map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-64 p-2 mx-4 bg-white rounded-lg shadow-lg"
                        >
                            <img
                                alt={`Sertifikat ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                src={image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    @keyframes scroll {
                        from {
                            transform: translateX(0);
                        }
                        to {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-scroll {
                        display: flex;
                        width: max-content;
                        animation: scroll 40s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default ScrollingImageAnimation;
