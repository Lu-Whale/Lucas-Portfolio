'use client'
import React, { useTransition, useState } from 'react'
import AboutTag from './AboutTag'
import { FaSkiing, FaSuitcase } from 'react-icons/fa';

const TAB_DATA = [
  {
    title: 'skills',
    id: 'skills',
    content: (
      <div>
        <div className='flex flex-wrap gap-3 mb-2 md:mb-4'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold'>
            Languages:
          </h3>
          <span>Java, </span>
          <span>JavaScript, </span>
          <span>Python, </span>
          <span>C++, </span>
          <span>SQL</span>
        </div>
        <div className='flex flex-wrap gap-3 mb-2 md:mb-4'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold'>
            Backend:
          </h3>
          <span>Spring Boot, </span>
          <span>Node.js, </span>
          <span>Express, </span>
          <span>Redis, </span>
          <span>Mybatis, </span>
          <span>MySQL, </span>
          <span>MongoDB, </span>
          <span>RESTful API</span>
        </div>
        <div className='flex flex-wrap gap-3 mb-2 md:mb-4'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold'>
            Frontend:
          </h3>
          <span>React, </span>
          <span>Next.js, </span>
          <span>jQuery, </span>
          <span>Ajax, </span>
          <span>HTML, </span>
          <span>CSS, </span>
          <span>Jest </span>
        </div>
        <div className='flex flex-wrap gap-3 mb-2 md:mb-4'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold'>
            Cloud & DevOps:
          </h3>
          <span>AWS (EC2, RDS, DynamoDB, S3, VPC), </span>
          <span>Docker, </span>
          <span>Git, </span>
          <span>CI/CD</span>
        </div>
      </div>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div>
        <h3
          className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-2xl font-semibold mb-2'>
          The University of Sydney
        </h3>
        <ul className='list-disc pl-2 mb-4'>
          <li>Master of IT & Master of IT Management specialised in Software Engineering</li>
          <li>Graduated with Distinction</li>
          <li>Listed in Postgraduate High Honour Roll</li>
          <li>Ranked 1st in ‘Data Structures and Algorithms’ and ‘Object-Oriented-Programming’ units</li>
        </ul>
      </div>
    )
  }
]

const TAB2_DATA = [
  {
    title: 'hobbies',
    id: 'hobbies',
    content: (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='rounded-lg shadow-lg bg-[#222] p-6'>
          <FaSkiing size={40} className='text-white' />
          <h5 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 text-xl font-medium mb-2'>Skiing</h5>
          <p className='text-[#ADB7BE] mb-4'>
            I am an avid skier who enjoys the thrill and challenge of navigating various terrains.
            This hobby not only allows me to appreciate the breathtaking snowy landscapes but also sharpens my focus and coordination.
            Skiing reflects my love for outdoor activities and demonstrates my enthusiasm for embracing challenges.
          </p>
        </div>
        <div className='rounded-lg shadow-lg bg-[#222] p-6'>
          <FaSuitcase size={40} className='text-white' />
          <h5 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-xl font-medium mb-2'>Travelling</h5>
          <p className='text-[#ADB7BE]'>
            Traveling is a way for me to explore new cultures, cuisines, and environments, broadening my perspective and inspiring creativity.
            Each journey enriches my understanding of the world, enhancing my adaptability and problem-solving skills.
            These experiences fuel my innovation and help me approach tasks with a fresh, global viewpoint.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'fun fact',
    id: 'fun fact',
    content: (
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <p>
          Constructing, Coming next week :)
        </p>
      </div>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  const [tab2, setTab2] = useState('hobbies')
  const [, startTransition2] = useTransition()

  const handleTabChange2 = (id) => {
    startTransition2(() => {
      setTab2(id)
    })
  }

  return (
    <section className='text-white mb-30 mt-10' id='about'>
      <div className='px-4 py-8 xl:px-16 sm:py-16 text-left flex flex-col h-full'>
        <h2
          className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400 text-center text-4xl font-semibold mb-4'>
          About Me
        </h2>
        <p className='text-[#ADB7BE] text-base lg:text-lg mb-2'>
          As a recent graduate software engineer, I aim to leverage cutting-edge technology to craft software solutions
          that benefit society.
          Committed to excellence and continuous growth, I aspire to transform even a fragment of the future through
          impactful software projects.
        </p>
        <p className='text-[#ADB7BE] text-base lg:text-lg'>
          I embrace diversity and thrive as a team player in collaborative settings.
          My adaptable and optimistic approach helps me handle changes effectively.
          I also prioritize clear and effective communication to ensure mutual understanding
        </p>
        <div className='flex flex-row justify-center text-2xl mt-8 space-x-20'>
          <AboutTag
            selectTab={() => handleTabChange('skills')}
            active={tab === 'skills'}
          >
            Tech Skills
          </AboutTag>
          <AboutTag
            selectTab={() => handleTabChange('education')}
            active={tab === 'education'}
          >
            Education
          </AboutTag>
        </div>
        <div className='mt-8'>
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>

        <div className='flex flex-row justify-center text-2xl mt-8 space-x-20'>
          <AboutTag
            selectTab={() => handleTabChange2('hobbies')}
            active={tab2 === 'hobbies'}
          >
            Hobbies
          </AboutTag>
          <AboutTag
            selectTab={() => handleTabChange2('fun fact')}
            active={tab2 === 'fun fact'}
          >
            Fun Fact
          </AboutTag>
        </div>
        <div className='mt-8'>
          {TAB2_DATA.find((t) => t.id === tab2).content}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
