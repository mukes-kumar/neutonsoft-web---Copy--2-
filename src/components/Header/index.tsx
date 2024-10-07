"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>

      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-slate-100 !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute lg:bg-transparent bg-white"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/neuton1.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/neuton2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black' : 'lg:bg-white bg-black'} transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black' : 'lg:bg-white bg-black'}  transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black' : 'lg:bg-white bg-black'} transition-all duration-300 dark:bg-black ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-slate-100 px-6 py-4 duration-300 dark:border-body-color/20 dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full  opacity-100"
                      : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className={`block lg:flex lg:space-x-12 ${navbarOpen ? '' : ''}`}>
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                              ? "text-primary dark:text-indigo-400"
                              : "text-dark hover:text-primary dark:hover:text-indigo-400"
                              }
                              ${sticky ? 'lg:text-black text-gray-800 hover:text-indigo-400' : ' lg:text-gray-500 text-gray-700  lg:font-semibold hover:text-indigo-400'}    
                            `}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-base group-hover:text-indigo-400  lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${sticky ? 'lg:text-black text-gray-700 hover:text-indigo-400 ' : ' text-gray-500  hover:text-indigo-400 lg:font-semibold'}    
                            `}
                            >
                              {menuItem.title}
                              <span className="pl-1">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm ${sticky ? 'bg-slate-100 ' : 'bg-slate-100'} transition-[top] ml-5 duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className={`block rounded py-2.5 text-sm 
                                  lg:px-3 ${sticky ? 'hover:hover:text-indigo-400' : 'hover:text-indigo-400'}`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* <Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link> */}
                {/* <Link
                  href="/contact"
                  className={`ease-in-up shadow-btn hover:shadow-btn-hover  rounded-lg bg-primary px-6 py-2 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 ${navbarOpen ? 'text-md' : 'sm:hidden'}`}
                >
                  Get a quote
                </Link> */}

                <Link href="" className={`md:block px-6 py-2 md:px-6 lg:px-5 xl:px-9  btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-400 rounded hover:bg-white group  
                   ${navbarOpen ? 'text-white' : 'sm:hidden'}
                  `}>
                  <span className={`w-40 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 `}></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Get a quote</span>
                </Link>
                <div>
                  {/* <ThemeToggler /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
