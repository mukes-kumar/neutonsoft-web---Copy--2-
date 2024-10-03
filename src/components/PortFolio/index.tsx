import Image from 'next/image'
import React from 'react'
import DownloadPdfButton from './DownloadPdfButton'

function PortFolio() {
  return (
    <>
        <div className='mt-20'>
          <div>
              <Image src="/images/portfolio/topImg1.png" height={400} width={1000} alt='img1' className='w-full'/>
          </div>
          <div className='sm:top-[350px] lg:top-[550px] xl:top-[700px] md:top-[450px] top-[272px] sm:right-4 right-2 lg:right-28 absolute'>
          <DownloadPdfButton />
          </div>
        </div>
    </>
  )
}

export default PortFolio