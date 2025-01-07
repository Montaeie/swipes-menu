'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function IntroAnimation() {
  const [sequence, setSequence] = useState(1)

  useEffect(() => {
    const timings = [
      setTimeout(() => setSequence(2), 3000),  // Logo → Concept
      setTimeout(() => setSequence(3), 8000),  // Concept → Message
      setTimeout(() => setSequence(4), 13000)  // Message → Photo
    ]

    return () => timings.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Séquence 1: Logo seul */}
        {sequence === 1 && (
          <motion.div
            key="logo"
            className="relative w-40 h-40"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/2.png"
              alt="La Place Italienne"
              fill
              className="object-contain"
            />
          </motion.div>
        )}

        {/* Séquence 2: Concept */}
        {sequence === 2 && (
          <motion.div 
            className="text-center px-8 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4.5 }}
          >
            <h1 className="text-2xl text-lpi-beige font-light tracking-wide leading-relaxed">
            &quot;Découvrez une nouvelle façon de choisir vos plats&quo;
            </h1>
          </motion.div>
        )}

        {/* Séquence 3: Message du fondateur */}
        {sequence === 3 && (
          <motion.div 
            className="text-center px-8 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5.5 }}
          >
            <p className='text-xl text-lpi-beige font-light italic leading-relaxed'>
            &quot;Je vous invite à découvrir nos spécialités italiennes&quot;
            </p>
          </motion.div>
        )}

        {/* Séquence 4: Photo et signature */}
        {sequence === 4 && (
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div 
              className="w-24 h-24 rounded-full overflow-hidden border-2 border-lpi-beige"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Image
                src="/api/placeholder/96/96"
                alt="Tahar da faustino belkadi"
                width={96}
                height={96}
                className="object-cover"
              />
            </motion.div>
            <motion.p 
              className="text-lpi-beige text-lg font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              &quot;Tahar da faustino belkadi&quot;
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}