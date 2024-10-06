import React from 'react';
import Image from 'next/image'; // Import Image component for icons
import Link from 'next/link';

const CallMail = () => {
  const contactInfo = [
    {
      icon: '/images/contactUs/call.svg', // Replace with your phone icon path
      text: 'Call Anytime',
      content: '+91 1234 567 890',
      content1: '+91 1234 567 890',
    },
    {
      icon: '/images/contactUs/mail.svg', // Replace with your email icon path
      text: 'Email Us',
      content: 'contact@example.com',
      content1: 'neutonsoft@gmail.com',
    },
    {
      icon: '/images/contactUs/location.svg', // Replace with your location icon path
      text: 'Visit Us',
      content: '20 Island Park Road,',
      content1: 'New Jears, New York USA',
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
    <div className="container mx-auto py-16 mr-20 bg-white rounded-lg shadow p-10 pb-16">
      {/* <h1 className="text-3xl font-bold mb-8">Contact Us</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex  items-center">
            <Image
              src={info.icon}
              alt={info.text}
              width={50} // Adjust icon width as needed
              height={30} // Adjust icon height as needed
              className="mb-4 mr-5 mt-4 bg-slate-200 p-3 rounded-md"
            />
            <div className='flex flex-col'>
              <h2 className="text-xl font-semibold mb-2 text-indigo-600">{info.text}</h2>
              <p className="text-gray-500">{info.content}
              </p>
              <p className='text-gray-500 mt-1'>{info.content1}</p>
            </div>
            
          </div>
        ))}
        <div>
          <h2 className="text-2xl text-center font-semibold mb-2 text-slate-900 mt-2">Follow Us</h2>
        </div>
        <div className='flex'>
            {
              icon.map((icon) =>(
                <Link href={icon.href} key={icon.icon} className='flex justify-around flex-row w-full '>
                  <Image src={icon.icon} alt='icon' width={50} height={30} className='hover:bg-indigo-200 transition-all delay-200 p-2 rounded-lg'/>
                </Link>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default CallMail;