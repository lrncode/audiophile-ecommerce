import '../css/Nav.css'
import mobileMenuIcon from '../assets/shared/tablet/icon-hamburger.svg'
import ShoppingCartIcon from './ShoppingCartIcon'
import logo from '../assets/shared/desktop/logo.svg'
import { usePopUp } from '../context/PopUpContext'

export default function Nav() {

  const {toggleMobileMenu} = usePopUp()

  return (
    <div className='nav'>
        <img onClick={toggleMobileMenu} src={mobileMenuIcon} alt='mobile menu icon'/>
        <img src={logo} alt='logo' />
        <ShoppingCartIcon />
    </div>
  )
}
