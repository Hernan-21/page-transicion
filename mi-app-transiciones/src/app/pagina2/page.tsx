'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

export default function Pagina2() {
  return (
    <PageTransition>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="min-h-screen bg-gradient-to-br from-pink-500 to-orange-500 flex flex-col items-center justify-center p-8"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        >
          Página 2
        </motion.h1>
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
          >
            Volver al inicio
          </motion.div>
        </Link>
      </motion.div>
    </PageTransition>
  )
}