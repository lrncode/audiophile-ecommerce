import React, { useState } from 'react'
import '../css/CheckoutForm.css'
import CheckoutFormSummary from './CheckoutFormSummary'
import CheckoutProductList from './CheckoutProductList'
import {usePopUp} from '../context/PopUpContext'

export default function CheckoutForm() {

  const {toggleCheckoutForm,toggleSuccessfulOrderWindow} = usePopUp()
  const [userData,setUserData] = useState([{fullName:'',
                                            email:'',
                                            phone:'',
                                            address:'',
                                            zipCode:'',
                                            city:'',
                                            country:'',
                                            paymentMethod : '',
                                           }])


  function handleChange(e){
    const {name,value} = e.target
    setUserData(prev => {
      return {...prev , [name] : value}
    })  
    console.log(userData)
  }
                                           
  return (
    <div className='checkout-form'>
      <p onClick={toggleCheckoutForm} className='color-gray cursor-pointer'>Go back</p>
      <h3>checkout</h3>
      <h6 className='color-accent subtitle'>billing details</h6>
      <div className='checkout-field'>
        <label htmlFor='fullName'>Name</label>
        <input id='fullName'
               name='fullName'
               placeholder='Alexei Ward'
               onChange={handleChange}/>
      </div>
      <div className='checkout-field'>
        <label htmlFor='email'>Email Address</label>
        <input id='email'
               name='email'
               placeholder='alexei@mail.com'
               onChange={handleChange}/>
      </div>
      <div className='checkout-field'>
        <label htmlFor='phone'>Phone Number</label>
        <input id='phone'
               name='phone'
               placeholder='+1 202-555-0136'
               onChange={handleChange}/>
      </div>
      <h6 className='color-accent subtitle'>shipping info</h6>
      <div className='checkout-field'>
        <label htmlFor='address'>Your Address</label>
        <input id='address'
               name='address'
               placeholder='1137 Williams Avenue'
               onChange={handleChange}/>
      </div>
      <div className='checkout-field'>
        <label htmlFor='zipCode'>ZIP Code</label>
        <input id='zipCode'
               name='zipCode'
               placeholder='10001'
               onChange={handleChange}/>
      </div> 
      <div className='checkout-field'>
        <label htmlFor='city'>City</label>
        <input id='city'
               name='city'
               placeholder='New York'
               onChange={handleChange}/>
      </div>
      <div className='checkout-field'>
        <label htmlFor='country'>Country</label>
        <input id='country'
               name='country'
               placeholder='United States'
               onChange={handleChange}/>
      </div>       
      <h6 className='color-accent subtitle'>payment details</h6> 
      <fieldset>
          <legend>Payment Method</legend>

        <div className={`${userData.paymentMethod === 'eMoney' ? 'radio-button border-accent' : 'radio-button'}`}>
          <label htmlFor='eMoney'  className='radio-label'>e-Money</label>
          <input className='radio-button-payment-method'
                 id='eMoney'
                 name='paymentMethod'
                 value='eMoney'
                 type='radio'
                 checked={userData.paymentMethod === 'eMoney'}
                 onChange={handleChange}/>
        </div>

        <div className={`${userData.paymentMethod === 'cashOnDelivery' ? 'radio-button border-accent' : 'radio-button'}`}>
          <label htmlFor='cashOnDelivery'  className='radio-label'>Cash on delivery</label>
          <input className='radio-button-payment-method'
                 id='cashOnDelivery'
                 name='paymentMethod'
                 value='cashOnDelivery'
                 type='radio'
                 checked={userData.paymentMethod === 'cashOnDelivery'}
                 onChange={handleChange}/>
        </div>
        
      </fieldset>  
        <div className='checkout-field'>
        <label htmlFor='eMoneyNumber'>e-Money Number</label>
        <input id='eMoneyNumber'
               name='eMoneyNumber'
               placeholder='238521993'
               onChange={handleChange}/>
        </div> 
        <div className='checkout-field'>
        <label htmlFor='eMoneyPin'>e-Money PIN</label>
        <input id='eMoneyPin'
               name='eMoneyPin'
               placeholder='6891'
               onChange={handleChange}/>
        </div> 
        <h6 className='checkout-form-text-summary'>summary</h6>
        <CheckoutFormSummary />
        <button onClick={toggleSuccessfulOrderWindow} className='btn-accent'>continue & pay</button>

    </div>
  )
}
