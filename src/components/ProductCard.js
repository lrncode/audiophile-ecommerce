import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/ProductCard.css'


export default function ProductCard({product}) {

    const [mobileImage,setMobileImage] = useState()
    const [tabletImage,setTabletImage] = useState()
    const [desktopImage,setDesktopImage] = useState()  


    
  useEffect(() => {
    import(`../assets/product-${product.slug}/mobile/image-product.jpg`).then( bg => setMobileImage(bg.default))
    import(`../assets/product-${product.slug}/tablet/image-product.jpg`).then( bg => setTabletImage(bg.default))
    import(`../assets/product-${product.slug}/desktop/image-product.jpg`).then( bg => setDesktopImage(bg.default))
  },[])


  return (
    <div className='container product-card'>
        <img className='product-card-image image-mobile' src={mobileImage} alt='product'/>
        <img className='product-card-image image-tablet' src={tabletImage} alt='product'/>
        <img className='product-card-image image-desktop' src={desktopImage} alt='product'/>
      {product.new && <h6 className='overline color-accent'>new product</h6>}
      <h2 className='product-card-name'>{product.name}</h2>
      <p className='product-card-description'>{product.description}</p>
      <Link to={`${product.slug}`}><button className='btn-accent'>see product</button></Link>
    </div>
  )
}
