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
          <h1 className='text-2xl text-blue-700 font-bold shadow-sm py-2 px-2'> Location</h1>
          
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58317329.910328805!2d-13.994738349999995!3d26.858796350000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4966e80b94fca5f%3A0x16bb521a7c11a4bb!2sNeutonsoft!5e0!3m2!1sen!2sin!4v1728026121956!5m2!1sen!2sin" width="700" height="350" allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </div>

      </div>
    </>
  )
}

export default Locations
