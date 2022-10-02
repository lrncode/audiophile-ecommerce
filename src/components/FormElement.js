export default function FormElement({  touched=false,
                                       onBlur,
                                       handleChange,
                                       error,
                                       data,
                                       label,
                                       name,
                                       placeholder,
                                       additionalClass= ''}) {


  return (
    <div className={`checkout-field ${additionalClass}`}>
    <div className={`${error && touched  ? 'checkout-form-label error-text' : 'checkout-form-label'}`}>
        <label htmlFor='fullName'>{label}</label>
        <p className={`${ error && touched ? 'error-text show' : 'error-text hide'}`}>{error}</p>
    </div>
    <input id={name}
           value={data}
           onBlur={onBlur}
           name={name}
           placeholder={placeholder}
           onChange={handleChange}
           className={`${error && touched ? 'input-error' : ''}`}
           />
  </div>
  )
}
