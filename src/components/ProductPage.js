import React, { useEffect, useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import { formatCurrency } from '../utilities/formatCurrency'
import { useProductData } from '../context/ProductDataContext'
import PageNotFound from './PageNotFound'
import InTheBoxList from './InTheBoxList'
import ProductImageGallery from './ProductImageGallery'
import ReccomendedList from './ReccomendedList'
import CategoryList from './CategoryList'
import '../css/ProductPage.css'

export default function ProductPage() {


 

    const {categoryName,productName} = useParams()
    // const navigate = useNavigate()
    const {productData} = useProductData() 
    
    const [mobileImage,setMobileImage] = useState()
    const [tabletImage,setTabletImage] = useState()
    const [desktopImage,setDesktopImage] = useState()  
    
    const product = productData.find(product => product.slug === productName) || ''



    useEffect(() => {
      if(!product) return
      window.scrollTo(0, 0)
      import(`../assets/product-${product.slug}/mobile/image-product.jpg`).then( bg => setMobileImage(bg.default))
      import(`../assets/product-${product.slug}/tablet/image-product.jpg`).then( bg => setTabletImage(bg.default))
      import(`../assets/product-${product.slug}/desktop/image-product.jpg`).then( bg => setDesktopImage(bg.default))
    },[product])
    
    if(!product) return <PageNotFound />
  return (
    <>
      <div className='black-stripe'></div>
    <div className='container product-page-container'>
      <section>
        <Link to={`/${categoryName}`}><p className='color-gray'>Go back</p></Link>
        <img className='image-border image-mobile' src={mobileImage} alt='product'/>
        <img className='image-border image-tablet' src={tabletImage} alt='product'/>
        <img className='image-border image-desktop' src={desktopImage} alt='product'/>
        {product.new && <h6 className='overline color-accent product-page-new-product'>new product</h6>}
        <h2 className='product-page-name'>{product.name}</h2>
        <p className='color-gray'>{product.description}</p>
        <h6 className='product-page-price'>{formatCurrency(product.price)}</h6>
        <h3>Add to cart</h3>
      </section>
      <section>
        <h3>features</h3>
        <p className='color-gray product-page-features'>{product.features}</p>
      </section>
      <section>
        <h3>in the box</h3>
        <InTheBoxList includes={product.includes}/>
      </section>
      <ProductImageGallery gallery={product.gallery} />
      <ReccomendedList product={product}/>
      <CategoryList />
    </div>
    </>
  )
}
