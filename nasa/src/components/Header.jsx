import React, { useContext } from "react"
import NavBar from "./NavBar"
import { DataContext } from "../Context/DataContext"

export default function Header() {
    const { isOpen, setIsOpen } = useContext(DataContext)
    
    return (
        <header className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-12 relative z-50">
            <div>
                <img src="/shared/logo.svg" alt="logo" className="h-10 md:h-12" />
            </div>
            
            {/* Botón hamburguesa - solo visible en móvil */}
            <div className="z-50 md:hidden">
               <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                   <img src={isOpen ? '/shared/icon-close.svg' : '/shared/icon-hamburger.svg'} alt="icon" />
               </button>
            </div>
            
            <NavBar />
        </header>
    )
}