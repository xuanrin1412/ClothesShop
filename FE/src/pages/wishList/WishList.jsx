import { useSelector } from 'react-redux'
import './wishList.scss'
import { Link } from 'react-router-dom'
import Navbar from '../../component/navbar/Navbar'

export default function WishList() {
    //useSelector để truy cập trạng thái trong Redux store. Điều này cho phép bạn hiển thị thông tin giỏ hàng trong giao diện người dùng.
    const wish = useSelector(state => state.wishlist)

    return (
        <div className="wishContainer">
            <Navbar />
            <div className="WishWrapper">
                <h1 className="title">YOUR WISH LIST</h1>
                {/*TOP */}
                <div className="top">
                    <Link to="/productShop">
                        <button className="continuteShop">
                            CONTINUE SHOPPING
                        </button>
                    </Link>
                </div>
                {/* WISH LIST */}
                <div className="wishList">
                    {wish.products.map((p, index) => (
                        <div className="productswishList">
                            <div className="imgContainer">
                                <img
                                    className="imgP"
                                    src={p.img}
                                    alt={p.title}
                                />
                            </div>

                            <div className="pInfo">
                                <div className="namep">{p.title}</div>
                                <div className="priceProduct">${p.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
