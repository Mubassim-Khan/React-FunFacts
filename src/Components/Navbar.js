import React from 'react'
import logo from '../logo.svg'

export default function Navbar() {
    return (
        <header>
            <nav className="App-nav">
                <img src={logo} className="App-logo" alt="logo" />
                <ul className='nav-options'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
