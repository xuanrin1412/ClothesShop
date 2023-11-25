import { Link } from 'react-router-dom'
import './productShowItem.scss'
import { SearchOutlined } from '@mui/icons-material'

export default function ProductShowItem({ item }) {
    return (
        <div className="productShowItem">
            <div className="productsItem">
                <div className="imgContainer">
                    <img className="imgP" src={item.img} alt={item.title} />
                </div>

                <div className="itemInfo">
                    <div className="nameItem">{item.title}</div>
                    <div className="priceProduct">{item.price}</div>
                </div>

                <div className="overlayItem">
                    <Link to={`/product/${item._id}`}>
                        <div className="iconItem">
                            <SearchOutlined />
                        </div>
                    </Link>
                    {/* <div onClick={handleWish} className="iconItem">
                        <FavoriteOutlined />
                    </div> */}
                    {/* <div className="iconItem">
                        <ShoppingBag />
                    </div> */}
                </div>
            </div>

            {/* best seller banner */}
            {/* <div className="bestSellerBanner">Best Seller</div> */}
        </div>
    )
}
