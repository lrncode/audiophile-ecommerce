import React, { useState } from 'react'
import '../css/CheckoutForm.css'
import CheckoutFormSummary from './CheckoutFormSummary'
import {usePopUp} from '../context/PopUpContext'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import FormElement from './FormElement'
import FormRadioButtonElement from './FormRadioButtonElement'
import { checkoutFormSchema } from '../Validations/checkoutFormValidation'
import {useFormik} from 'formik'

export default function CheckoutForm() {
  
  const formik = useFormik({
    initialValues: {
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
     },
     onSubmit: values => {
        if(!formik.isValid) return
        toggleSuccessfulOrderWindow()
     },
     validationSchema:checkoutFormSchema
  })


  const navigate = useNavigate()
  const {toggleCheckoutWindow,toggleSuccessfulOrderWindow} = usePopUp()
  
   function goBackToCheckout(){
    toggleCheckoutWindow()
    navigate(-1)
  }
        
  console.log(formik.touched)


  return (
    <div className='checkout-form'>
      <p onClick={goBackToCheckout} className='color-gray cursor-pointer checkout-form-go-back'>Go back</p>
      <div className='checkout-form-desktop'>
        <div className='checkout-form-desktop-form'>
          <h3 className='checkout-form-checkout-header'>checkout</h3>
          <h6 className='color-accent subtitle'>billing details</h6>
          <div className='form-billing-details'>
              <FormElement  name='fullName'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.fullName}
                            data={formik.values.fullName}
                            label='Name'
                            error={formik.errors.fullName}
                            placeholder='Alexei Ward'
                            handleChange={formik.handleChange} /> 
              <FormElement  name='email'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.email}
                            data={formik.values.email}
                            label='Email'
                            error={formik.errors.email}
                            placeholder='alexei@mail.com'
                            handleChange={formik.handleChange} />       
              <FormElement  name='phone'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.phone}
                            data={formik.values.phone}
                            label='Phone number'
                            error={formik.errors.phone}
                            placeholder='+1 202-555-0136'
                            handleChange={formik.handleChange} />    
          </div>
          <h6 className='color-accent subtitle'>shipping info</h6>
              <FormElement  name='address'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.address}
                          data={formik.values.address}
                          label='Address'
                          error={formik.errors.address}
                          placeholder='1137 Williams Avenue'
                          handleChange={formik.handleChange} /> 
          <div className='form-shipping-info'>
              <FormElement  name='zipCode'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.zipCode}
                            data={formik.values.zipCode}
                            label='ZIP code'
                            error={formik.errors.zipCode}
                            placeholder='10001'
                            handleChange={formik.handleChange} />   
              <FormElement  name='city'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.city}
                            data={formik.values.city}
                            label='City'
                            error={formik.errors.city}
                            placeholder='New York'
                            handleChange={formik.handleChange} /> 
              <FormElement  name='country'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.country}
                            data={formik.values.country}
                            label='Country'
                            error={formik.errors.country}
                            placeholder='United States'
                            handleChange={formik.handleChange} /> 
          </div>
          <h6 className='color-accent subtitle'>payment details</h6>
          <fieldset>        
            <div className='form-payment-method'>
              <div className={`${formik.errors.paymentMethod  ? 'checkout-form-label error-text' : 'checkout-form-label'}`}><label htmlFor='paymentMethod'>Payment method</label></div>
              <div className='payment-methods'>
              <div className={`${formik.errors.paymentMethod  ? 'checkout-form-label error-text show' : 'checkout-form-label error-text hide'}`} ><p>{formik.errors.paymentMethod}</p></div>
              <FormRadioButtonElement
                            radioValue='eMoney'
                            name='paymentMethod'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.paymentMethod}
                            data={formik.values.paymentMethod}
                            label='e-Money'
                            error={formik.errors.paymentMethod}
                            handleChange={formik.handleChange} />       
              <FormRadioButtonElement
                            radioValue='cashOnDelivery'
                            name='paymentMethod'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.paymentMethod}
                            data={formik.values.paymentMethod}
                            label='Cash on delivery'
                            error={formik.errors.paymentMethod}
                            handleChange={formik.handleChange} />  
              </div>
            </div>        
          </fieldset>
            <div className='form-payment-numbers'>
              <FormElement  name='eMoneyNumber'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.eMoneyNumber}
                            data={formik.values.eMoneyNumber}
                            label='e-Money number'
                            error={formik.errors.eMoneyNumber}
                            placeholder='238521993'
                            handleChange={formik.handleChange}
                            additionalClass = 'payment-number'/> 
              <FormElement  name='eMoneyPin'
                            onBlur={formik.handleBlur}
                            touched={formik.touched.eMoneyPin}
                            data={formik.values.eMoneyPin}
                            label='e-Money PIN'
                            error={formik.errors.eMoneyPin}
                            placeholder='6891'
                            handleChange={formik.handleChange}
                            additionalClass = 'payment-number'/> 
            </div>
        </div>
          <div className='checkout-form-desktop-summary'>
            <h6 className='checkout-form-text-summary'>summary</h6>
            <CheckoutFormSummary />
            <button onClick={formik.handleSubmit} className='btn-accent'>continue & pay</button>
          </div>
      </div>

    </div>
  )
}
