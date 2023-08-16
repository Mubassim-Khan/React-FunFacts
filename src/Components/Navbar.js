import React from 'react'
import logo from '../Images/logo.svg'

export default function Navbar() {
    return (
        <header>
            <nav className="App-nav">
                <img src={logo} className="nav-logo" alt="logo" />
                <h3 className="nav-title">ReactFacts</h3>
            </nav>
        </header>
    )
}
