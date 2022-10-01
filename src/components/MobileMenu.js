import React from 'react'
import * as ReactDOM from 'react-dom'
import CategoryList from './CategoryList'
import '../css/MobileMenu.css'
import Backdrop from './Backdrop'

export default function MobileMenu({showMobileMenu}) {
  return (
    ReactDOM.createPortal(
    <>
      <div className={`${showMobileMenu ? 'mobile-menu show-animation' : 'mobile-menu hide-animation'}`}>
        <CategoryList mobileMenu={true} />
      </div>
      {showMobileMenu && <Backdrop />}
    </> ,
    document.getElementById('mobile-menu')
    )
  )
}
