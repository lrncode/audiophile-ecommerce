import React from 'react'
import { Outlet } from 'react-router-dom'
import CompanySummary from './CompanySummary'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import Nav from './Nav'

export default function SharedLayout({toggleMobileMenu , showMobileMenu}) {
  return (
    <>
        <Nav 
          toggleMobileMenu={toggleMobileMenu}
          showMobileMenu={showMobileMenu} />
        {showMobileMenu && <MobileMenu toggleMobileMenu={toggleMobileMenu}
          showMobileMenu={showMobileMenu} />}

        <Outlet />
        <CompanySummary />
        <Footer />
    </>
  )
}
