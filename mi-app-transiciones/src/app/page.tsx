'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Transiciones en Next.js
        </h1>
      </div>
    </PageTransition>
  )
}
