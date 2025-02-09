'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-4xl mx-auto flex justify-center gap-6">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-2 rounded-lg font-semibold shadow-lg cursor-pointer"
          >
            Inicio
          </motion.div>
        </Link>
        <Link href="/pagina1">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-lg cursor-pointer"
          >
            Página 1
          </motion.div>
        </Link>
        <Link href="/pagina2">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-sm text-pink-600 px-6 py-2 rounded-lg font-semibold shadow-lg cursor-pointer"
          >
            Página 2
          </motion.div>
        </Link>
      </nav>
    </header>
  )
} 