import React, {useState, useEffect } from 'react'
import {HiQuestionMarkCircle} from 'react-icons/hi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

import './NavbarStyles.css'

function Navbar() {
  const [nav,setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  const [screenSize,setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  useEffect(() => {
    if (screenSize > 940) {
      setNav(false)
    }
  },[screenSize])

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className={nav ? 'logo dark' : 'logo'}>
            <h2>Art Gallery</h2>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Projects</li>
            <li>Illustrations</li>
            <li>3D Models</li>
            <li>Contact</li>
        </ul>
        <div className="nav-icons">
            <HiQuestionMarkCircle className='icon' style={{marginRight: '1rem'}}/>
            <BsPerson className='icon' />
        </div>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose className='icon dark' />) }
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <ul className="mobile-nav">
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Books</li>
            <li>Views</li>
          </ul>
          <div className="mobile-menu-bottom">
            <div className="menu-icons">
              <button>Search</button>
              <button>Account</button>
            </div>
            <div className="social-icons">
              <FaFacebook className='icon'/>
              <FaInstagram className='icon'/>
              <FaTwitter className='icon'/>
              <FaPinterest className='icon'/>
              <FaYoutube className='icon'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar