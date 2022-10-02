import React, { useState } from 'react'
import '../css/CheckoutForm.css'
import CheckoutFormSummary from './CheckoutFormSummary'
import {usePopUp} from '../context/PopUpContext'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import FormElement from './FormElement'

const initialError = {
  fullName:'error placeholder message',
  email:'error placeholder message',
  phone:'error placeholder message',
  address:'error placeholder message',
  zipCode:'error placeholder message',
  city:'error placeholder message',
  country:'error placeholder message',
  paymentMethod : 'error placeholder message',
  eMoneyNumber : 'error placeholder message',
  eMoneyPin : 'error placeholder message',
  }
  
  const errorPlaceholder = 'error placeholder message'

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

  function handleValidation(){

    const errors = {
      fullName:'error placeholder message',
      email:'error placeholder message',
      phone:'error placeholder message',
      address:'error placeholder message',
      zipCode:'error placeholder message',
      city:'error placeholder message',
      country:'error placeholder message',
      paymentMethod : 'error placeholder message',
      eMoneyNumber : 'error placeholder message',
      eMoneyPin : 'error placeholder message',
      }

    // Name errors    
    if(userData.fullName.length === 0){
      errors.fullName = 'Can\'t be blank'
    }
    else if(!validNameRegex.test(userData.fullName)){  
      errors.fullName = 'Invalid name'
    }


    //Email errors
    if(userData.email.length === 0){
      errors.email = 'Can\'t be blank'
    }
    else if(!validEmailRegex.test(userData.email)){  
      errors.email = 'Invalid email'
    }

    //Phone errors
    if(userData.phone.length === 0){
      errors.phone = 'Can\'t be blank'
    }
    else if(!validPhoneRegex.test(userData.phone)){  
      errors.phone = 'Invalid phone number'
    }

    //Address errors
    if(userData.address.length === 0){
      errors.address = 'Can\'t be blank'
    }

    //ZIP code errors
    if(userData.zipCode.length === 0){
      errors.zipCode = 'Can\'t be blank'
    }
    else if(!validZipCodeRegex.test(userData.zipCode)){  
      errors.zipCode = 'Invalid ZIP code'
    }

    //City errors
    if(userData.city.length === 0){
      errors.city = 'Can\'t be blank'
    }
    else if(!validCityRegex.test(userData.city)){  
      errors.city = 'Invalid city'
    }

    //Country errors
    if(userData.country.length === 0){
      errors.country = 'Can\'t be blank'
    }
    else if(!validCityRegex.test(userData.country)){  
      errors.country = 'Invalid country name'
    }

    //Payment method errors
    if(userData.paymentMethod.length === 0){
      errors.paymentMethod = 'Select a payment method'
    }

    //eMoney number errors 
    if(userData.eMoneyNumber.length === 0){
      errors.eMoneyNumber = 'Can\'t be blank'
    }
    else if(!/\d{9}/g.test(userData.eMoneyNumber)){  
      errors.eMoneyNumber = 'Invalid number'
    }

    //eMoney pin errors 
    if(userData.eMoneyPin.length === 0){
      errors.eMoneyPin = 'Can\'t be blank'
    }
    else if(!/\d{4}/g.test(userData.eMoneyPin)){  
      errors.eMoneyPin = 'Invalid PIN'
    }

    console.log(errors)
    return errors
  }

  function handleSubmit(e){
    let p = handleValidation()    
    setError(p)  
    if(_.isEqual(p,initialError)){
      toggleSuccessfulOrderWindow()          
    }
  }

  function goBackToCheckout(){
    setError(initialError)
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
              <FormElement  name='fullName'
                            data={userData.fullName}
                            label='Name'
                            error={error.fullName}
                            placeholder='Alexei Ward'
                            handleChange={handleChange} /> 
              <FormElement  name='email'
                            data={userData.email}
                            label='Email'
                            error={error.email}
                            placeholder='alexei@mail.com'
                            handleChange={handleChange} />       
              <FormElement  name='phone'
                            data={userData.phone}
                            label='Phone number'
                            error={error.phone}
                            placeholder='+1 202-555-0136'
                            handleChange={handleChange} />    
          </div>
          <h6 className='color-accent subtitle'>shipping info</h6>
              <FormElement  name='address'
                          data={userData.address}
                          label='Address'
                          error={error.address}
                          placeholder='1137 Williams Avenue'
                          handleChange={handleChange} /> 
          <div className='form-shipping-info'>
              <FormElement  name='zipCode'
                            data={userData.zipCode}
                            label='ZIP code'
                            error={error.zipCode}
                            placeholder='10001'
                            handleChange={handleChange} />   
              <FormElement  name='city'
                            data={userData.city}
                            label='City'
                            error={error.city}
                            placeholder='New York'
                            handleChange={handleChange} /> 
              <FormElement  name='country'
                            data={userData.country}
                            label='Country'
                            error={error.country}
                            placeholder='United States'
                            handleChange={handleChange} /> 
          </div>
          <h6 className='color-accent subtitle'>payment details</h6>
          <fieldset>        
            <div className='form-payment-method'>
              {/*Payment method error message */}
              <div className={`${error.paymentMethod !== errorPlaceholder ? 'checkout-form-label error-text' : 'checkout-form-label'}`}><label htmlFor='fullName'>Payment method</label><p className={`${ error.paymentMethod !== errorPlaceholder ? 'error-text show' : 'error-text hide'}`}>{error.country}</p></div>
              <div className='payment-methods'>
              <div className={`${error.paymentMethod && error.paymentMethod !== errorPlaceholder ? 'checkout-form-label error-text show' : 'checkout-form-label error-text hide'}`} ><p>{error.paymentMethod}</p></div>
                <div className={`${userData.paymentMethod &&  !error.paymentMethod === 'eMoney' ? 'radio-button border-accent' : error.paymentMethod  && error.paymentMethod !== errorPlaceholder  ? 'radio-button input-error' : 'radio-button'}`}>
                  <label htmlFor='eMoney'  className='radio-label'>e-Money</label>
                  <input
                         id='eMoney'
                         name='paymentMethod'
                         value='eMoney'
                         type='radio'
                         checked={userData.paymentMethod === 'eMoney'}
                         onChange={handleChange}
                         className={`${error.paymentMethod && error.paymentMethod !== errorPlaceholder ? 'input-error radio-button-payment-method' : 'radio-button-payment-method'}`}
                         />
                </div>
                <div className={`${userData.paymentMethod &&  !error.paymentMethod === 'cashOnDelivery' ? 'radio-button border-accent' : error.paymentMethod  && error.paymentMethod !== errorPlaceholder  ? 'radio-button input-error' : 'radio-button'}`}>
                  <label htmlFor='cashOnDelivery'  className='radio-label'>Cash on delivery</label>
                  <input
                         id='cashOnDelivery'
                         name='paymentMethod'
                         value='cashOnDelivery'
                         type='radio'
                         checked={userData.paymentMethod === 'cashOnDelivery'}
                         onChange={handleChange}
                         className={`${error.paymentMethod && error.paymentMethod !== errorPlaceholder ? 'input-error radio-button-payment-method' : 'radio-button-payment-method'}`}
                         />
                </div>
              </div>
            </div>        
          </fieldset>
            <div className='form-payment-numbers'>
              <FormElement  name='eMoneyNumber'
                            data={userData.eMoneyNumber}
                            label='e-Money number'
                            error={error.eMoneyNumber}
                            placeholder='238521993'
                            handleChange={handleChange}
                            additionalClass = 'payment-number'/> 
              <FormElement  name='eMoneyPin'
                            data={userData.eMoneyPin}
                            label='e-Money PIN'
                            error={error.eMoneyPin}
                            placeholder='6891'
                            handleChange={handleChange}
                            additionalClass = 'payment-number'/> 
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
