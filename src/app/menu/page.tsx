'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
 {
   id: 'antipasti',
   name: 'Antipasti',
   description: 'Nos entrées italiennes traditionnelles',
   image: '/Alice Pizza - Bruschetta.jpg'
 },
 {
   id: 'penne',
   name: 'Penne',
   description: 'Pâtes fraîches et sauces maison',
   image: '/Tagliatelle alla carbonara.jpg'
 },
 {
   id: 'pizza',
   name: 'Pizza',
   description: 'Pizzas napolitaines au feu de bois',
   image: '/ALICE 20653.jpg'
 },
 {
   id: 'panuozzi',
   name: 'Panuozzi',
   description: 'Notre spécialité napolitaine',
   image: '/ALICE 20796.jpg'
 },
 {
   id: 'dolci',
   name: 'Dolci',
   description: 'Desserts italiens authentiques',
   image: '/Noisette.jpg'
 },
 {
   id: 'boissons',
   name: 'Boissons',
   description: 'Vins italiens et boissons',
   image: '/Vinea Domini Luccicore Syrah.jpg'
 },
 {
   id: 'gnocchi',
   name: 'Gnocchi',
   description: 'Pâtes fraîches et sauces maison',
   image: '/ALICE 20433.jpg'
 },
 {
   id: 'risotto',
   name: 'Risotto',
   description: 'Saveurs crémeuses traditionnelles',
   image: '/risotte-.jpg'
 }
]

export default function MenuPage() {
 return (
   <div className="min-h-screen bg-[#eee6d7] relative pb-16">
     {/* Logo en haut */}
     <div className="flex justify-center pt-8">
       <Image
         src="/3.png"
         alt="La Place Italienne"
         width={220}
         height={220}
         className="mb-4"
       />
     </div>

     {/* En-tête */}
     <motion.div 
       className="text-center py-8 px-4"
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
     >
       <h1 className="text-4xl font-semibold text-[#013826] mb-2 font-serif">
         La Nostra Carta
       </h1>
       <p className="text-[#013826]/80 max-w-md mx-auto text-sm">
         Découvrez nos spécialités italiennes authentiques
       </p>
     </motion.div>

     {/* Grille des catégories */}
     <div className="container mx-auto px-4 py-4">
       <motion.div 
         className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
       >
         {categories.map((category, index) => (
           <Link href={`/menu/${category.id}`} key={category.id}>
             <motion.div
               className="aspect-[4/5] relative bg-white rounded-2xl shadow-lg overflow-hidden group"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               whileHover={{ y: -5 }}
               whileTap={{ scale: 0.98 }}
             >
               {/* Image de catégorie */}
               <div className="absolute inset-0">
                 <Image
                   src={category.image}
                   alt={category.name}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#013826]/90 to-transparent" />
               </div>
               
               {/* Contenu */}
               <div className="relative h-full flex flex-col items-center justify-end p-4 text-center">
                 <h2 className="text-xl font-serif text-white mb-2">
                   {category.name}
                 </h2>
                 <p className="text-sm text-white/90 line-clamp-2 px-2">
                   {category.description}
                 </p>
               </div>
             </motion.div>
           </Link>
         ))}
       </motion.div>
     </div>

     {/* Footer fixed */}
     <div className="fixed bottom-0 left-0 right-0 bg-black py-3 px-4 flex justify-center items-center gap-2 z-50">
       <span className="text-white/60 text-sm">Réalisé par</span>
       <Link href="https://unilab-digital.com" target="_blank" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
         <Image
           src="/UNILAB DIGITAL LOGO.png"
           alt="Unilab Digital"
           width={80}
           height={24}
           className="brightness-0 invert"
         />
       </Link>
     </div>
   </div>
 )
}