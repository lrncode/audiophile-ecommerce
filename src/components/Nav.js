import '../css/Nav.css'
import mobileMenuIcon from '../assets/shared/tablet/icon-hamburger.svg'
import ShoppingCartIcon from './ShoppingCartIcon'
import logo from '../assets/shared/desktop/logo.svg'
import { usePopUp } from '../context/PopUpContext'
import { Link } from 'react-router-dom'

export default function Nav() {

  const {toggleMobileMenu} = usePopUp()

  return (
    <div className='nav'>
        <img onClick={toggleMobileMenu} src={mobileMenuIcon} alt='mobile menu icon'/>
        <Link to='/'><img src={logo} alt='logo' /></Link>
        <ShoppingCartIcon />
    </div>
  )
}
