import React, { useEffect, useState } from 'react'
import './favouritePart.scss'
import ProductShow from '../productShow/ProductShow'
import axios from 'axios'

export default function FavouritePart() {
    const [featuredProduct, setFeaturedProduct] = useState([])
    // console.log("FeaturedProduct", FeaturedProduct);
    useEffect(() => {
        axios
            .get('http://localhost:3001/api/clothes/featured')
            .then(response => {
                setFeaturedProduct(response.data.result)
            })
            .catch(error => {
                console.error('Error fetching Featured products:', error)
            })
    }, [featuredProduct.length])

    return (
        <div className="favouritePart">
            <div className="wrapper">
                <div className="top">
                    <div className="text1">We Love Denim</div>
                    <div className="text2header">
                        OUR FAVOURITE SHORTS MADE FOR THE BEST COMFORT AND
                        STYLE.
                    </div>
                    <div className="text3para">
                        <p className="para">
                            I'm a paragraph. Click here to add your own text and
                            edit me. I’m a great place for you to tell a story
                            and let your users know a little more about you.
                        </p>
                        <div className="btnShopLast">Shop All Denim</div>
                    </div>
                </div>

                <div className="bottom">
                    <ProductShow featuredProduct={featuredProduct} />
                </div>
            </div>
        </div>
    )
}
