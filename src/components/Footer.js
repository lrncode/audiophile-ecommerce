import '../css/Footer.css'
import logo from '../assets/shared/desktop/logo.svg'
import iconTwitter from '../assets/shared/desktop/icon-twitter.svg'
import iconInstagram from '../assets/shared/desktop/icon-instagram.svg'
import iconFacebook from '../assets/shared/desktop/icon-facebook.svg'


export default function Footer() {
  return (
    <div className='footer'>
      <div className='container footer-container'>
        <img className='footer-logo' src={logo} alt='logo'/>
        <div className='footer-nav'>
          <h6 className='subtitle footer-nav-element'>home</h6>
          <h6 className='subtitle footer-nav-element'>headphones</h6>
          <h6 className='subtitle footer-nav-element'>speakers</h6>
          <h6 className='subtitle footer-nav-element'>earphones</h6>
        </div>
          <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          <p className='copyright-message'>Copyright 2021. All Rights Reserved</p>
          <div>
            <img className='socials-icon' src={iconFacebook} alt='facebook icon' />
            <img className='socials-icon' src={iconTwitter} alt='twitter icon' />
            <img className='socials-icon' src={iconInstagram } alt='instagram icon' />
          </div>
      </div>
    </div>
  )
}
