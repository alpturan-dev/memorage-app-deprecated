import React from 'react'
import logo from '../assets/brand.svg'
import menu from '../assets/menu-icon.svg'
import close from '../assets/menu-close.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className='flex h-16 justify-between py-10 px-36 items-center'>
            <a href='#' className='text-3xl flex items-center'>
                <img src={logo} className='w-5 mr-2'></img>
                Memorage
            </a>
            <div className='flex flex-row'>
                <div className={isNavOpen ? 'hidden' : 'flex lg:hidden cursor-pointer'} onClick={() => {
                    setIsNavOpen((prev) => !prev);
                    console.log(isNavOpen)
                }}>
                    <img src={menu} alt="" className='w-10' />
                </div>
                <ul className='text-xl hidden lg:flex flex-row items-center justify-between'>
                    <li className='mx-3 hover:underline'><Link to="/">Home</Link></li>
                    <li className='mx-3 hover:underline'><Link to="/collections">Collections</Link></li>
                    <li className='mx-3 hover:underline'><a href="#">About</a></li>
                    <li className='mx-3 hover:underline'><a href="#">Contact</a></li>
                </ul>
            </div>
            {isNavOpen && (
                <div className='flex flex-col mt-20 items-center justify-center'>
                    <div className='cursor-pointer' onClick={() => setIsNavOpen(false)}>
                        <img src={close} alt="" />
                    </div>
                    <ul className='flex flex-col justify-center text-base items-center mt-2'>
                        <li className='mx-3 hover:underline'><Link to="/">Home</Link></li>
                        <li className='mx-3 hover:underline'><Link to="/collections">Collections</Link></li>
                        <li className='mx-3 hover:underline'><a href="#">About</a></li>
                        <li className='mx-3 hover:underline'><a href="#">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>

    )
}

export default Header