"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

function Locations() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className='w-full mt-5'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-2xl text-blue-700 font-bold shadow-sm py-2 px-2'>Location</h1>
          <motion.a href='https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4120779,78.0783672,10z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.406498!4d78.4772439!16zL20vMDljNnc?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D' className='mt-4 w-full '
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src="/images/contactUs/Locations.jpg"
              alt="logo"
              width={900}
              height={30}
              className="items-center dark:block w-full"
            />
          </motion.a>
        </div>

      </div>
    </>
  )
}

export default Locations