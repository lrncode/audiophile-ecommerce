import React from 'react'
import ProductImageGalleryItem from './ProductImageGalleryItem'
import '../css/ProductImageGallery.css'

export default function ProductImageGallery({gallery}) {

  return (
    <div className='gallery-container'>
    {   
        Object.entries(gallery).map( (images,index) => {
            return <ProductImageGalleryItem 
                                        key={index}
                                        images={images}
                                        />
        })
    }
    </div>
  )
}
