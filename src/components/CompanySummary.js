import imageBestGear from  '../assets/shared/desktop/image-best-gear.jpg'
import '../css/CompanySummary.css'

export default function CompanySummary() {
  return (
    <div className='container company-summary'>
      <img className='company-summary-image' src={imageBestGear} alt='man wearing headphones'/>
      <h2>Bringing you the <span className='color-accent'>best</span> audio gear</h2>
      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  )
}
