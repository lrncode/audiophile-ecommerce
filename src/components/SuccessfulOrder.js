import icon from '../assets/checkout/icon-order-confirmation.svg'
import SuccessfulOrderProductWindow from './SuccessfulOrderProductWindow'
import {usePopUp} from '../context/PopUpContext'
import '../css/SuccessfulOrder.css'

export default function SuccessfulOrder() {

  const {backToHome} = usePopUp()

  return (
    <div className='successful-order'>
      <img className='confirmation-icon' src={icon} alt='confirmation icon' />
      <h2>thank you<br/>for your order</h2>
      <p className='color-gray'>You will recieve an email confirmation shortly.</p>
      <SuccessfulOrderProductWindow />
      <button onClick={backToHome} className='btn-accent'>back to home</button>
    </div>

  )
}
