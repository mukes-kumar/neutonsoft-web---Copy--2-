import Image from 'next/image'
import React from 'react'

function Locations() {
  return (
    <>
      <div className='w-full mt-5'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-2xl font-semibold'>Location</h1>
          <a href='#' className='mt-4 w-full'>
            <Image
              src="/images/location/location.jpg"
              alt="logo"
              width={900}
              height={30}
              className="items-center dark:block w-full"
            />
          </a>
        </div>

      </div>
    </>
  )
}

export default Locations