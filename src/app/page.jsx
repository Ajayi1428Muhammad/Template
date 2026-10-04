"use client"
import React from 'react'
import HeroPage from '@/components/Hero'
import Process from '@/components/Process'
import Menu from '@/components/Menu'
import { motion, useScroll } from 'framer-motion'
import Reviews from '@/components/Reviews'
import Order from '@/components/Order'

const Page = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div className=''>
      <motion.div className="fixed top-0 left-0 right-0 z-50 h-2 bg-amber-300" style={{ scaleX: scrollYProgress, originX: 0,  }}></motion.div>
      <HeroPage />
      <Process />
      <div className='mt-8'>
      <Menu />
      </div>
      <div className='p-4'>
      <Reviews />
      </div>
      <Order />
    </div>
  )
}

export default Page
