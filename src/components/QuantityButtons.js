import '../css/QuantityButtons.css'
export default function QuantityButtons({buttonLeft,buttonRight,quantity}) {

  return (
    <div className='quantity-buttons'>
        <p onClick={buttonLeft} className='color-gray quantity-button'>-</p>
        <p className='quantity-button'>{quantity}</p>
        <p onClick={buttonRight} className='color-gray quantity-button'>+</p>
    </div>
  )
}
