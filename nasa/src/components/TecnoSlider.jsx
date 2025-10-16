import React from "react"
import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import CircleButtons from "./CircleButtons"

export default function TecnoSlider() {
    const { data, tech, setTech } = useContext(DataContext)

    if (!data) {
        return null
    }
    const techData = data.technology[tech]

    const handleTechClick = (index) => {
        setTech(index)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <img src={techData.images.landscape} alt={techData.name} className="w-full h-[300px] object-cover" />
            <div className="my-12 ">
                <CircleButtons />
            </div>
            <h2 className="text-[#BDC8FF] font-normal text-center font-barlow-condensed text-1xl uppercase tracking-[0.2rem]">The terminology</h2>
            <div className="flex flex-col justify-center items-center px-4  gap-8 mt-4">
                <h2 className="text-white text-center font-bellefair text-3xl uppercase tracking-wider">{techData.name}</h2>
                <p className="text-[#BDC8FF] text-center text-[1.1rem] font-barlow font-normal leading-[1.5]">{techData.description}</p>
            </div>
        </div>
    )
}