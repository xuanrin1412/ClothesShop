import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import axios from 'axios'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        const data = {
            email,
            password,
        }
        axios
            .post('http://localhost:3001/api/login/', data, {
                withCredentials: true,
            })
            .then(result => {
                // console.log("result", result);
                if (result.data.message === 'Login Success') {
                    navigate('/')
                } else {
                    alert('Check your email and password')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="login">
            <div className="wrapper">
                <div className="title">SIGN IN</div>
                <form onSubmit={handleSubmit} className="inputContainer">
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email..."
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="text"
                        placeholder="Enter password..."
                    />
                    <input type="submit" />
                    <a className="argreement">
                        DO NOT YOU REMEMBER THE PASSWORD ?
                    </a>
                    <Link to={'/register'}>
                        <div className="argreement">CREATE A NEW ACCOUNT</div>
                    </Link>
                </form>
            </div>
        </div>
    )
}
