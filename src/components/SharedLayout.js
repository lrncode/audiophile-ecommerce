import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { usePopUp } from '../context/PopUpContext'
import CheckoutWindow from './CheckoutWindow'
import CompanySummary from './CompanySummary'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import Nav from './Nav'
import SuccessfulOrderWindow from './SuccessfulOrderWindow'

export default function SharedLayout() {

  const {showMobileMenu,showCheckoutWindow,showCheckoutForm,showSuccessfulOrderWindow} = usePopUp()
  const location = useLocation()

  return (
    <>
        <Nav homePage={location.pathname === '/' ? true : false}/>
        {showMobileMenu && <MobileMenu/>}
        {showCheckoutWindow && <CheckoutWindow/>}
        {showSuccessfulOrderWindow && <SuccessfulOrderWindow />}
        <Outlet />
        {location.pathname !== '/checkout' && <CompanySummary />}
        <Footer />
    </>
  )
}
