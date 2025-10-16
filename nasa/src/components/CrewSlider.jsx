import React from "react"
import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import DotsButton from "./DotsButton"
import { motion, AnimatePresence } from "framer-motion"

export default function CrewSlider() {
    const { data, crew, setCrew } = useContext(DataContext)
    
    if (!data) return null

    const selectedCrew = data.crew[crew]
    
    return (
        <div className="flex flex-col gap-6 items-center">
            <AnimatePresence mode="wait">
                <motion.img 
                    key={selectedCrew.name}
                    src={selectedCrew.images.webp} 
                    alt={`${selectedCrew.name}`} 
                    className="w-[60%] h-[60%] object-cover mx-auto mt-12"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
            </AnimatePresence>
            
            <DotsButton />
            
            <AnimatePresence mode="wait">
                <motion.div 
                    key={`${selectedCrew.name}-info`}
                    className="flex flex-col gap-2 items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <span className="text-[#696B72] font-barlow text-2xl uppercase tracking-wider">{selectedCrew.role}</span>
                    <h1 className="font-bellefair text-3xl uppercase tracking-wider text-white">{selectedCrew.name}</h1>
                </motion.div>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
                <motion.p 
                    key={`${selectedCrew.name}-bio`}
                    className="text-white text-center font-barlow font-normal text-[0.9375rem] tracking-wider px-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {selectedCrew.bio}
                </motion.p>
            </AnimatePresence>
        </div>  
    )
}