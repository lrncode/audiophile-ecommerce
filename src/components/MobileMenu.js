import React from 'react'
import * as ReactDOM from 'react-dom'
import CategoryList from './CategoryList'
import '../css/MobileMenu.css'
import Backdrop from './Backdrop'

export default function MobileMenu() {
  return (
    ReactDOM.createPortal(
    <>
      <div className='mobile-menu'>
        <CategoryList />
      </div>
      <Backdrop />
    </> ,
    document.getElementById('mobile-menu')
    )
  )
}
