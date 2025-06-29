// import HeroImg from '@/images/hero.png';
// import Image from 'next/image';

// const Home = () => {
//   return (
//     <div className="h-[450px] bg-[#030512]">
//       <div className="container h-full text-white flex items-center justify-between">
//         <div className="flex justify-center items-center h-full">
//           Home Page
//         </div>
//         <div className='h-[450px]'>
//          <Image src={HeroImg} alt="Hero Image" className="h-full w-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

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
