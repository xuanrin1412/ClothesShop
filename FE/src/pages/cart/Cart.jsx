import { Add, Remove } from '@mui/icons-material'
import './cart.scss'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../component/navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCart } from '../../cartContext'

export default function Cart() {
    //useSelector để truy cập trạng thái trong Redux store. Điều này cho phép bạn hiển thị thông tin giỏ hàng trong giao diện người dùng.
    const [productData, setProductData] = useState([]) //lấy dữ liệu api
    const [total, setTotal] = useState(0)
    const { updateQuantity } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:3001/api/cart/', {
                withCredentials: true,
            })
            .then(response => {
                console.log(response)
                if (response.data.message === "You haven't login") {
                    navigate('/login')
                }
                updateQuantity(response.data.quantity)
                setProductData(response.data.cart.items)
                setTotal(response.data.total)
            })
            .catch(error => {
                console.error('Error fetching product data:', error)
            })
    }, [navigate])

    const handleIncrease = async productID => {
        try {
            await axios
                .put(
                    `http://localhost:3001/api/cart/increase/${productID}`,
                    {},
                    {
                        withCredentials: true,
                    },
                )
                .then(response => {
                    console.log('responsePost', response)
                    if (response.data.message === "You haven't login") {
                        //     navigate('/login')
                        alert("You haven't login")
                    }
                    updateQuantity(response.data.quantity)
                    setProductData(response.data.cart.items)
                    setTotal(response.data.total)
                })
                .catch(error => {
                    console.error('Error fetching product data:', error)
                })

            //  console.log('response.data', response.data) // Xử lý kết quả trả về từ backend (nếu cần)
        } catch (error) {
            console.error('Error adding to cart:', error)
        }
    }

    const handleDecrease = async productID => {
        try {
            await axios
                .put(
                    `http://localhost:3001/api/cart/decrease/${productID}`,
                    {},
                    {
                        withCredentials: true,
                    },
                )
                .then(response => {
                    console.log('responsePost', response)
                    if (response.data.message === "You haven't login") {
                        //     navigate('/login')
                        alert("You haven't login")
                    }
                    updateQuantity(response.data.quantity)
                    setProductData(response.data.cart.items)
                    setTotal(response.data.total)
                })
                .catch(error => {
                    console.error('Error handleDecrease data:', error)
                })

            //  console.log('response.data', response.data) // Xử lý kết quả trả về từ backend (nếu cần)
        } catch (error) {
            console.error('Error adding to cart:', error)
        }
    }

    return (
        <div className="cartContainer">
            <Navbar />
            <div className="cartWrapper">
                <h1 className="title">YOUR BAG</h1>
                {/*-------- TOP -----------*/}
                <div className="top">
                    <Link to="/productShop">
                        <button className="topBottom">CONTINUE SHOPPING</button>
                    </Link>

                    <div className="topTexts">
                        <span className="topText">Shopping Bag </span>
                    </div>
                    <button className="topBottom filled">CHECKOUT NOW</button>
                </div>
                {/*-------- BOTTOM -----------*/}
                <div className="bottom">
                    <div className="info">
                        {/* PRODUCT */}
                        {productData.map((product, index) => (
                            <div key={index} className="product">
                                <div className="productDetail">
                                    <img src={product.img} alt="" />
                                    <div className="details">
                                        <span className="productName">
                                            <b>Products:</b>{' '}
                                            {product.product.title}
                                        </span>
                                        <span className="productID">
                                            <b>ID:</b> {product._id}
                                        </span>
                                        <div
                                            className="productColor"
                                            style={{
                                                backgroundColor: `${product.color}`,
                                            }}
                                        ></div>
                                        <span className="productSize">
                                            <b>Size:</b> {product.size}
                                        </span>
                                    </div>
                                </div>

                                <div className="priceDetail">
                                    <div className="productAmountContainer">
                                        <Add
                                            onClick={() =>
                                                handleIncrease(
                                                    product.product._id,
                                                )
                                            }
                                        />
                                        <div className="productAmount">
                                            {product.quantity}
                                        </div>
                                        <Remove
                                            onClick={() =>
                                                handleDecrease(
                                                    product.product._id,
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="productPrice">
                                        {product.price * product.quantity}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    <div className="summary">
                        <div className="summaryTitle">ORDER SUMMARY</div>
                        <div className="summaryItem">
                            <div className="siText">Subtotal</div>
                            <div className="siPrice">$ {total}</div>
                        </div>
                        <div className="summaryItem">
                            <div className="siText">Estimated Shipping</div>
                            <div className="siPrice">$ 5.90</div>
                        </div>
                        <div className="summaryItem">
                            <div className="siText">Shipping Discount</div>
                            <div className="siPrice">$ -5.90</div>
                        </div>
                        <div className="summaryItem total">
                            <div className="siText">Total </div>
                            <div className="siPrice">$ {total}</div>
                        </div>
                        {/* <StripeCheckout
                            token={onToken}
                            stripeKey={KEY}
                            amount={cart.total * 100}
                            // billingAddress
                            // shippingAddress
                            name="SowRi"
                            description={`Your total is $${cart.total}`}
                            image="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/324584455_487810650192880_3422462454493528535_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gtWX7D_GFNQAX9oCBNY&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBZb_Je67FXNMNh2Tocp7Zs_uJ_ot8s9cCs9S8XMpwIQA&oe=6535D6FB"
                        >
                            <button className="btncheck">CHECKOUT NOW</button>
                        </StripeCheckout> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
