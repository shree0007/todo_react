import React from 'react';
import './Header.css';


function Header(props) {
    return (

        <header className="header">
            <div className='logo-and-heading'>

                <h1>My Todo App</h1>
            </div>

            <nav className="nav">
                <ul className='flex space-x-4'>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
