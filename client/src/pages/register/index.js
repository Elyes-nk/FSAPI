import React from 'react'
import Input from '../../components/ui/input/Input'
import {useState} from 'react'
import styles from "./index.module.scss";
import axios from 'axios'
import Router from 'next/router'
import Title from '../../components/ui/title/Title'

function register() {
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
        <div className={styles.page__register}>
                <Title title="Inscription"/>
                <form className={styles.form__register} onSubmit={handleSubmit}>
                    <div>
                        <Input 
                            type="text"
                            label="Nom"
                            name="Username"
                            placeholder="Enter your username..."
                            onChange={e=>setUsername(e.target.value)}
                            required={true}
                        />
                        <Input 
                            type="email"
                            name="Email"
                            label="Email"
                            placeholder="Enter your email..."
                            onChange={e=>setEmail(e.target.value)}
                            required={true}
                        />
                        <Input 
                            type="password"
                            name="Password"
                            label="Password"
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required={true}
                        />
                    </div>
                    <input 
                        className="btn btn-black"
                        type="submit"
                        value="Register"
                    />        
                    {error && <p className={styles.p_err_message}>Une erreur est survenue.</p>}
                </form>
            </div>
    )
}

export default register
