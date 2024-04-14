import { useState, useEffect } from 'react';
import Image from 'next/image'

function ResponsiveImage() {
  //Set the initial state
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handle the resizing action
    function handleResize() {
      // Set the window size state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    // Trigger the resize event to get initial values
    handleResize();
    // Clean up function
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageWidth = windowSize.width >= 1024 ? 290 : 180;
  const imageHeight = windowSize.width >= 1024 ? 290 : 180;

  return (
    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
      <Image
        src="/images/avatar.png"
        alt="avatar image"
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
}

export default ResponsiveImage;
