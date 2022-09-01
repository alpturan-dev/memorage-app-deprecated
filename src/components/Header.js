import React from 'react'
import logo from '../brand.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex h-16 justify-between py-10 px-36 items-center'>
            <a href='#' className='text-3xl flex items-center'>
                <img src={logo} className='w-5 mr-2'></img>
                Memorage
            </a>
            <ul className='text-xl flex flex-row items-center justify-between'>
                <li className='mx-3 hover:underline'><Link to="/">Home</Link></li>
                <li className='mx-3 hover:underline'><Link to="/collections">Collections</Link></li>
                <li className='mx-3 hover:underline'><a href="#">About</a></li>
                <li className='mx-3 hover:underline'><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header