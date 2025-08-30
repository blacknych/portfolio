import { techStackData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

const Skills = ({ isDarkMode }) => {
  return (
    <div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h4 className='mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>What I Use</h4>
        <h2 className='text-5xl font-Ovo'>My Tech Stack</h2>
        <p className='max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400'>
          A collection of technologies, frameworks, and tools I use in building and designing applications.
        </p>
      </motion.div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>
        {techStackData.map(({ icon, title, description, items }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col items-start text-left 
                       border border-gray-300 dark:border-gray-600 rounded-xl p-8 
                       bg-white/70 dark:bg-darkHover/40 
                       hover:shadow-lg hover:-translate-y-1 
                       transition-all duration-300 ease-in-out'
          >
            {/* Icon with circle background 
            
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Image src={icon} alt='' className='w-8 h-8' />
            </div>

            */}
            
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 dark:text-white/70 mt-2 mb-4'>{description}</p>

            {/* Items */}
            <ul className='list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-white/80'>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
