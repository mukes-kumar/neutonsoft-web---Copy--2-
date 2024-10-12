import React from 'react';
import Image from 'next/image'; // Import Image component for icons
import Link from 'next/link';

const CallMail = () => {
  const contactInfo = [
    {
      icon: '/images/contactUs/call.svg', // Replace with your phone icon path
      text: 'Call Anytime',
      content: '+91-8957165792',
      content1: '+971-568223695 ',
    },
    {
      icon: '/images/contactUs/mail.svg', // Replace with your email icon path
      text: 'Email Us',
      // content: 'contact@example.com',
      content1: 'info@neutonsoft.com',
    },
    {
      icon: '/images/contactUs/location.svg', // Replace with your location icon path
      text: 'Visit Us',
      content: 'F.NO. 203, SECTOR 1, P.NO 2 ON BRS CV TOWERS, MADHAPUR, HYDERABAD, SHAIKPET, TELANGANA, INDIA,500081',
      
    },
  ];

  const icon =[
    {
      icon: '/images/contactUs/linkedin.svg',
      href:'/https://www.linkedin.com/'
    }
    ,{
      icon: '/images/contactUs/instagram.svg',
      href:'https://www.instagram.com/'
    },{
      icon: '/images/contactUs/facebook.svg',
      href:'https://www.facebook.com/'
    }
    ,{
      icon: '/images/contactUs/twitter.svg',
      href:'https://x.com/?lang=en'
    }

];

  

  return (
    <div className="container mx-auto pt-10 mr-20 bg-white rounded-lg shadow p-10 pb-16">
      {/* <h1 className="text-3xl font-bold mb-8">Contact Us</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex  items-center group">
            <Image
              src={info.icon}
              alt={info.text}
              width={50} // Adjust icon width as needed
              height={30} // Adjust icon height as needed
              className="mb-4 mr-5 mt-4 bg-indigo-300 p-3 rounded-full group-hover:bg-indigo-800 duration-500 group-hover:rotate-180"
            />
            <div className='flex flex-col'>
              <h2 className="text-xl font-semibold mb-2 text-slate-600">{info.text}</h2>
              <p className="text-gray-500 text-sm">{info.content}
              </p>
              <p className='text-gray-500 mt-1 text-sm'>{info.content1}</p>
            </div>
            
          </div>
        ))}
        <div>
          <h2 className="text-2xl text-center font-semibold text-slate-900 mt-">Follow Us</h2>
        </div>
        <div className='flex group'>
            {
              icon.map((icon) =>(
                <Link href={icon.href} key={icon.icon} className='flex justify-around flex-row w-full '>
                  <Image src={icon.icon} alt='icon' width={50} height={30} className='hover:bg-indigo-400 transition-all duration-500 p-2 rounded-xl hover:animate-bounce'/>
                </Link>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default CallMail;