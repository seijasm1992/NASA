import React from "react"
import { motion } from "motion/react"

export default function Button() {
  return (
    <motion.button
      initial={{ backgroundColor: "#ffffff", color: "#0D0C12" }}
      whileHover={{
        backgroundColor: "#0D0C12",
        color: "#ffffff",
        scale: 1.08,
        boxShadow: "0 0 25px rgba(255,255,255,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-40 h-40 rounded-full font-bellefair text-2xl tracking-wider uppercase border border-white"
    >
      Explore
    </motion.button>
  )
}
