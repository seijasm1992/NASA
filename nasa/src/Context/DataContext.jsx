import React, { createContext, useState, useEffect } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [destination, setDestination] = useState(0)
    const [crew, setCrew] = useState(0)
const [tech, setTech] = useState(0)

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    const fetchData = async () => {
        const response = await fetch("/data.json")
        const data = await response.json()
        setData(data)
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <DataContext.Provider value={{ data, setData, isOpen, setIsOpen, handleLinkClick, destination, setDestination, crew, setCrew, tech, setTech }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider

