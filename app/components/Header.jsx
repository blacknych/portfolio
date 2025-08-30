import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets';
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0}}
        whileInView={{ scale: 1}}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt=''className='rounded-full w-32'/>
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0}}
        whileInView={{ y:0, opacity: 1}}
        transition={{ duration: 0.6, delay:0.3 }} 
        className='mt-5 text-xl sm:text-3xl lg:text-[50px] font-Ovo'>Hi! I'm Nicole Mariss Enriquez 
      </motion.h3>

      <h1 className='flex items-end gap-2 text-l md:text-xl mb-3 font-Ovo'>UI/UX Designer · Software Developer · Software QA Tester</h1>
      <p className='max-w-2xl mx-auto font-Ovo'>  A Computer Science graduate passionate about crafting responsive, user-friendly web applications  and clean UI/UX designs. Experienced with Vue.js, Next.js, C#, ASP.NET, Figma, and GitHub, I enjoy turning ideas into practical digital solutions.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
        className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

        <a href="/EnriquezResume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>

    

    </div>
  )
}

//vid end 2:57:23 header part pa end motion edits
//deploy 
// tp be fix from navbar space to header letseee
export default Header
