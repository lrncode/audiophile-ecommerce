import '../css/Nav.css'
import mobileMenuIcon from '../assets/shared/tablet/icon-hamburger.svg'
import ShoppingCartIcon from './ShoppingCartIcon'
import logo from '../assets/shared/desktop/logo.svg'
import { usePopUp } from '../context/PopUpContext'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

export default function Nav({homePage = false}) {

  const {toggleMobileMenu} = usePopUp()

  return (
    <div className={`${homePage ? 'nav-home' : 'nav'}`}>
        <img className='nav-menu' onClick={toggleMobileMenu} src={mobileMenuIcon} alt='mobile menu icon'/>
        <Link to='/'><img className='nav-logo' src={logo} alt='logo' /></Link>
        <div className='nav-links'>
          <NavLinks />
        </div>
        <ShoppingCartIcon />
    </div>
  )
}
