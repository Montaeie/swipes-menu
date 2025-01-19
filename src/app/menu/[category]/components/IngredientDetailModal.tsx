// src/app/menu/[category]/components/IngredientDetailModal.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Dish } from '@/data/dishes';
import { getIngredientDetails, IngredientDetail } from '@/data/ingredientsDetails';

interface IngredientDetailModalProps {
 dish: Dish;
 onClose: () => void;
}

export function IngredientDetailModal({ dish, onClose }: IngredientDetailModalProps) {
 // État pour stocker l'ingrédient sélectionné
 const [selectedIngredient, setSelectedIngredient] = useState<IngredientDetail | null>(null);

 // Animations
 const containerVariants = {
   hidden: { opacity: 0 },
   show: {
     opacity: 1,
     transition: { staggerChildren: 0.1 }
   }
 };

 const itemVariants = {
   hidden: { y: 20, opacity: 0 },
   show: { y: 0, opacity: 1 }
 };

 // Gestion du clic sur un ingrédient
 const handleIngredientClick = (ingredientName: string) => {
   console.log('Clicked ingredient:', ingredientName);
   const details = getIngredientDetails(ingredientName);
   console.log('Found details:', details);
   setSelectedIngredient(details || null);
 };

 return (
   <motion.div 
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="fixed inset-0 bg-[#013826]/80 backdrop-blur-sm flex items-center justify-center z-50"
     onClick={(e) => {
       if (e.target === e.currentTarget) onClose();
     }}
   >
     <motion.div 
       initial={{ y: 50, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ y: 50, opacity: 0 }}
       className="relative bg-[#eee6d7] rounded-2xl w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto"
     >
       {/* Logo */}
       <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
         <Image 
           src="/2.png" 
           alt="La Place Italienne" 
           width={80} 
           height={80}
           className="rounded-full border-4 border-[#eee6d7]"
         />
       </div>

       {!selectedIngredient ? (
         // Vue de la liste des ingrédients
         <>
           {/* En-tête */}
           <div className="sticky top-0 bg-[#eee6d7] pt-6 pb-4 px-6 border-b border-[#013826]/20">
             <button
               onClick={onClose}
               className="absolute top-4 right-4 p-2 hover:bg-[#013826]/10 rounded-full transition-colors"
             >
               <X className="w-6 h-6 text-[#013826]" />
             </button>
             <h2 className="text-2xl font-semibold text-[#013826] mt-2">
               {dish.name}
             </h2>
             <p className="text-sm text-[#013826]/80 mt-1">
               Découvrez nos ingrédients sélectionnés
             </p>
           </div>

           {/* Liste des ingrédients */}
           <motion.div 
             className="p-6 space-y-4"
             variants={containerVariants}
             initial="hidden"
             animate="show"
           >
             {dish.ingredients.map((ingredient, index) => {
               const hasDetails = getIngredientDetails(ingredient);
               return (
                 <motion.div
                   key={index}
                   variants={itemVariants}
                   className={`group bg-white/50 rounded-xl border border-[#013826]/10 p-4 
                     ${hasDetails ? 'hover:bg-white/80 cursor-pointer' : ''} 
                     transition-all duration-300`}
                   onClick={() => hasDetails && handleIngredientClick(ingredient)}
                 >
                   <div className="flex items-center justify-between">
                     <h3 className="text-lg font-medium text-[#013826]">
                       {ingredient}
                     </h3>
                     {hasDetails && (
                       <ChevronRight className="w-5 h-5 text-[#013826]/40 group-hover:text-[#013826] transition-colors" />
                     )}
                   </div>
                 </motion.div>
               );
             })}
           </motion.div>
         </>
       ) : (
         // Vue détaillée d'un ingrédient
         <div className="p-6">
           <div className="flex items-center justify-between mb-6">
             <button
               onClick={() => setSelectedIngredient(null)}
               className="p-2 hover:bg-[#013826]/10 rounded-full transition-colors"
             >
               <ArrowLeft className="w-6 h-6 text-[#013826]" />
             </button>
             <button
               onClick={onClose}
               className="p-2 hover:bg-[#013826]/10 rounded-full transition-colors"
             >
               <X className="w-6 h-6 text-[#013826]" />
             </button>
           </div>

           <div className="space-y-4">
             <h3 className="text-2xl font-semibold text-[#013826]">
               {selectedIngredient.name}
             </h3>
             
             {selectedIngredient.image && (
               <div className="relative h-48 rounded-lg overflow-hidden">
                 <Image
                   src={selectedIngredient.image}
                   alt={selectedIngredient.name}
                   fill
                   className="object-cover"
                 />
               </div>
             )}

             <p className="text-[#013826]/80">
               {selectedIngredient.description}
             </p>

             {selectedIngredient.origin && (
               <div className="bg-white/50 rounded-lg p-4">
                 <h4 className="font-medium text-[#013826] mb-2">Origine</h4>
                 <p className="text-[#013826]/80">
                   {selectedIngredient.origin.region && `${selectedIngredient.origin.region}, `}
                   {selectedIngredient.origin.pays}
                 </p>
               </div>
             )}

             {selectedIngredient.type && (
               <div className="bg-white/50 rounded-lg p-4 mt-4">
                 <h4 className="font-medium text-[#013826] mb-2">Type</h4>
                 <p className="text-[#013826]/80">
                   {selectedIngredient.type}
                 </p>
               </div>
             )}

             {selectedIngredient.allergene && (
               <div className="bg-amber-50 rounded-lg p-4 mt-4">
                 <p className="text-amber-800 font-medium">
                   ⚠️ Cet ingrédient peut contenir des allergènes
                 </p>
               </div>
             )}
           </div>
         </div>
       )}
     </motion.div>
   </motion.div>
 );
}