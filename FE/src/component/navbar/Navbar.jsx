import {
    Face,
    Favorite,
    LogoutOutlined,
    Search,
    ShoppingCart,
} from '@mui/icons-material'
import './navbar.scss'
import { Badge } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode' // Import jwtDecode correctly
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useCart } from '../../cartContext'

export default function Navbar() {
    const [name, setName] = useState('')
    const { quantity } = useCart()
    const { updateQuantity } = useCart()

    const navigate = useNavigate()

    useEffect(() => {
        const token = Cookies.get('tokenJWT')
        if (token) {
            try {
                const decodedToken = jwtDecode(token)
                setName(decodedToken.name)
            } catch (error) {
                console.error('Error decoding token:', error)
            }
        }

        axios
            .get('http://localhost:3001/api/cart/', {
                withCredentials: true,
            })
            .then(response => {
                console.log(response)
                // if (response.data.message === "You haven't login") {
                //     navigate('/login')
                // }
                updateQuantity(response.data.quantity)
            })
            .catch(error => {
                console.error('Error fetching product data:', error)
            })
    }, [updateQuantity])

    const handleOut = () => {
        axios
            .delete('http://localhost:3001/api/register/', {
                withCredentials: true,
            })
            .then(result => {
                if (result.data.message === 'Logout Success') {
                    //alert('Logout success')
                    updateQuantity(0)
                    setName('')
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="login-contain">
                        <div className="iconLogin">
                            <Face className="iconFace" />
                        </div>
                        {name ? (
                            <>
                                <div style={{ padding: ' 0 10px' }}>
                                    User: {name}
                                </div>
                                <LogoutOutlined onClick={handleOut} />
                            </>
                        ) : (
                            <Link to={'/login'}>
                                <div className="loginn">Log In</div>
                            </Link>
                        )}
                        {/* <Link to={'/manager'}>
                            <div
                                style={{ padding: ' 0 20px' }}
                                className="adminManager"
                            >
                                Manager
                            </div>
                        </Link> */}
                    </div>
                    <div className="wm">
                        <Link
                            style={{ textDecoration: 'none' }}
                            to={`/productShop`}
                        >
                            <div className="menuItem">Women & Men</div>
                        </Link>
                    </div>
                </div>

                <Link style={{ textDecoration: 'none' }} to={`/`}>
                    <div className="logo">
                        <div className="logo-bg"></div>
                        <h1>Deni</h1>
                    </div>
                </Link>

                <div className="searchCartWish">
                    <div className="search-container">
                        <input type="text" placeholder="Search..." />
                        <Link
                            style={{ textDecoration: 'none' }}
                            to={`/searchResult`}
                        >
                            <div className="btnSearch">
                                <Search className="iconSearch" />
                            </div>
                        </Link>
                    </div>
                    <div className="wish-container">
                        <Link to="/wish">
                            <Badge
                                badgeContent={0}
                                color="primary"
                                className="badge"
                            >
                                <Favorite color="action" className="heart" />
                            </Badge>
                        </Link>
                    </div>
                    <div className="cart-container">
                        <Link to="/cart">
                            <Badge
                                badgeContent={quantity}
                                color="primary"
                                className="badge"
                            >
                                <ShoppingCart
                                    color="action"
                                    className="iconCart"
                                />
                            </Badge>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
