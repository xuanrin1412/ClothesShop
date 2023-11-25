import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ProductShop from './pages/productShop/ProductShop'
import SearchResult from './pages/searchResult/SearchResult'
import Product from './pages/productInfo/Product'
import Cart from './pages/cart/Cart'
import WishList from './pages/wishList/WishList'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Manager from './pages/manager/Manager'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/productShop" element={<ProductShop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wish" element={<WishList />} />
                <Route path="/searchResult" element={<SearchResult />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/manager" element={<Manager />} />
            </Routes>
        </Router>
    )
}

export default App
