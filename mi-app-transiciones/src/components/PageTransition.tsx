'use client'
import { motion } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Contenido principal */}
      <motion.div
        className="absolute w-full h-full z-10"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Slider overlay */}
        <motion.div
          className="absolute inset-0 bg-blue-500 -z-10"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <div className="relative z-10 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  )
} 