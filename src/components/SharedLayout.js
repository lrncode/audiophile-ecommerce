import React from 'react'
import { Outlet } from 'react-router-dom'
import { usePopUp } from '../context/PopUpContext'
import CheckoutFormWindow from './CheckoutFormWindow'
import CheckoutWindow from './CheckoutWindow'
import CompanySummary from './CompanySummary'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import Nav from './Nav'
import SuccessfulOrderWindow from './SuccessfulOrderWindow'

export default function SharedLayout() {

  const {showMobileMenu,showCheckoutWindow,showCheckoutForm,showSuccessfulOrderWindow} = usePopUp()

  return (
    <>
        <Nav/>
        {showMobileMenu && <MobileMenu/>}
        {showCheckoutWindow && <CheckoutWindow/>}
        {showCheckoutForm && <CheckoutFormWindow />}
        {showSuccessfulOrderWindow && <SuccessfulOrderWindow />}
        <Outlet />
        <CompanySummary />
        <Footer />
    </>
  )
}
