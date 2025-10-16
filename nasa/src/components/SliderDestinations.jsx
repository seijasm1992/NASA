import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DataContext } from "../Context/DataContext";

export default function SliderDestinations() {
  const { data, destination, setDestination } = useContext(DataContext);

  if (!data) return null;

  const selectedDestination = data.destinations[destination];

  return (
    <section className="min-h-screen bg-[url('/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat font-barlow px-4">
      <div>
        <div>
          {/* Imagen animada */}
          <motion.img
            src={selectedDestination.images.png}
            alt={selectedDestination.name}
            className="w-[200px] h-[200px] object-cover rounded-full mx-auto mt-12"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          />
        </div>

        {/* Lista de destinos */}
        <ul className="flex justify-center gap-6 mt-12">
          {data.destinations.map((dest, index) => (
            <li key={index}>
              <button
                onClick={() => setDestination(index)}
                className={`uppercase tracking-wider font-bellefair text-lg transition duration-200 ${
                  index === destination
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {dest.name}
              </button>
            </li>
          ))}
        </ul>

        <h1 className="text-white text-center font-bellefair text-5xl uppercase tracking-wider mt-8">{selectedDestination.name}</h1>
        <p className="text-white text-center font-bellefair text-1xl uppercase tracking-wider mt-8 px-4">{selectedDestination.description}</p>
     
     <div className="border-t-2 border-[#21242D] mt-12 w-full px-4"></div>
      </div>
      <div className="mt-4 flex flex-col gap-4 justify-center">
        <h2 className="text-white text-center font-bellefair text-1xl uppercase tracking-wider">Avg. Distance</h2>
        <span className="text-white text-center font-bellefair text-2xl uppercase tracking-wider">{selectedDestination.distance}</span>
        <h2 className="text-white text-center font-bellefair text-1xl uppercase tracking-wider mt-4">Est. Travel Time</h2>
        <span className="text-white text-center font-bellefair text-2xl uppercase tracking-wider">{selectedDestination.travel}</span>
      </div>
    </section>
  );
}
