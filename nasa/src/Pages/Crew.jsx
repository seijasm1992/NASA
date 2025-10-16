
import React from "react"
import CrewSlider from "../components/CrewSlider"

export default function Crew() {
    
    return (
        <div className="min-h-screen bg-[url('/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat">
            <h1 className="text-white text-center font-bellefair text-1xl uppercase tracking-wider"> <span className="font-bold font-barlow text-[#5B5F62]">02</span> Meet your crew</h1>

            <CrewSlider />
        </div>
    )
}