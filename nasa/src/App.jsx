import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Destination from "./Pages/Destination"
import Crew from "./Pages/Crew"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen bg-[url('/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat font-barlow">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </div>
  )
}

export default App
