import React from 'react';
import Image from 'next/image'; // Import Image component for icons
import Link from 'next/link';

const WhatYouDo = () => {
  return (
    <div className='bg-slate-100'>
      <div className="flex lg:flex-row flex-col gap-4  py-9 mx-5">
        <div className="flex-1 mx-5">
          <Image
            src="/images/our-process/what.jpg" // Replace with your image path
            alt="Image"
            width={700} // Adjust image width as needed
            height={500} // Adjust image height as needed
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center pb-16 lg:ml-1 ml-10">
          <h2 className="text-3xl font-bold mb-4 pr-32">We Develope Product That People Love to Use.</h2>
          <p className='pb-4 pr-32 text-gray-700'>Neutonsoft delivers end-to-end digital transformation solutions and technology services, ranging from ideation to designing and from development to deployment.</p>
          <div className="flex flex-row gap- mb-4">
            <div className="flex">
              <div>
                <Image src="/images/our-process/bulb.svg" height={10} width={50} alt='icon' className='mt-4' />
              </div>
              <div className='ml-2 mr-3'>
                <h1 className='text-lg text-green-700 font-semibold'>Our Vision</h1>
                <p className="text-gray-500 text-sm ">Create exceptional software and web applications</p>
              </div>
            </div>
            <div className="flex pr-20">
              <div>
                <Image src="/images/our-process/goal.svg" height={10} width={50} alt='icon' className='mt-4' />
              </div>
              <div className='ml-2'>
                <h1 className='text-lg text-green-700 font-semibold'>Our Goal</h1>
                <p className="text-gray-500 text-sm">Create exceptional software and web applications</p>
              </div>
            </div>
          </div>
          <div className='items-center lg:text-left text-center'>
            <Link href="/about" className="bg-blue-500 text-white px-3 py-2 rounded-lg mt-2">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouDo;