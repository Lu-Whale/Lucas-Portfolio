import { useState, useEffect } from 'react'
import Image from 'next/image'

function ResponsiveImage() {
  //Set the initial state
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // Handle the resizing action
    function handleResize() {
      // Set the window size state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Listen for window resize events
    window.addEventListener('resize', handleResize)
    // Trigger the resize event to get initial values
    handleResize()
    // Clean up function
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const imageWidth = windowSize.width >= 1024 ? 400 : 200
  const imageHeight = windowSize.width >= 1024 ? 400 : 200

  return (
    <Image
      src='/images/avatar.png'
      alt='avatar image'
      className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-[#181818] relative animate-profile-animate will-change-transform will-change-box-shadow'
      width={imageWidth}
      height={imageHeight}
      layout='fixed'
    />
  )
}

export default ResponsiveImage

