import React, { useState } from 'react'
import '../css/CheckoutForm.css'
import CheckoutFormSummary from './CheckoutFormSummary'
import {usePopUp} from '../context/PopUpContext'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'

const initialError = {
fullName:'',
email:'',
phone:'',
address:'',
zipCode:'',
city:'',
country:'',
paymentMethod : '',
eMoneyNumber : '',
eMoneyPin : '',
}

const validNameRegex = /^[a-zA-Z ]{2,30}$/
const validEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
// const validPhoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
const validPhoneRegex = /^\d{9}$/g

const validZipCodeRegex = /^\d{5}$/g
const validCityRegex = /^[a-zA-Z ]{2,20}$/


export default function CheckoutForm() {

  const navigate = useNavigate()
  const {toggleCheckoutWindow,toggleSuccessfulOrderWindow} = usePopUp()
  const [error,setError] = useState(initialError)
  const [userData,setUserData] = useState({fullName:'',
                                            email:'',
                                            phone:'',
                                            address:'',
                                            zipCode:'',
                                            city:'',
                                            country:'',
                                            paymentMethod : '',
                                            eMoneyNumber : '',
                                            eMoneyPin : '',
                                           })


  function handleChange(e){
    const {name,value} = e.target
    setUserData(prev => {
      return {...prev , [name] : value}
    })  
    console.log(userData)
  }

  // function handleValidation(){

  //   let errors = {
  //     fullName:'',
  //     email:'',
  //     phone:'',
  //     address:'',
  //     zipCode:'',
  //     city:'',
  //     country:'',
  //     paymentMethod : '',
  //     eMoneyNumber : '',
  //     eMoneyPin : '',
  //     }

  //   // Name errors    
  //   if(userData.fullName.length === 0){
  //     errors.fullName = 'Can\'t be blank'
  //   }
  //   else if(!validNameRegex.test(userData.fullName)){  
  //     errors.fullName = 'Invalid name'
  //   }


  //   //Email errors
  //   if(userData.email.length === 0){
  //     errors.email = 'Can\'t be blank'
  //   }
  //   else if(!validEmailRegex.test(userData.email)){  
  //     errors.email = 'Invalid email'
  //   }

  //   //Phone errors
  //   if(userData.phone.length === 0){
  //     errors.phone = 'Can\'t be blank'
  //   }
  //   else if(!validPhoneRegex.test(userData.phone)){  
  //     errors.phone = 'Invalid phone number'
  //   }

  //   //Address errors
  //   if(userData.address.length === 0){
  //     errors.address = 'Can\'t be blank'
  //   }

  //   //ZIP code errors
  //   if(userData.zipCode.length === 0){
  //     errors.zipCode = 'Can\'t be blank'
  //   }
  //   else if(!validZipCodeRegex.test(userData.zipCode)){  
  //     errors.zipCode = 'Invalid ZIP code'
  //   }

  //   //City errors
  //   if(userData.city.length === 0){
  //     errors.city = 'Can\'t be blank'
  //   }
  //   else if(!validCityRegex.test(userData.city)){  
  //     errors.city = 'Invalid city'
  //   }

  //   //Country errors
  //   if(userData.country.length === 0){
  //     errors.country = 'Can\'t be blank'
  //   }
  //   else if(!validCityRegex.test(userData.country)){  
  //     errors.country = 'Invalid country name'
  //   }

  //   //Payment method errors
  //   if(userData.paymentMethod.length === 0){
  //     errors.paymentMethod = 'Select a payment method'
  //   }

  //   //eMoney number errors 
  //   if(userData.eMoneyNumber.length === 0){
  //     errors.eMoneyNumber = 'Can\'t be blank'
  //   }
  //   else if(!/\d{9}/g.test(userData.eMoneyNumber)){  
  //     errors.eMoneyNumber = 'Invalid number'
  //   }

  //   //eMoney pin errors 
  //   if(userData.eMoneyPin.length === 0){
  //     errors.eMoneyPin = 'Can\'t be blank'
  //   }
  //   else if(!/\d{4}/g.test(userData.eMoneyPin)){  
  //     errors.eMoneyPin = 'Invalid PIN'
  //   }

  //   console.log(errors)
  //   return errors
  // }

  function handleSubmit(e){
    // let p = handleValidation()    
    // setError(p)  
    // if(!_.isEqual(p,initialError)){
    //   toggleSuccessfulOrderWindow()          
    // }
    toggleSuccessfulOrderWindow()
  }

  function goBackToCheckout(){
    toggleCheckoutWindow()
    navigate(-1)
  }
                                           
  return (
    <div className='checkout-form'>
      <p onClick={goBackToCheckout} className='color-gray cursor-pointer checkout-form-go-back'>Go back</p>
      <div className='checkout-form-desktop'>
        <div className='checkout-form-desktop-form'>
          <h3 className='checkout-form-checkout-header'>checkout</h3>
          <h6 className='color-accent subtitle'>billing details</h6>
          <div className='form-billing-details'>
            <div className='checkout-field'>
              <div className='checkout-form-label'><label htmlFor='fullName'>Name</label><p className='error-text'>{error.fullName}</p></div>
              <input id='fullName'
                     value={userData.fullName}
                     name='fullName'
                     placeholder='Alexei Ward'
                     onChange={handleChange}
                     className={`${error.fullName ? 'input-error' : ''}`}
                     />
            </div>
            <div className='checkout-field'>
            <div className='checkout-form-label'><label htmlFor='email'>Email address</label><p className='error-text'>{error.email}</p></div>
              <input id='email'
                     name='email'
                     placeholder='alexei@mail.com'
                     onChange={handleChange}
                     value={userData.email}
                     className={`${error.email ? 'input-error' : ''}`}
                     />
            </div>
            <div className='checkout-field'>
            <div className='checkout-form-label'><label htmlFor='phone'>Phone number</label><p className='error-text'>{error.phone}</p></div>
              <input id='phone'
                     name='phone'
                     placeholder='+1 202-555-0136'
                     onChange={handleChange}
                     value={userData.phone}
                     className={`${error.phone ? 'input-error' : ''}`}
                     />
            </div>
          </div>
          <h6 className='color-accent subtitle'>shipping info</h6>
          <div className='checkout-field'>
          <div className='checkout-form-label'><label htmlFor='address'>Address</label><p className='error-text'>{error.address}</p></div>
            <input id='address'
                   name='address'
                   placeholder='1137 Williams Avenue'
                   onChange={handleChange}
                   value={userData.address}
                   className={`${error.address ? 'input-error' : ''}`}
                   />
          </div>
          <div className='form-shipping-info'>
            <div className='checkout-field'>
            <div className='checkout-form-label'><label htmlFor='zipCode'>ZIP code</label><p className='error-text'>{error.zipCode}</p></div>
              <input id='zipCode'
                     name='zipCode'
                     placeholder='10001'
                     onChange={handleChange}
                     value={userData.zipCode}
                     className={`${error.zipCode ? 'input-error' : ''}`}
                     />
            </div>
            <div className='checkout-field'>
            <div className='checkout-form-label'><label htmlFor='city'>City</label><p className='error-text'>{error.city}</p></div>
              <input id='city'
                     name='city'
                     placeholder='New York'
                     onChange={handleChange}
                     value={userData.city}
                     className={`${error.city ? 'input-error' : ''}`}
                     />
            </div>
            <div className='checkout-field'>
            <div className='checkout-form-label'><label htmlFor='country'>Country</label><p className='error-text'>{error.country}</p></div>
              <input id='country'
                     name='country'
                     placeholder='United States'
                     onChange={handleChange}
                     value={userData.country}
                     className={`${error.country ? 'input-error' : ''}`}
                     />
            </div>
          </div>
          <h6 className='color-accent subtitle'>payment details</h6>
          <fieldset>
        
            <div className='form-payment-method'>
              <div className='checkout-form-label'><legend>Payment Method</legend><p className='error-text'>{error.paymentMethod}</p></div>
              <div className='payment-methods'>
                <div className={`${userData.paymentMethod === 'eMoney' ? 'radio-button border-accent' : 'radio-button'}`}>
                  <label htmlFor='eMoney'  className='radio-label'>e-Money</label>
                  <input
                         id='eMoney'
                         name='paymentMethod'
                         value='eMoney'
                         type='radio'
                         checked={userData.paymentMethod === 'eMoney'}
                         onChange={handleChange}
                         className={`${error.paymentMethod ? 'input-error radio-button-payment-method' : 'radio-button-payment-method'}`}
                         />
                </div>
                <div className={`${userData.paymentMethod === 'cashOnDelivery' ? 'radio-button border-accent' : 'radio-button'}`}>
                  <label htmlFor='cashOnDelivery'  className='radio-label'>Cash on delivery</label>
                  <input
                         id='cashOnDelivery'
                         name='paymentMethod'
                         value='cashOnDelivery'
                         type='radio'
                         checked={userData.paymentMethod === 'cashOnDelivery'}
                         onChange={handleChange}
                         className={`${error.paymentMethod ? 'input-error radio-button-payment-method' : 'radio-button-payment-method'}`}
                         />
                </div>
              </div>
            </div>
        
          </fieldset>
            <div className='form-payment-numbers'>
              <div className='checkout-field payment-number'>
              <div className='checkout-form-label'><label htmlFor='eMoneyNumber'>e-Money Number</label><p className='error-text'>{error.eMoneyNumber}</p></div>
              <input id='eMoneyNumber'
                     name='eMoneyNumber'
                     placeholder='238521993'
                     onChange={handleChange}
                     value={userData.eMoneyNumber}
                     className={`${error.eMoneyNumber ? 'input-error' : ''}`}
                     />
              </div>
              <div className='checkout-field payment-number'>
              <div className='checkout-form-label'><label htmlFor='eMoneyPin'>e-Money PIN</label><p className='error-text'>{error.eMoneyPin}</p></div>
              <input id='eMoneyPin'
                     name='eMoneyPin'
                     placeholder='6891'
                     onChange={handleChange}
                     value={userData.eMoneyPin}
                     className={`${error.eMoneyPin ? 'input-error' : ''}`}
                     />
              </div>
            </div>
        </div>
          <div className='checkout-form-desktop-summary'>
            <h6 className='checkout-form-text-summary'>summary</h6>
            <CheckoutFormSummary />
            <button onClick={handleSubmit} className='btn-accent'>continue & pay</button>
          </div>
      </div>

    </div>
  )
}
