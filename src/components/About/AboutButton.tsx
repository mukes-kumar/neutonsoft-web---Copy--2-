// import React, { useEffect } from 'react'
// import Image from 'next/image';
// import ScrollReveal from 'scrollreveal';


// interface StyleProps {
//   color: string;
// }
// function AboutButton() {

//   const styles: StyleProps = {
//     color:'transparent',
//   };

//     const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     // reset: true
//   });

//   useEffect(() => {
//     sr.reveal('.home__header, .section__title', { delay: 600 });
//     sr.reveal('.home__footer', { delay: 700 });
//     sr.reveal('.home__img', { delay: 900, origin: 'top' });

//     sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy', { origin: 'top', interval: 100 });
//     sr.reveal('.specs__data, .discount__animate', { origin: 'left', interval: 100 });
//     sr.reveal('.specs__img, .discount__img', { origin: 'right' });
//     sr.reveal('.case__img', { origin: 'top' });
//     sr.reveal('.case__data');
//   }, );
//   return (
//     <>
//        <div className="home__header relative overflow-hidden bg-gray-50 pt-16 pb-32 space-y-24">
//           <div className="relative">
//             <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
//               <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-5 lg:px-0 ">

//                 <div>
//                   {/* <div className=''> 
//                     <span className="p-2 flex h-12 w-16 items-center justify-center rounded-xl bg-indigo-500 text-white">
                      
//                     </span>
//                   </div> */}

//                   <div className="mt-6">
//                     <h2 className="section__title text-2xl font-bold tracking-tight text-slate-900">
//                     NEUTON COMPUTERSOFT PRIVATE LIMITED
//                     </h2>
//                     <p className="mt-4 text-lg text-body-color">
//                     At NeutonSoft we help our customers to maximize return and productivity through outsourcing their non-core functions.

//                     In partnering with companies can expect: 
//                     </p>
//                     <div className="ml-10 text-base font- leading-relaxed text-body-color">

              
//               <div className="mt-4 lg:mt-4 flex items-center">
//                 <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
//                 </span>
//                 <p>Better and more cost-effective processes</p>
//               </div>



//               <div className="mt-4 lg:mt-1 flex items-center">
//                 <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
//                 </span>
//                 <p>Reductions in cost and time to hire and more control over both</p>
//               </div>

//               <div className="mt-4 lg:mt-1 flex items-center">
//                 <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
//                 </span>
//                 <p>A wider and more engaged network of potential candidates</p>
//               </div>

//               <div className="mt-4 lg:mt-1 flex items-center">
//                 <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
//                 </span>
//                 <p>Enhanced employer brand and corporate reputation</p>
//               </div>
              
//               <div className="mt-1 lg:mt-1 flex items-center">
//                 <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
//                 </span>
//                 <p>Closer alignment of talent strategy with business strategy</p>
//               </div>
             
//             </div>
//                     <div className="specs__data mt-6">
//                       <a className="inline-flex rounded-lg bg-indigo-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-700 hover:bg-indigo-700 hover:ring-pink-700"
//                         href="/about">
//                         Learn More
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:specs__img mt-12 sm:mt-16 lg:mt-0">
//                 <div className="lg:-mr-48 pl-6 md:mr-1 lg:relative lg:m-0 lg:h-full lg:px-0">
//                   <Image alt=' img' loading="lazy" width="647" height="486"
//                     className="specs__img ml-2 ring-0 ring-white ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded hover:scale-105 transition-all lg:duration-300"
//                     style={styles} src="/images/about/footer.png"/>
//                 </div>
                
//               </div>
//             </div>
//           </div>



//           <div className="relative">
//             <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
//               <div className="home__header mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
//                 <div>
//                   <div>
                    
//                     <p className='flex h-16 w-12'></p>
//                   </div>
//                   <div className="mt-0">
//                     <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//                      Why Neutonsoft?
//                     </h2>
//                     <p className="mt-4 text-lg text-body-color">
//                     NEUTON COMPUTERSOFT PRIVATE LIMITED has vast experience providing On-Demand Recruiting Services. On-Demand Recruitment Provides you with the flexibility of choosing when and for how long you need talent acquisition services based on your needs.
//                     </p>
//                     <div className="mt-6">
//                       <a className="inline-flex rounded-lg bg-white-600 px-4 py-1.5 text-base font-semibold leading-7 text-white r"
//                         href="/login">
//                         {/* Learn More */}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="specs__data mt-12 w-full sm:mt-16 lg:mt-0">
//                 <div className="lg:-ml-48 pr-6 md:ml-16 lg:relative lg:m-0 lg:h-full  w-fulllg:px-0">
//                   <Image alt="Inbox user interface" loading="lazy" width="647" height="486"
//                     className="w-[450px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
//                     style={styles} src="/images/about/footer.png"/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     </>
//   )
// }

// export default AboutButton