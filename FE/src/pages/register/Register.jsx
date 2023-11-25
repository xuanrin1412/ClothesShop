import { useState } from 'react'
import axios from 'axios'
import './register.scss'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(email)
        // console.log(name)
        // console.log(password)
        axios
            .post('http://localhost:3001/api/register/', {
                name,
                email,
                password,
            })
            .then(result => {
                console.log(result.data)
                navigate('/login')

                // navigate("/login");
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="register">
            <div className="wrapper">
                <div className="title">CREATE AN ACCOUNT</div>
                <form onSubmit={handleSubmit} className="inputContainer">
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="email"
                    />
                    <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="name"
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="text"
                        placeholder="password"
                    />
                    <input type="submit" />
                    <div className="argreement">
                        By creating an account, I consent to the processing of
                        my personal data in accordance with the
                        <b>PRIVACY POLICY</b>
                    </div>
                </form>
            </div>
        </div>
    )
}
