

import HowToStartSection from '@/components/Hero/HowToStart'
import IndustriesWeServe from '@/components/Hero/IndustriesWeServe'
import React from 'react'
import HeroSection from '@/components/Hero/hero-section'
import Services from '@/components/Hero/Services'
import ClientReviewsSection from '@/components/Hero/OurClient'
import MiniContactCTA from '@/components/Hero/CTA'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <HowToStartSection />
      <Services/>
      <IndustriesWeServe />
      <ClientReviewsSection />
      <MiniContactCTA/>
    </div>
  )
}

export default Home
