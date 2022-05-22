import React from 'react'
import './hero.css'
import Crypto from '../assets/hero-img.png'

function Hero() {
    return (
        <div className='hero'>
            <div className='container'>
            {/* left */}
            <div className='left'>
                <p>Buy & Sell Crypto 24/7 using account</p>
                <h1>Invest in Crypto with your IRA</h1>
                <p>Buy,Sell and store hunderds of Cryptocurrencies</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter Your Email'/>
                    <button className='btn'> Learn More</button>

                </div>
            </div>

            {/* right */}
            <div className='right'>
                <div className='image-container'>
                    <img src={Crypto} alt=''></img>
                </div>
                
            </div>

            </div>


        </div>
    )
}

export default Hero