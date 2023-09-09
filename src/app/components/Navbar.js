"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { usePathname } from "next/navigation";
import { BiSolidChevronDown } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function NavBar({videoBg}) {
  const [navbar, setNavbar] = useState(false);
  const [projectCaret, setProjectCaret] = useState(false);
  const [societiesCaret, setSocietiesCaret] = useState(false);
  const [aboutCaret, setAboutCaret] = useState(false);

  {/* Get the current route */}
  const pathname = usePathname();

  // Change Nav color on scroll
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      } 
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  
  return (
    <div>
      <nav className={`w-full absolute top-0 left-0`}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between  md:block">
              {/* LOGO */}
              <Link href="/">
                <img src="/images/logo.png" alt='' className='h-[110px] '  />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose size={40} className='text-second' />
                  ) : (
                    <AiOutlineMenu size={40} className='text-second' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <div
              className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              {/* <ul className="h-screen md:h-auto items-center justify-center md:flex  pt-2 ">                
                <li className={`${navbar ? 'text-white' : isScroll ? 'text-white' : videoBg == false ? 'text-white' : 'text-white' } pb-6  uppercase text-md font-semibold hover:underline ${pathname == "/about" && "underline"} py-2 md:px-6 text-center border-b-2 md:border-b-0     md:hover:text-gray-200 md:hover:bg-transparent`}>
                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                        About
                    </Link>
                </li>
                
                 <li className={`relative ${navbar ? 'text-white' : isScroll ? 'text-white' : videoBg == false ? 'text-white' : 'text-white' } pb-6 uppercase text-md font-semibold hover:underline  py-2 md:px-6 text-center border-b-2 md:border-b-0    border-purple-900   md:hover:bg-transparent`}>
                  <div 
                    onClick={(e)=> {setAboutCaret(!aboutCaret); setProjectCaret(false); setSocietiesCaret(false); } }
                    className={`flex items-center justify-center gap-2 cursor-pointer`}
                  >
                    <span>Features</span>
                    <AiFillCaretDown className={`transition duration-150 ${aboutCaret == true ? "rotate-180" : 'rotate-0'}`} />
                  </div>
                  <div className={`
                      ${aboutCaret == true ? 'block' : 'hidden'}
                       top-10 left-5 bg-white text-black w-[250px] min-h-[50px] text-start flex flex-col rounded-md overflow-hidden md:border md:border-second
                       md:absolute 
                  `}>
                    
                  </div>
                </li>
                
                <li className={`${navbar ? 'text-white' : isScroll ? 'text-white' : videoBg == false ? 'text-white' : 'text-white' } pb-6  uppercase text-md font-semibold hover:underline ${pathname == "/about" && "underline"} py-2 md:px-6 text-center border-b-2 md:border-b-0     md:hover:text-gray-200 md:hover:bg-transparent`}>
                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                        Testimonials
                    </Link>
                </li>

                <li className={`${navbar ? 'text-white' : isScroll ? 'text-white' : videoBg == false ? 'text-white' : 'text-white' } pb-6  uppercase text-md font-semibold hover:underline ${pathname == "/about" && "underline"} py-2 md:px-6 text-center border-b-2 md:border-b-0     md:hover:text-gray-200 md:hover:bg-transparent`}>
                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                        Contact Us
                    </Link>
                </li>

              </ul> */}
            </div>
          </div>
          <div className='hidden md:block'>
            <Link href="#inquirySection" className='bg-[#5d32d2] py-2 px-5 rounded-md hover:bg-opacity-80 text-white'>Register</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;