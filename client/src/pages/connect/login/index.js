import React from 'react'
import {useState} from 'react'
import Input from '../../../components/ui/input/Input'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'



import styles from './index.module.scss'
import Title from '../../../components/ui/title/Title'
import Message from '../../../components/ui/message/Message'

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
        <div className={styles.page__login}>
                <Title title='Login'/>
                <form className={styles.form__login} onSubmit={handleSubmit}>
                    <div>
                        <Input 
                            type="text"
                            name="Username"
                            label="Username"
                            placeholder="Enter your username..."
                            onChange={e=>setUsername(e.target.value)}
                            required
                        />
                        <Input 
                            type="password"
                            name="Password"
                            label="Password"
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required
                        />
                          <Link href='/connect/register'>
                                <a className={styles.button__register}>Register?</a>
                            </Link>
                    </div>
                    <input 
                        className="btn btn-black"
                        type="submit"
                        value="Connect"
                    />
                  
                    {error && <Message type="error" message="Une erreur est survenue."/>}
                </form>
            </div>          
    )
}

export default login
