import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
export default function NavBar() {
    const {data, isOpen, setIsOpen, handleLinkClick} = useContext(DataContext);
    
    if (!data) return null;
    
    const sections = Object.keys(data);
    
   
    
    return (
        <>
            <div 
                className={`fixed top-0 right-0 h-screen w-2/3 bg-white/10 backdrop-blur-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="pt-28 px-8">
                    <ul className="flex gap-8 flex-col text-white font-barlow-condensed text-base tracking-widest uppercase">
                        <li>
                            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                                <span className="font-bold">00</span> Home
                            </Link>
                        </li>
                        {sections.map((section, index) => (
                            <li key={section}>  
                                <Link to={`/${section}`} 
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-3 hover:text-gray-300 transition-colors"
                                >
                                    <span className="font-bold">0{index + 1}</span>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <nav className="hidden md:block">
                <ul className="flex gap-6 lg:gap-10 items-center text-white font-barlow-condensed text-sm lg:text-base tracking-widest uppercase bg-white/5 backdrop-blur-xl px-8 lg:px-12 py-4 rounded-lg">
                    <li>
                        <Link 
                            to="/" 
                            className="flex items-center gap-2 hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1"
                        >
                            <span className="font-bold">00</span> 
                            <span className="hidden lg:inline">Home</span>
                        </Link>
                    </li>
                    {sections.map((section, index) => (
                        <li key={section}>
                            <Link 
                                to={`/${section}`}
                                className="flex items-center gap-2 hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1"
                            >
                                <span className="font-bold">0{index + 1}</span>
                                <span className="hidden lg:inline">
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
