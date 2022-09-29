import React from 'react'
import iconArrowRight from '../assets/shared/desktop/icon-arrow-right.svg'
import '../css/ButtonArrow.css'

export default function ButtonArrow({text}) {
  return (
    <button className='button-arrow'>
      <p className='subtitle'>{text}</p>
      <img className='button-arrow-icon' src={iconArrowRight} alt='button arrow icon' />
    </button>
  )
}
