import React from 'react'
import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'


export default function Header(props) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const { onClickLogin, onclickLogout, userData } = props

    const toggleHamburger = (click) => {
        setHamburgerOpen(!hamburgerOpen)
        if(click==='Login') onClickLogin()
        if(click==='Logout') onclickLogout()
    }

    return (
        <header>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isActive={hamburgerOpen} />
            </div>
            <div className={hamburgerOpen ? 'nav active' : 'nav inactive'}>
                <div className="navlinks">
                    <Link to="/" className='hover-link' onClick={toggleHamburger}>Home
                        <span className='tooltip'>Home</span>
                    </Link>
                    <Link to="/about" className='hover-link' onClick={toggleHamburger}>About
                        <span className='tooltip'>About</span>
                    </Link>
                </div>

                {userData.username === 'Login' ? (
                    <i className="fa-regular fa-circle-user user-icon hover-link" id="login-icon"
                        onClick={() => toggleHamburger('Login') }  >  <span className='loginIcon'>{userData.username}</span>
                        <span className='tooltip'>Login</span>
                    </i>
                ) : (
                    <i className="fa-solid fa-right-from-bracket user-icon hover-link"
                        onClick={() => toggleHamburger('Logout')} > <span className='loginIcon'>{userData.username}</span>
                        <span className='tooltip'>Logout</span>
                    </i>
                )}
            </div>


        </header>
    )
}
