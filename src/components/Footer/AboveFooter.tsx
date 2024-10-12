import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboveFooter() {
  return (
    <>
      <div className=' mx-16'>
        <div className='flex lg:flex-row flex-col justify-around mt-10'>
          <div className='pr-2'>
            <h1 className='text-md font-mono font-bold text-indigo-500'>Let’s Get Started</h1>
            <h1 className='lg:text-4xl text-2xl font-bold text-gray-700 py-3'>Are you ready for a better, more productive business</h1>
            <p className='py-4 text-body-color leading-7'>Tito Softwares is a global technology solutions provider leading the digitalization of private and public sectors. They drive the business transformation of their customers by delivering integrated, inventive and digitally productive experiences that blend cloud, analytics, mobility, smart services, Dynamics 365 - CRM/ERP, infrastructure, IoT, augmented reality and others.</p>
            <Link href="/contact">
              <button className="bg-white text-slate-800 border-blue-200 border-2 px-4 py-3 rounded-lg hover:text-white hover:bg-indigo-600 hover:border-2 hover:border-blue-200 duration-500 transition-all ml-6 mt-3">
                Request a quote
              </button>
            </Link>
          </div>
          <Image src="/images/hero/heroAllPage.png" alt='img' height={40} width={1540} className='w-[1900px]' />
        </div>
      </div>
    </>
  )
}

export default AboveFooter