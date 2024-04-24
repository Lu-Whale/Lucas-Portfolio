'use client'
import React, { useEffect, useState } from 'react'
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

const breakpoints = {
  sm: 640, // Tailwind sm breakpoint
  md: 768, // Tailwind md breakpoint
  lg: 1024, // Tailwind lg breakpoint
};

const AchievementsSection = () => {
  const [key, setKey] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to check if the current width crosses a breakpoint compared to the previous width
    const checkBreakpointCross = (prevWidth, currentWidth) => {
      const breakpointValues = Object.values(breakpoints);
      for (let breakpoint of breakpointValues) {
        if ((prevWidth < breakpoint && currentWidth >= breakpoint) ||
          (prevWidth >= breakpoint && currentWidth < breakpoint)) {
          return true; // The breakpoint was crossed
        }
      }
      return false;
    };

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (checkBreakpointCross(windowWidth, currentWidth)) {
        setKey(prevKey => prevKey + 1); // Trigger the animation
      }
      setWindowWidth(currentWidth); // Update the width
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div
        className='sm:border-[#33353F] md:border rounded-md py-8 sm:px-8 md:px-4 lg:px-16 flex flex-col md:flex-row items-center justify-between'>
        {achievementsList.map((achievement, index) => {
          const isNumber = /^\d+$/.test(achievement.value.replace(/,/g, ''))
          return (
            <div
              key={`${key}-${index}`}
              className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
            >
              <h2 className='text-white text-3xl md:text-xl lg:text-3xl font-bold flex flex-row'>
                {achievement.prefix}
                {isNumber ? (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value.replace(/,/g, ''))}
                    locale='en-US'
                    className='text-white text-3xl md:text-xl lg:text-3xl font-bold'
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
                    className='text-white text-3xl md:text-xl lg:text-3xl font-bold'
                  >
                    {achievement.value}
                  </motion.div>
                )}
                {achievement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base md:text-sm lg:text-base'>{achievement.metric}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AchievementsSection
