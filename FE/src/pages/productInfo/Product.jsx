import { Add, FavoriteOutlined, Remove } from '@mui/icons-material'
import styles from './product.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../component/navbar/Navbar'
import { useCart } from '../../cartContext'

const cx = classNames.bind(styles)
// PAGE CHI TIẾT SẢN PHẨM
export default function Product() {
    // lấy ra ID sản phẩm
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [takeEmail, setTakeEmail] = useState('')
    const { updateQuantity } = useCart()
    console.log('id', id)
    //==========LẤY API =====================
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            try {
                await axios
                    .get('http://localhost:3001/api/clothes/find/' + id)
                    .then(response => {
                        setProduct(response.data.result)

                        console.log('response', setProduct)
                    })
            } catch {}
        }
        getProduct()
    }, [id])
    console.log('product', product)

    //==========USER CAN CHOOSE COLOR SIZE =====================
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    console.log(color)

    //==========HANDLE SỐ LƯỢNG =====================
    const [quantity, setQuantity] = useState(1)
    const handleQuantity = type => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const navigate = useNavigate()
    const addToCart = async () => {
        try {
            await axios
                .post(
                    'http://localhost:3001/api/cart/',
                    {
                        productId: id, // Thay thế yourProductId bằng ID của sản phẩm
                        quantity: quantity, // Thay thế yourQuantity bằng số lượng sản phẩm
                        color: color,
                        size: size,
                        img: product.img,
                    },
                    { withCredentials: true },
                )
                .then(response => {
                    console.log('responsePost', response)
                    if (response.data.message === "You haven't login") {
                        navigate('/login')
                    }
                    updateQuantity(response.data.quantity)
                    setTakeEmail(response.data.userValue.email)
                })
                .catch(error => {
                    console.error('Error fetching product data:', error)
                })

            //  console.log('response.data', response.data) // Xử lý kết quả trả về từ backend (nếu cần)
        } catch (error) {
            console.error('Error adding to cart:', error)
        }
    }

    return (
        <div className={cx('container')}>
            <Navbar takeEmail={takeEmail} />
            <div className={cx('wrapper')}>
                {/*----- IMAGE--------------------------------  */}
                <div className={cx('imgContainer')}>
                    <img
                        className={cx('image')}
                        src={product.img}
                        alt={product.title}
                    />
                </div>
                {/*----- IMAGE INFO--------------------------- */}
                <div className={cx('infoContainer')}>
                    <h3 className={cx('title')}>{product.title}</h3>
                    <div className={cx('desc')}>{product.desc}</div>
                    <div className={cx('price')}> {product.price} VND</div>
                    {/*----- FIFLTER CONTAINER -color-size -------  */}
                    <div className={cx('filterContainer')}>
                        {/* ----------FILTER COLOR */}
                        <div className={cx('filter')}>
                            <div className={cx('filterTitle')}>Color</div>
                            {/* đảm bảo product.color có tồn tại và là một mảng  */}
                            {product.color &&
                                product.color.map((c, index) => (
                                    <div
                                        key={index}
                                        className={cx('filterColor')}
                                        style={{ backgroundColor: c }}
                                        onClick={() => setColor(c)}
                                    ></div>
                                ))}
                        </div>
                        {/* -----------FILTER SIZE */}
                        <div className={cx('filter')}>
                            <div className={cx('filterTitle')}>Size</div>
                            <select
                                className={cx('filterSize')}
                                onChange={e => setSize(e.target.value)}
                            >
                                {/* đảm bảo product.size có tồn tại và là một mảng  */}
                                {product.size &&
                                    product.size.map((s, index) => (
                                        <option key={index}>{s}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    {/*----- FIFLTER CONTAINER -AMOUNT -------  */}
                    <div className={cx('addFilterContainer')}>
                        <div className={cx('amountContainer')}>
                            <Remove
                                onClick={() => handleQuantity('dec')}
                                className={cx('btnID')}
                            />
                            <div className={cx('amout')}>{quantity}</div>
                            <Add
                                onClick={() => handleQuantity('inc')}
                                className={cx('btnID')}
                            />
                        </div>
                        <button onClick={addToCart} className={cx('btnAdd')}>
                            ADD TO CART
                        </button>
                        <div>
                            <FavoriteOutlined className={cx('heart')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
