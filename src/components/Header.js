import React from 'react';
import './Header.css';


function Header(props) {
    return (

        <header className="header">
            <div className='logo-and-heading'>

                <h1 className='text-2xl cursor-pointer'>My Todo App</h1>
            </div>

            <nav className="nav">
                <ul className='flex space-x-4'>
                    <li className='cursor-pointer hover:text-orange-600'>Home</li>
                    <li className='cursor-pointer hover:text-orange-600'>About me</li>
                    <li className='cursor-pointer hover:text-orange-600'>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
