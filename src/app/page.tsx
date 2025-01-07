'use client'
import IntroAnimation from './components/IntroAnimation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/menu')
    }, 3000) // Redirection après 3 secondes

    return () => clearTimeout(timer)
  }, [router])

  return <IntroAnimation />
}