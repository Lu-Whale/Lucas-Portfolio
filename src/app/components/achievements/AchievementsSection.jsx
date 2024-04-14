'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const AnimatedNumbers = dynamic(
  () => import('react-animated-numbers'),
  { ssr: false }
)

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Education",
    value: "Master",
  },

  {
    metric: "Languages",
    value: "4",
    postfix: "+",
  },
  {
    metric: "WAM",
    value: "Distinction",
  },
  {
    prefix: "~",
    metric: "Years",
    value: "1",
  },
];

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div
        className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center md:justify-around justify-between'>
        {achievementsList.map((achievement, index) => {
          const isNumber = /^\d+$/.test(achievement.value.replace(/,/g, ''))
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
            >
              <h2 className='text-white text-3xl font-bold flex flex-row'>
                {achievement.prefix}
                {isNumber ? (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value.replace(/,/g, ''))}
                    locale='en-US'
                    className='text-white text-3xl font-bold'
                    configs={(_, index) => ({
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1)
                    })}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-white text-3xl font-bold'
                  >
                    {achievement.value}
                  </motion.div>
                )}
                {achievement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AchievementsSection
