'use client'
import DishSwiper from './components/DishSwiper'
import { useParams } from 'next/navigation'

export default function CategoryPage() {
  return (
    <div className="h-screen">
      <DishSwiper />
    </div>
  )
}