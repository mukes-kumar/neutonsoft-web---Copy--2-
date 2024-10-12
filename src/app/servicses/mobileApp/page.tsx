import Breadcrumb from '@/components/Common/Breadcrumb'
import AboveFooter from '@/components/Footer/AboveFooter'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
      <Breadcrumb
        pageName="Mobile App Development"
        description=" "
      />
      <div className='container'>
        <div className='flex lg:flex-row flex-col justify-around mt-16'>
          <div className='pr-10'>
             <div className=''>
             <h1 className='text-2xl font-sans font-bold text-gray-700'>Native iOS Apps</h1>
             <p className='py-4 text-body-color'>Neutonsoft has a team of ios experts who build high-performing applications on the ios platforms with zero bugs and effectless runs on devices.</p>
             </div>
             <div>
             <h1 className='text-2xl font-sans font-bold text-gray-700'>Native Android Apps</h1>
             <p className='py-4 text-body-color'>From Planning to monitoring our team takes every process into consideration for the android application development.devices.</p>
             </div>
             <div>
             <h1 className='text-2xl font-sans font-bold text-gray-700'>React Native Apps</h1>
             <p className='py-4 text-body-color'>We build completely justified and performing React native applications. This gives clients a user experience with zero bugs.</p>
             </div>
          </div>
          <div>
            <div className='mt-0'>
              <Image src="/images/serviceDetails/mobileApps.webp" alt='img' height={40} width={840} />
            </div>
          </div>
        </div>

        <div className='flex lg:flex-row flex-col-reverse justify-around mt-16'>
        <div className=''>
            <div className='mt-0 w-full'>
              <Image src="/images/serviceDetails/Flutterd.png" alt='img' height={40} width={840}  className='lg:h-[400px]'/>
            </div>
          </div>
          <div className='pl-10 mt-10'>
             <div className=''>
             <h1 className='text-2xl font-sans font-bold text-gray-700'>Flutter Apps</h1>
             <p className='py-4 text-body-color'>Our team of experts knows how to work with the flutter platform and make the applications more enhanced with features and functions integrated into the app.</p>
             </div>
             <div>
             <h1 className='text-2xl font-sans font-bold text-gray-700'>Swift Apps</h1>
             <p className='py-4 text-body-color'>The expert team of developers works with the swift platform to make the app secure and accessible for clients with advanced resources.</p>
             </div>
             <div>
             <h1 className='text-2xl font-sans font-bold text-gray-700'>Hybrid Apps</h1>
             <p className='py-4 text-body-color'>At Tito, we make a different type of app like Hybrid apps which gives the clients and users an option to select their way of accessing the app.</p>
             </div>
          </div>
        </div>
      </div>

      <AboveFooter/>
    </>
  )
}

export default page