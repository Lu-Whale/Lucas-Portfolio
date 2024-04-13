'use client';
import React, { useTransition, useState } from 'react';
import AboutTag from './AboutTag';

const TAB_DATA = [
  {
    title: 'Technical Skills',
    id: 'Technical Skills',
    content: (
      <div>
        <div className='flex flex-wrap gap-3'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold mb-4'>
            Languages:
          </h3>
          <span>Java, </span>
          <span>JavaScript, </span>
          <span>Python, </span>
          <span>C++, </span>
          <span>SQL</span>
        </div>
        <div className='flex flex-wrap gap-3'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold mb-4'>
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
        <div className='flex flex-wrap gap-3'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold mb-4'>Frontend:</h3>
          <span>React, </span>
          <span>Next.js, </span>
          <span>jQuery, </span>
          <span>Ajax, </span>
          <span>HTML, </span>
          <span>CSS, </span>
          <span>Jest </span>
        </div>
        <div className='flex flex-wrap gap-3'>
          <h3
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-1xl font-semibold mb-4'>Cloud
            & DevOps:</h3>
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

        <h3
          className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-2xl font-semibold mb-2'>
          Beijing institute of Technology
        </h3>
        <ul className='list-disc pl-2'>
          <li>Bachelor of Science in Computer Science</li>
        </ul>
      </div>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('Technical Skills')
  const [_, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
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
            selectTab={() => handleTabChange('Technical Skills')}
            active={tab === 'Technical Skills'}
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
      </div>
    </section>
  )
}

export default AboutSection
