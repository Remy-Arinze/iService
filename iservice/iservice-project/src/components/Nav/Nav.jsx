import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav' >
            <div className="logo">iService</div>
            <ul className="links">
                <a href="/">
                    <li className="link">Home</li>
                </a>
                <a href="/reports">
                    <li className="link">Reports</li>
                </a>
                <a href="/agencies">
                    <li className="link">Agencies</li>
                </a>
            </ul>
        </nav>
    )
}

export default Nav
