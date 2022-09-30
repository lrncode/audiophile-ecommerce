import React from 'react'
import CategoryList from './CategoryList'
import HomeHeader from './HomeHeader'
import ProductAdZX7 from './ProductAdZX7'
import ProductAdZX9 from './ProductAdZX9'
import ProdyctAdYX1 from './ProdyctAdYX1'

export default function Home() {
  return (
    <>
    <HomeHeader/>
    <div className='container'>
        <CategoryList />
        <ProductAdZX9 />
        <ProductAdZX7 />
        <ProdyctAdYX1 />
    </div>
    </>
  )
}
