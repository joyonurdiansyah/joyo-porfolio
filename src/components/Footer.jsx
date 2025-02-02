import logoputih from "../assets/logoputih.png";

const Footer = () => {
    return (
        <footer className="py-4 text-white bg-black">
            <div className="container flex items-center justify-between w-full mx-auto ">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        alt="Logo"
                        className="mr-2"
                        src={logoputih}
                    />
                    <span className="text-lg font-semibold">Bangjoy</span>
                </div>
                {/* Text Section */}
                <div className="text-right">
                    <p>© 2024-2025 Personal</p>
                    <p>lets connect!</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
