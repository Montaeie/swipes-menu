'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
 {
   id: 'antipasti',
   name: 'Antipasti',
   description: 'Nos entrées italiennes traditionnelles',
   icon: '🥗'
 },
 {
   id: 'penne',
   name: 'Penne',
   description: 'Pâtes fraîches et sauces maison',
   icon: '🍝'
 },
 {
   id: 'pizza',
   name: 'Pizza',
   description: 'Pizzas napolitaines au feu de bois',
   icon: '🍕'
 },
 {
   id: 'panuozzi',
   name: 'Panuozzi',
   description: 'Notre spécialité napolitaine',
   icon: '🥖'
 },
 {
   id: 'dolci',
   name: 'Dolci',
   description: 'Desserts italiens authentiques',
   icon: '🍰'
 },
 {
   id: 'boisson',
   name: 'Boissons',
   description: 'Vins italiens et boissons',
   icon: '🍷'
 }
]

export default function MenuPage() {
 return (
   <div className="min-h-screen bg-gray-100">
     {/* En-tête */}
     <motion.div 
       className="text-center py-8 px-4"
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
     >
       <h1 className="text-3xl font-semibold text-lpi-green mb-2">
         Menu Interactif
       </h1>
       <p className="text-gray-600 max-w-md mx-auto text-sm">
         Découvrez notre carte de manière innovante
       </p>
     </motion.div>

     {/* Grille des catégories */}
     <div className="container mx-auto px-4 py-4">
       <motion.div 
         className="grid grid-cols-2 gap-4"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
       >
         {categories.map((category, index) => (
           <Link href={`/menu/${category.id}`} key={category.id}>
             <motion.div
               className="aspect-square relative bg-white rounded-2xl shadow-lg overflow-hidden"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               whileHover={{ 
                 scale: 1.03,
                 boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
               }}
               whileTap={{ scale: 0.98 }}
             >
               {/* Fond décoratif */}
               <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
               
               {/* Contenu */}
               <div className="relative h-full flex flex-col items-center justify-center p-4">
                 {/* Cercle décoratif */}
                 
                 
                 {/* Icône */}
                 <motion.div
                   className="relative z-10 text-4xl mb-4 p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md"
                   whileHover={{ scale: 1.1, rotate: 5 }}
                   transition={{ type: "spring", stiffness: 400 }}
                 >
                   {category.icon}
                 </motion.div>

                 {/* Texte */}
                 <h2 className="text-lg font-medium text-lpi-green mb-2 tracking-wide">
                   {category.name}
                 </h2>
                 <p className="text-sm text-gray-600 text-center line-clamp-2 px-2">
                   {category.description}
                 </p>

                 {/* Ligne décorative */}
                 
               </div>
             </motion.div>
           </Link>
         ))}
       </motion.div>
     </div>

     {/* Logo */}
     <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
       <Image
         src="/2.png"
         alt="La Place Italienne"
         width={80}
         height={32}
         className="opacity-40"
       />
     </div>
   </div>
 )
}