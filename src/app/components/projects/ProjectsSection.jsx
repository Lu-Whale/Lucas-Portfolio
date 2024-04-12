'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'JSthermalComfort',
    description: 'A open-source package crafted to facilitate seamless and precise thermophysiological calculations in JavaScript.',
    image: '/images/projects/1.png',
    tag: ['All Projects', 'Open Source'],
    gitUrl: 'https://github.com/FedericoTartarini/jsthermalcomfort',
    previewUrl: 'https://github.com/FedericoTartarini/jsthermalcomfort'
  },
  {
    id: 2,
    title: 'AnimalCare',
    description: 'A social media site expected to help pet owners to find more friends in their local community.',
    image: '/images/projects/2.png',
    tag: ['All Projects', 'Web Platform'],
    gitUrl: 'https://github.com/Lu-Whale/AnimalCare',
    previewUrl: 'https://github.com/Lu-Whale/AnimalCare'
  },
  {
    id: 3,
    title: 'OldPhoneTrade',
    description: 'An second-hand mobile phones trading website, enabling users to buy and sell used mobile devices easily online.',
    image: '/images/projects/3.png',
    tag: ['All Projects', 'Web Platform'],
    gitUrl: 'https://github.com/Lu-Whale/OldPhoneSalesPlatform',
    previewUrl: 'https://github.com/FedericoTartarini/jsthermalcomfort'
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All Projects')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section id='projects'>
      <h2
        className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400 text-center text-4xl font-bold  mt-4 mb-8 md:mb-10'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-4 py-6 mb-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All Projects'
          isSelected={tag === 'All Projects'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web Platform'
          isSelected={tag === 'Web Platform'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Open Source'
          isSelected={tag === 'Open Source'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='More Coming Soon...'
          isSelected={tag === 'More Coming Soon'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
