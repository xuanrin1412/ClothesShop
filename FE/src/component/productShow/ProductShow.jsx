import React from 'react'
import './productShow.scss'
import ProductShowItem from '../productShowItem/ProductShowItem'

export default function ProductShow({
    filterCategory,
    featuredProduct,
    allProduct,
    props,
}) {
    console.log('filterCategory', filterCategory)
    return (
        <div className="productShow">
            {featuredProduct
                ? featuredProduct
                      .slice(0, 4)
                      .map((item, index) => (
                          <ProductShowItem key={index} item={item} />
                      ))
                : filterCategory.map((item, index) => (
                      <ProductShowItem key={index} item={item} />
                  ))}
        </div>
    )
}
