import React from 'react'
import Input from '../../components/ui/Input'
import {useState} from 'react'
import styles from './Auth.module.scss'
import axios from 'axios'
import Router from 'next/router'


function register() {
    const config = {
        headers: {
          "Content-Type": "application/json",
        }
      };
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
      setError(false);
      e.preventDefault();
      try{
        const res = await axios.post("http://localhost:3030/api/auth/register", 
        {
          username,
          email,
          password
        });
        localStorage.setItem("token", res.data);
        Router.push('/profile')
      }catch(err){
        setError(true);
      }
    };

    return (
        <div className={styles.login}>
            <div className={styles.settings_wrapper}>
                <span className={styles.settings_title}>Register</span>
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
                            type="email"
                            name="Email"
                            placeholder="Enter your email..."
                            onChange={e=>setEmail(e.target.value)}
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
                        Register
                    </button>
                    {error && <p className={styles.p_err_message}>Une erreur est survenue.</p>}
                </form>
            </div>
        </div>
    )
}

export default register
