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
          <div className='top-96 lg:top-[700px] right-4 lg:right-28 absolute'>
          <DownloadPdfButton />
          </div>
        </div>
    </>
  )
}

export default PortFolio