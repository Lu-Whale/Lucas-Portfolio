import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' }
}

const AboutTag = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-write' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className='h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 mt-2 mr-3'
      ></motion.div>
    </button>
  )
}

export default AboutTag
