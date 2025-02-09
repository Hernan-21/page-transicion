'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

export default function Pagina1() {
  return (
    <PageTransition>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex flex-col items-center justify-center p-8"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        >
          Página 1
        </motion.h1>
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
          >
            Volver al inicio
          </motion.div>
        </Link>
      </motion.div>
    </PageTransition>
  )
}
