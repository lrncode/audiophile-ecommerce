import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductData } from '../context/ProductDataContext'
import { useImportImage } from '../hooks/useImportImage'
import ButtonArrow from './ButtonArrow'
import '../css/CategoryItem.css'

export default function CategoryItem({category}) {

    const [loading,error,image] = useImportImage(category)

    const {productData} = useProductData()
    console.log(productData)

    if(loading) return <h4>Loading {category} image...</h4>
    if(error) return <h4>Error while loading the {category} image</h4>
    return (
        <div className='category-item'>
        <div className='category-item-foreground'>
            <img className='category-item-image image-border' src={image} alt={category} />
            <h6 className='category-item-name'>{category}</h6>
            <Link to={`/${category}`}>
                <a>
                    <ButtonArrow text={'shop'}/>
                </a>
            </Link>
        </div>
       <div className='category-item-background'></div>
        </div>
    )
}
