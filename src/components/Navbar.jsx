import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section) {
            section.scrollIntoView({ behavior:"smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed overflow-x-hidden top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-around items-center">
                <h1 className="text-2xl font-bold w-1/3 text-blue-500">Christian.dev</h1>

                <ul className="flex w-1/3 flex-row justify-around">
                    {["home","about","skills","projects"].map((item) => (
                        <span
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="cursor-pointer"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
