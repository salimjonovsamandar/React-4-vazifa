import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <>
            <div className="header_top">
                <div className="logo">
                    <p className='logo'>Darkor</p>
                </div>
                <div className="nav_bar">
                    <ul className='header-nav'>
                        <li className='nav'>Vakansiyalar</li>
                        <li className='nav'>Kandidatlar</li>
                        <li className='nav'>Kompaniyalar</li>
                        <li className='nav'>Xizmatlar</li>
                        <li className='nav'>Ta'lim</li>
                    </ul>
                </div>
                <div className=" buttons">
                    <button className='lenguage'>O'zb</button>
                    <button className='button'>Boshlash</button>
                </div>
            </div>
        </>
    )
}
