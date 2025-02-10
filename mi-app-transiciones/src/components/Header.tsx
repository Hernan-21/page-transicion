'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-4xl mx-auto flex justify-center gap-8">
        <Link href="/">
          <div className="relative px-4 py-2">
            <motion.div 
              className="text-white font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Inicio
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
              initial={{ scaleX: pathname === '/' ? 1 : 0 }}
              animate={{ scaleX: pathname === '/' ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </Link>
        <Link href="/pagina1">
          <div className="relative px-4 py-2">
            <motion.div 
              className="text-white font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Página 1
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
              initial={{ scaleX: pathname === '/pagina1' ? 1 : 0 }}
              animate={{ scaleX: pathname === '/pagina1' ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </Link>
        <Link href="/pagina2">
          <div className="relative px-4 py-2">
            <motion.div 
              className="text-white font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Página 2
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
              initial={{ scaleX: pathname === '/pagina2' ? 1 : 0 }}
              animate={{ scaleX: pathname === '/pagina2' ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </Link>
      </nav>
    </header>
  )
} 