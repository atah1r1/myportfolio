import React, {useEffect, useState} from 'react';
import './navbar.scss';

function Navbar({fullname}) {
  const [navbar, setNavbar] = useState(true);
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })
  const handleScroll = () => {
    if (window.scrollY >= 50){
      setNavbar(false);
    }else setNavbar (true);
  }
	return (
    <>
{	navbar ?	<nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
              {fullname}
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button onClick={() => {setNavbarOpen(!navbarOpen)}} id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 sm:text-center sm:bg-opacity-50 bg-black lg:bg-transparent p-4 lg:p-0 z-20" + (navbarOpen ? " bg-gradient-to-r navbar-gradient to-navbar-end" : " hidden")} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
              <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#education">Education</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#competences">Competences</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#projects">Projects</a>
              </li>
            </ul>
            <button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <a href="#contactme">Contact me</a>
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav> : null}
      </>
	)
}

export default Navbar;