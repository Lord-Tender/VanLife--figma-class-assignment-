import React from 'react'
import { NavLink } from 'react-router-dom';
import style from '../assets/Styles/comp.module.css'

const HostVanNavbar = () => {
    const navigationLinks = [
        { path: '/host/vans/123', text: 'Details' },
        { path: '/host/vans/123/pricing', text: 'Pricing' },
        { path: '/host/vans/123/photos', text: 'Photos' },
    ]
    
    return (
        <>
            <nav>
                <ul className={style.hostVanNavbar}>
                    {navigationLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink to={link.path} style={{color: "black", textDecoration: "none"}}>
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default HostVanNavbar