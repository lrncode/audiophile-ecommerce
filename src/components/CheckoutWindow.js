import React from 'react'
import * as ReactDOM from 'react-dom'
import { useProductData } from '../context/ProductDataContext'
import {useShoppingCart} from '../context/ShoppingCartContext'
import '../css/CheckoutWindow.css'
import CheckoutProductList from './CheckoutProductList'
import {formatCurrency} from '../utilities/formatCurrency'
import { usePopUp } from '../context/PopUpContext'
import Backdrop from './Backdrop'

export default function CheckoutWindow() {

    const {shoppingCartProducts,removeAll} = useShoppingCart()
    const {productData} = useProductData() 
    const {toggleCheckoutForm} = usePopUp()

    let totalProductNumber = shoppingCartProducts.reduce((acc,product) => acc + 1 , 0)
    let totalPrice = shoppingCartProducts.reduce((acc,product) => acc +  product.quantity*(productData.find(prod => prod.slug === product.name).price) , 0)


    function checkout(){

    }

  return (
    ReactDOM.createPortal(
        <>
            <Backdrop />
                <div className='checkout-window'>
                <section>
                    <h6  className='checkout-cart' >cart ({totalProductNumber})</h6>
                    <p onClick={removeAll} className='color-gray cursor-pointer remove-all'>Remove all</p>
                </section>            
                <CheckoutProductList />              
                <section>
                    <h6 className='color-gray subtitle checkout-total'>total</h6>
                    <h6>{formatCurrency(totalPrice)}</h6>
                </section>
                <button onClick={toggleCheckoutForm} className='btn-accent'>checkout</button>
            </div>
        </>,
        document.getElementById('checkout-window')
    )
  )
}

