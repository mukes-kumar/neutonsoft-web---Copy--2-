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
          <motion.a href='https://www.google.com/maps/place/Neutonsoft/@26.8587964,-13.9947383,2z/data=!3m1!4b1!4m6!3m5!1s0xa4966e80b94fca5f:0x16bb521a7c11a4bb!8m2!3d26.8587964!4d-13.9947383!16s%2Fg%2F11w9kycxxg?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D' className='mt-4 w-full '
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


// const Locations = () => {

//   const mapUrl = "https://www.google.com/maps/place/Neutonsoft/@26.8587964,-13.9947383,2z/data=!3m1!4b1!4m6!3m5!1s0xa4966e80b94fca5f:0x16bb521a7c11a4bb!8m2!3d26.8587964!4d-13.9947383!16s%2Fg%2F11w9kycxxg?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D";

//   return (
//     <div className="google-map">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-lg-12">
//             <iframe src="https://www.google.com/maps/place/Neutonsoft/@26.8587964,-13.9947383,2z/data=!3m1!4b1!4m6!3m5!1s0xa4966e80b94fca5f:0x16bb521a7c11a4bb!8m2!3d26.8587964!4d-13.9947383!16s%2Fg%2F11w9kycxxg?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D" loading="lazy" allowFullScreen width={600} height={240}
//             referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Locations

