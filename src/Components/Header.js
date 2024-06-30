import React from 'react'
import headerImage from '../images/headerImage.jpg';

function Header() {
  return (
    <div className='headerContainer'>
        <div className='container'>
            <img src={headerImage} alt='headerImage' />
            <h1>Found Life Hacks</h1>

            <p>Product Reviews + Amazon Finds 😎🔥</p>
            <p>As an affiliate, I earn from qualifying purchases 🙌🏼</p>
        </div>
    </div>
  )
}

export default Header