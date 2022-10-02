export default function FormElement({handleChange , error , data , label , name , placeholder , additionalClass= ''}) {

  const errorPlaceholder = 'error placeholder message'

  return (
    <div className={`checkout-field ${additionalClass}`}>
    <div className={`${error  ? 'checkout-form-label error-text' : 'checkout-form-label'}`}><label htmlFor='fullName'>{label}</label><p className={`${ error !== errorPlaceholder ? 'error-text show' : 'error-text hide'}`}>{error}</p></div>
    <input id={name}
           value={data}
           name={name}
           placeholder={placeholder}
           onChange={handleChange}
           className={`${error && error !== errorPlaceholder ? 'input-error' : ''}`}
           />
  </div>
  )
}
