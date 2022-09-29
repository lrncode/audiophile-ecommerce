import React from 'react'
import '../css/ProductAdYX1.css'
import productImageMobile from '../assets/home/mobile/image-earphones-yx1.jpg'
import productImageTablet from '../assets/home/tablet/image-earphones-yx1.jpg'
import productImageDesktop from '../assets/home/desktop/image-earphones-yx1.jpg'



export default function ProdyctAdYX1() {
  return (
    <div className='yx1'>
      <img  className='yx1-image image-mobile' src={productImageMobile} alt='yx1 earphones' />
      <img  className='yx1-image image-tablet' src={productImageTablet} alt='yx1 earphones' />
      <img  className='yx1-image image-desktop' src={productImageDesktop} alt='yx1 earphones' />
      <div className='yx1-text'>
          <h4>yx1 earphones</h4>
          <button className='btn-transparent'>see product</button>
      </div>
    </div>
  )
}
