import React from "react"
import { useContext } from "react"
import { DataContext } from "../Context/DataContext"

export default function DotsButton() {
    const { data, crew , setCrew} = useContext(DataContext)
    if (!data) return null
    return (
        <div className="flex justify-center gap-4 mt-6">
            {Array.from({length: data.crew.length}, (_, index) => (
                <button key={index} className={`w-3 h-3 rounded-full bg-[#696B72] ${crew === index ? 'bg-white' : ''}`} onClick={() => setCrew(index)}></button>
            ))}
        </div>
    )
}