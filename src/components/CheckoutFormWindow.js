import React from 'react'
import * as ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import CheckoutForm from './CheckoutForm'

export default function CheckoutFormWindow() {
  return (
    ReactDOM.createPortal(
    <div>
      <CheckoutForm />
      <Backdrop />
    </div>,
    document.getElementById('checkout-window')
    )
  )
}
