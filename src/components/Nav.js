import '../css/Nav.css'
import mobileMenuIcon from '../assets/shared/tablet/icon-hamburger.svg'
import ShoppingCartIcon from './ShoppingCartIcon'
import logo from '../assets/shared/desktop/logo.svg'

export default function Nav({toggleMobileMenu , showMobileMenu}) {
  return (
    <div className='nav'>
        <img onClick={toggleMobileMenu} src={mobileMenuIcon} alt='mobile menu icon'/>
        <img src={logo} alt='logo' />
        <ShoppingCartIcon />
    </div>
  )
}
