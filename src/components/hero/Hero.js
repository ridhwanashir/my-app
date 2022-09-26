import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/ghibli.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>I am Ridhwan Nashir</h1>
        <h2>This is a website about me</h2>
        <form  className="form">
          <div>
            <input type="text" placeholder='What are you looking?' />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero