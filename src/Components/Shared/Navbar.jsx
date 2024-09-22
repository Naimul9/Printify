import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className='navbar bg-base-100 shadow-sm font-roboto pl-4 pr-4 lg:pl-20 h-[70px] fixed w-full z-50 flex justify-between'>
            {/* Left: Logo and Drawer Icon */}
            <div className='flex items-center'>
                {/* Mobile Drawer Icon */}
                <button onClick={() => setIsSidebarOpen(true)} className='text-2xl lg:hidden mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 text-[#39B75D]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Logo */}
                <Link to='/' className='flex gap-2 items-center'>
                    {/* Mobile logo */}
                    <img className='w-[100px] h-[40px] lg:hidden' src="/mobile-logo.svg" alt='Mobile Logo' />
                    {/* Desktop logo */}
                    <img className='hidden lg:block w-[135px] h-[50px]' src="/logo-old-B5JY5YNQ.svg" alt='Desktop Logo' />
                </Link>
            </div>

            {/* Main Navigation for large screens */}
            <div className='hidden lg:flex flex-none ml-16'>
                <ul className='flex menu menu-horizontal px-1 font-normal text-base text-[#353a47]'>
                    <li>
                        <a href="#" className='hover:text-[#37a155] no-underline'>Catalog</a>
                    </li>

                    {/* Dropdown for Use-Cases */}
                    <li className="relative group">
                        <a className="hover:text-[#37a155] flex items-center">
                            Use-Cases
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-base-100 shadow-lg rounded p-2 mt-10 w-56">
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">How Printify Works</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Printify Demand</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Printify Quality Promise</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">What to Sell?</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" className='hover:text-[#37a155] no-underline'>Pricing</a>
                    </li>

                    <li>
                        <a href="#" className='hover:text-[#37a155] no-underline'>Blog</a>
                    </li>

                    {/* Dropdown for Services */}
                    <li className="relative group">
                        <a className="hover:text-[#37a155] flex items-center">
                            Services
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-base-100 shadow-lg rounded p-2 mt-10 w-52">
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Printify Studio</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Printify Express Delivery</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Transfers Product</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Order In Bulk</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Experts Program</a></li>
                        </ul>
                    </li>

                    {/* Dropdown for Need Help */}
                    <li className="relative group">
                        <a className="hover:text-[#37a155] flex items-center">
                            Need help?
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-base-100 shadow-lg rounded p-2 mt-10 w-48">
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Help Center</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Contacts</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">My Requests</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Right Side Buttons (Always visible) */}
            <div className='flex ml-auto items-center'>
                <button className='border p-2 h-9 text-center rounded flex items-center px-4 font-medium ml-4'>Log in</button>
                <button className='border text-white bg-[#39B75D] hover:bg-[#319e50] p-2 h-9 text-center rounded flex items-center px-4 font-medium ml-4 lg:mr-10'>Sign up</button>
            </div>

            {/* Sidebar Menu for Mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed top-0 left-0 w-64 h-full bg-base-100 shadow-lg p-5">
                    <p className='flex justify-between items-center mb-6'>
    <span className='text-2xl ml-16 font-bold'>Menu</span>
    <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</p>
                        

                        <ul className='flex flex-col space-y-4 text-[18px] font-bold '>
                            <li><a href="#" className='hover:text-[#29ab51] no-underline'>Catalog</a></li>
                            <li><a href="#" className='hover:text-[#29ab51] no-underline'>Use-Cases</a></li>
                            <li><a href="#" className='hover:text-[#29ab51] no-underline'>Pricing</a></li>
                            <li><a href="#" className='hover:text-[#29ab51] no-underline'>Blog</a></li>
                            <li><a href="#" className='hover:text-[#29ab51] no-underline'>Services</a></li>
                            <li className="relative group">
                        <a className="hover:text-[#37a155] flex items-center">
                            Need help?
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-base-100  rounded p-2 font-normal w-48">
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Help Center</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Contacts</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">My Requests</a></li>
                        </ul>
                    </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
