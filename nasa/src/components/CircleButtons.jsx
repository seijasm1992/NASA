import React, { useContext } from "react"
import { DataContext } from "../Context/DataContext"
export default function CircleButtons(){
    const {data, tech, setTech} = useContext(DataContext)
    
    if(!data){
        return null
    }
    
    const handleTechClick = (index) => {
        setTech(index)
    }
    return(
        <div className="flex justify-center gap-2">
            {Array.from({length: data.technology.length}, (_, index) => (
            <button key={index} className={`w-12 h-12 rounded-full border-[1px] border-[#696B72] font-barlow-condensed text-xs tracking-widest uppercase ${index === tech ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={() => handleTechClick(index)}>{index + 1}</button>
        ))} 
        </div>
    )
}