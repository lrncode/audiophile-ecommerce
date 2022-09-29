import React from 'react'
import * as ReactDOM from 'react-dom'
import CategoryList from './CategoryList'
import '../css/MobileMenu.css'

export default function MobileMenu({
                          toggleMobileMenu,
                          showMobileMenu}) {
  return (
    ReactDOM.createPortal(
    <>
      <div className='mobile-menu'>
        <CategoryList />
      </div>
      <div className='mobile-menu-backdrop'></div>
    </> ,
    document.getElementById('mobile-menu')

    )
  )
}
