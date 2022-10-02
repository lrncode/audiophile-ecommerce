import React from 'react'

const errorPlaceholder = 'error placeholder message'


export default function FormRadioButtonElement({handleChange , error , data  , radioValue ,  label , name}) {
  return (
    <div className={`${ !error && data === radioValue  ? 'radio-button border-accent' : error  ? 'radio-button input-error' : 'radio-button'}`}>
    <label htmlFor={radioValue} className='radio-label'>{label}</label>
    <input
           id={radioValue}
           name={name}
           value={radioValue}
           type='radio'
           checked={data === radioValue}
           onChange={handleChange}
           className='radio-button-payment-method'
           />
  </div>
  )
}
