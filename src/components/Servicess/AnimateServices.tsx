import React from 'react'

function ServicesAnimate() {
  return (
    <>
      <div className='max-w-[1320px] md:py-[80px] py-5 mx-auto '>
        <h1 className='text-3xl text-center'>This service Design is good or not?</h1>

      </div>

      <div className='max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6'>
        <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000'>
          <p className='w-10 ml-32 '>
          <svg viewBox="0 0 24 24" enable-background="new 0 0 24 24">
            <path d="M20 4c0-2.2-1.8-4-4-4H8C5.8 0 4 1.8 4 4v16c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4zm-7 18h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm5-5c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v12z" fill="#4b18c2" className="fill-000000 group-hover:fill-slate-200 duration-1000">
            </path>
          </svg>
          </p>
          <h3 className='text-xl py-2'>Web Design</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000'>
          <p className='w-10 ml-32 hover:text-white'>
          <svg viewBox="0 0 24 24" enable-background="new 0 0 24 24">
            <path d="M20 4c0-2.2-1.8-4-4-4H8C5.8 0 4 1.8 4 4v16c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4zm-7 18h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm5-5c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v12z" fill="#4b18c2" className="fill-000000 group-hover:fill-slate-200 duration-1000">
            </path>
          </svg>
          </p>
          <h3 className='text-xl py-2'>Web Design</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
       
      </div>
    </>
  )
}

export default ServicesAnimate