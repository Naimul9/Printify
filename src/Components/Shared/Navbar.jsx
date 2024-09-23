import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className='navbar bg-base-100 shadow-sm font-roboto  pr-4 lg:pl-20 h-[70px] fixed lg:w-full w-11/12 z-50 flex justify-between'>
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
                   <svg fill="none" height="60" width="41" xmlns="http://www.w3.org/2000/svg"><g fill="#39b75d"><path d="m40.042 13.833c-.333-.833-1.166-1.166-2-.833-1.166.5-3.666 1.667-5 2.333-.666.334-.833 1-.666 1.667.166.667 1 1 1.5.667 1.333-.5 3.833-1.334 5.166-1.834.834-.333 1.334-1.166 1-2zm-20.499-5.666c.666 0 1.166-.5 1.166-1.167 0-1.333.167-4.167.167-5.5 0-.833-.667-1.5-1.5-1.5-.834 0-1.5.667-1.5 1.5 0 1.333.166 4.167.166 5.5.334.667.834 1.167 1.5 1.167zm9.5 2.166a98.044 98.044 0 0 1 3.333-4.333c.5-.667.333-1.667-.334-2.167-.666-.5-1.666-.166-2.166.5-.667 1.167-2.167 3.5-2.834 4.667-.333.5-.166 1.333.334 1.667.5.333 1.333.166 1.666-.334zm-17.833 9.334s.332-1.334.5-1.834c1.166-4.166.832-7.833-.5-9.833-.5-.667-1.168-1-2-1.167-.5 0-1.5 0-2.168 2.5-.166.834-3 11-5 18.834 0 0 2-2.667 2.5-3.5 1.834-2.667 3.334-5 6.667-5zm7.333 0h7.833s-.334-.667-.667-1.167c-.666-1-1.833-2.833-3.166-3.833-1.334-1-2.834-1.667-4.167-.834-1.334.667-1.334 2.167-.834 3.5.167.334.834 2 1 2.334zm-12.001 8.333c1.334-2 2.5-3.5 4.5-3.833 2-.334 3.5.833 5.334 2.166.166.167 1.5 1.167 3.333 2.334h2.334c4.333 0 7.833-1.167 9.333-3 .5-.667.833-1.5.666-2.334-.166-.333-.333-1.5-3-1.5h-17.665c-2.334 0-3 1-5.167 4l-5.334 7.334c-.667.833-1 1.333-.834 2.166 0 .334.167.667.5.834 0 .333 4.5-6 6-8.167z"/><path d="m5.542 35.833c1.334-2 2.5-3.5 4.5-3.833s3.5.833 5.334 2.167c1 .833 3.167 2.333 4.167 3 1.666 1.166 2.333 2.333 2.5 3.5 1.5.5 3 .666 4 .333.833-.167 1.5-.667 1.833-1.5.166-.333.666-1.5-1.5-3-1.834-1.333-9.667-7-11.334-8.333-1.833-1.334-2.666-2-3.666-1.834-1 .167-1.667 1-3 2.834-1.834 2.666-5.667 7.833-7.5 10.333-.667.833-1 1.5-.834 2.167 0 .333.167.666.5.833 0 .333 3.834-5 5-6.667z"/><path d="m30.71 29.333c-2 1-4.668 1.667-7.668 1.834 2.334 1.666 4.5 3.333 5 3.666 3.167 2.334 2.667 4.5 2.167 5.667-.666 1.333-1.833 2.333-3.333 2.833-.667.167-1.334.167-2 .167-1 0-2-.167-3-.5-.5 1.167-1.5 2.167-2.834 2.5-2.166.833-5 .5-8-1-.5-.333-.833-1-.5-1.5.334-.5 1-.833 1.5-.5 2.5 1.167 4.667 1.5 6.167.833.667-.333 1.167-.666 1.5-1.333.167-.333.667-1.5-1.5-3-1-.833-3.166-2.333-4.166-3-1.834-1.333-2.667-2-3.667-1.833-1 .166-1.667 1-3 2.833-1.667 2.167-4.834 6.667-6.5 9-.5.667-.667 1.167-.5 1.5 0 .667.333 1.333.833 1.667 2.167 2 7.667 5.666 11.5 8.166 2 1.334 4.667 2.334 8.334 2.334 8.333 0 15-6.834 15-15.167 0-2.167-.5-4.333-1.334-6.167-.5-.666-3.667-8.166-4-9z"/></g></svg>
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

 {/* Dropdown for Services */}
 <li className="relative group">
                        <a className="hover:text-[#37a155] flex items-center">
                            How it works
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-base-100 shadow-lg rounded p-2 mt-10 w-52">
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">How Printify Works</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:text-[#37a155] whitespace-nowrap">Print On Demand</a></li>
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
                <button className='border p-2 h-9 text-center rounded flex items-center font-medium px-4 '>Log in</button>
                <button className='border text-white bg-[#39B75D] hover:bg-[#319e50] p-2 h-9 text-center rounded flex items-center px-4 font-medium ml-4 lg:mr-2'>Sign up</button>
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
