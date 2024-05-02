import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <Link href={previewUrl}>
      <div className='group cursor-pointer'>
        <div
          className='h-52 md:h-72 rounded-t-xl relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110'
          style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
        >
        </div>
        <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
          <h5 className='text-xl text-center font-semibold mb-2'>{title}</h5>
          <p className='text-[#ADB7BE]'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
