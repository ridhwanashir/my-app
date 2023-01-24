import React from 'react'
import './DestinationsStyles.css'
import foto1 from '../../assets/Screenshot_1.jpg'
import foto2 from '../../assets/Screenshot_2.jpg'
import foto3 from '../../assets/Screenshot_3.jpg'
import foto4 from '../../assets/Screenshot_4.jpg'
import foto5 from '../../assets/Screenshot_5.jpg'

function Destinations() {
  return (
    <div className='destinations'>
        <div className="container">
            <h1>Art Gallery</h1>
            <p>My Art Collection *currently using other pictures</p>
            <div className="img-container">
              <img className="span-3 img-grid-row-2" src={foto1} alt="/" />
              <img src={foto2} alt="/" />
              <img src={foto3} alt="/" />
              <img src={foto4} alt="/" />
              <img src={foto5} alt="/" />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
        </div>
    </div>
  )
}

export default Destinations