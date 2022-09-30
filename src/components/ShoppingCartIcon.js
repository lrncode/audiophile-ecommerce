import React from 'react'
import shoppingCartIcon from '../assets/shared/desktop/icon-cart.svg'
import { usePopUp } from '../context/PopUpContext'

export default function ShoppingCartIcon() {

  const {toggleCheckoutWindow,showCheckoutForm,showSuccessfulOrderWindow} = usePopUp()

  return (
    <button disabled={showCheckoutForm || showSuccessfulOrderWindow}>
      <img onClick={toggleCheckoutWindow} src={shoppingCartIcon} alt='shopping cart icon' />
    </button>
  )
}
