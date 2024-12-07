import { useState } from 'react';
import { NavLink } from "react-router";
import styles from '../styles/nav.module.scss'
import { IoTicketSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector(state=> state.cart.items.length)


    const handleToggle = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };


  return (
    <>
         <nav className=" px-2 sm:px-6 py-2 bg-gray sticky top-0 z-50">
            <div className=" flex justify-between items-center">
                <NavLink to="/" className="flex items-center">
                    <img src='https://res.cloudinary.com/namiri/image/upload/v1689296105/logo_3_fxmage.png' alt="Women In ADR Logo" className={` ${styles.logo} `}/>
                </NavLink>
                <div className="md:hidden sm:block px-4">
                        <button 
                            type="button"
                            className="text-black px-4 py-3 rounded "
                            onClick={handleToggle}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex inter items-center justify-center  text-black flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    
                    <li className={` ${styles.navlink} `}>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className={` ${styles.navlink} `}>
                            <NavLink to='/tickets'>Tickets</NavLink>
                    </li>
                    <li className={` ${styles.navlink} `}>
                            <NavLink to='/speakers'>Speakers</NavLink>
                    </li>
                  
                

                </ul>
                
                
                
                </div>
                <div className="btn-class hidden md:block">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <div className="relative inline-block">
                                <button className="px-4 py-4 bg-white border border-2 border-purple text-purple rounded-full">
                                <IoTicketSharp />
                                </button>
                                <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-purple text-white text-xs font-bold px-2 py-1 rounded-full">
                                {cart}
                                </span>
                            </div>
                        </div>
                        <NavLink to='/contact'  className='px-2'> 
                            <button className={`px-4 py-3 bg-white border border-2 border-purple text-purple`}>
                                Contact Us
                            </button>
                        </NavLink>
                    </div>
                    
                </div>
            </div>
        </nav>
         {/* mobile menu  */}
         <div role="dialog" aria-modal="true" className={` ${styles.MobileMenu} `}>
                    <div className={`fixed inset-0 z-10 overflow-y-auto bg-gray px-6 py-6 lg:hidden  ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex items-center justify-between">
                        <NavLink href="/" className="-m-1.5 p-1.5">
                            <img src="https://res.cloudinary.com/namiri/image/upload/v1689296105/logo_3_fxmage.png" className={` ${styles.logo} `} alt="WADR"/>
                        </NavLink>
                        <button 
                             type="button"
                             className="-m-2.5 rounded-md p-2.5 "
                             onClick={handleToggle}
                            >
                            <span className="sr-only">Close menu</span>
                            {/* <!-- Heroicon name: outline/x-mark --> */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                        <div className="mt-9 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6 px-5 text-xl">
                                    <NavLink 
                                    onClick={handleToggle}
                                    to="/" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Home </NavLink>

                                    <NavLink onClick={handleToggle} to="/Tickets" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Tickets </NavLink>

                                    <NavLink onClick={handleToggle} to='/#sessions' className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Sessions </NavLink>

                                    <NavLink onClick={handleToggle} to='/#speakers' className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Speakers </NavLink>

                                </div>
                               
                            </div>
                        </div>
                    </div>
            </div>
    </>
  )
}

export default Navbar;