'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, X, Heart } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Dish, dishesData } from '@/data/dishes'
import { IngredientDetailModal } from './IngredientDetailModal';




export default function DishSwiper() {
  const params = useParams()
  const category = params.category as string
  const [currentIndex, setCurrentIndex] = useState(0)
  const [exitX, setExitX] = useState(0)
  const [showMatch, setShowMatch] = useState(false)
  const [dishes, setDishes] = useState<Dish[]>([])
  const [showIngredientDetails, setShowIngredientDetails] = useState(false)
  
  useEffect(() => {
    if (category && dishesData[category]) {
      // On prend simplement les plats dans l'ordre sans les mélanger
      setDishes(dishesData[category])
    }
  }, [category])

  const handleSwipe = (direction: 'left' | 'right') => {
    const xMove = direction === 'left' ? -200 : 200
    setExitX(xMove)
    
    if (direction === 'right') {
      setShowMatch(true)
      // On supprime le timeout qui fait passer au plat suivant
    } else {
      setTimeout(() => {
        handleNextCard()
      }, 200)
    }
}

  const handleNextCard = () => {
    if (currentIndex >= dishes.length - 1) {
      // Au lieu de remélanger, on recommence simplement au début
      setCurrentIndex(0)
    } else {
      setCurrentIndex(prev => prev + 1)
    }
    setExitX(0)
  }

  const handlePreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const matchVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.7,
        bounce: 0.5
      }
    },
    exit: { 
      scale: 0,
      rotate: 180,
      transition: { duration: 0.3 }
    }
  }

  if (!dishes.length) return null

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col items-center justify-center p-4 overflow-hidden touch-none">
    {/* Augmentons le padding-top de la flèche */}
    <Link 
      href="/menu" 
      className="absolute top-5 left-6 z-50 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
    >
      <ArrowLeft className="w-6 h-6 text-gray-600" />
    </Link>

       <div className="w-full max-w-md h-[70vh] relative mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-xl"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
            whileDrag={{ cursor: "grabbing" }}
            onDragEnd={(e, info) => {
              const swipeThreshold = 50;
              if (Math.abs(info.offset.x) > swipeThreshold) {
                handleSwipe(info.offset.x > 0 ? 'right' : 'left')
              }
            }}
            animate={{ 
              x: exitX,
              rotate: exitX * 0.03
            }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={dishes[currentIndex].image ?? '/default-dish.jpg'}
                alt={dishes[currentIndex].name}
                fill
                draggable="false"
                className="object-cover pointer-events-none"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          onClick={() => handleSwipe('left')}
        >
          <X className="w-8 h-8 text-rose-500" strokeWidth={2.5} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          onClick={handlePreviousCard}
        >
          <ArrowLeft className="w-8 h-8 text-amber-500" strokeWidth={2.5} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          onClick={() => handleSwipe('right')}
        >
          <Heart className="w-8 h-8 text-teal-500" strokeWidth={2.5} />
        </motion.button>
      </div>

      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-50 backdrop-blur-sm"
          >
            <motion.div
              variants={matchVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-8"
            >
              <div className="bg-green-500 w-32 h-32 rounded-full flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-4"
              >
                <span className="text-2xl text-white font-medium">Match !</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 max-w-md w-11/12 shadow-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl font-medium text-gray-800 mb-4">
                {dishes[currentIndex].name}
              </h2>
              
              <div className="space-y-2">
                {dishes[currentIndex].ingredients.map((ingredient, idx) => (
                  <div key={idx}>
                    <p className="text-gray-600">
                      {ingredient}
                    </p>
                  </div>
                ))}
                <div className="flex justify-end mb-4">
                  <div className="price-neumorphic inline-flex items-center gap-1 px-4 py-2">
                    <span className="text-lg font-medium text-gray-700">
      {dishes[currentIndex].price}
       </span>
       <span className="text-base font-normal text-gray-600">€</span>
       </div>
       </div>

       <button
                onClick={() => setShowIngredientDetails(true)}
                className="mt-4 w-full py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors"
              >
                Découvrir les ingrédients en détail
              </button>

              <button
      onClick={() => {
        setShowMatch(false)
        handleNextCard()
      }}
      className="w-full py-3 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-colors"
    >
      Voir le plat suivant
    </button>


                

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIngredientDetails && (
          <IngredientDetailModal
          dish={dishes[currentIndex]}  // On passe le plat entier
          onClose={() => setShowIngredientDetails(false)}
        />
        )}
      </AnimatePresence>
    </div>
  )
}

