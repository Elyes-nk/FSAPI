import React from 'react'
import {useState} from 'react'
import Input from '../../components/ui/Input'
import axios from 'axios'
import Router from 'next/router'



import styles from './Auth.module.scss'
function login() {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)


    const handleSubmit = async(e) => {
        setError(false);
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3030/api/auth/login", 
            {
                username: username,
                password: password,
            })
            localStorage.setItem("token", res.data.accessToken);
            Router.push('/profile')
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className={styles.settings}>
            <div className={styles.settings_wrapper}>
                <span className={styles.settings_title}>Login</span>
                <form className={styles.settings_form} onSubmit={handleSubmit}>
                    <div>
                        <Input 
                            type="text"
                            name="Username"
                            placeholder="Enter your username..."
                            onChange={e=>setUsername(e.target.value)}
                            required
                        />
                        <Input 
                            type="password"
                            name="Password"
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required
                        />
                    </div>
                    <button 
                        className={styles.button}
                        type="submit"
                    >
                        Login
                    </button>
                    {error && <p className={styles.p_err_message}>Une erreur est survenue.</p>}
                </form>
            </div>          
        </div>
    )
}

export default login
