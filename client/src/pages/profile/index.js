import React,{useState, useEffect} from 'react'
import styles from './Profile.module.scss'
import axios from 'axios'


function index() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [userId, setUserId] = useState({})
    const [password, setPassword] = useState("")
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)

    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("token");   
    
        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const res = await axios.get("http://localhost:3030/api/users/getSecretUser",{
                        headers:{
                            "token":token
                        }
                    })
                    setUserId(res.data._id)
                    setUsername(res.data.username)
                    setEmail(res.data.email)                  
                } catch (error) {
                    setError(true)
                }
            }
            fetchUser()
        
        }, [])
    }

    const handleSubmit = async() => {
        e.preventDefault();
        const updatedUser = {
          userId : userId,
          username,
          email,
          password,
        }
        try {
          const res = await axios.put("/users/"+userId,updatedUser);
          setSucess(true);
        } catch (error) 
        {
          dispatch({type:"UPDATE_FAILURE"})
         }

    }
    
    return (
        <div className={styles.settings}>
            <div className={styles.settings_wrapper}>
                <div className={styles.settings_title}>
                    <span className={styles.settings_title_update}>Your Account</span>
                    {sucess && (
                        <span className={styles.settings_title_update} style={{color:"green", textAlign:"center"}}>Your Account has been updated successfuly</span>
                    )}
                </div>
                <form className={styles.settings_form} onSubmit={handleSubmit}>
        
        
        
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        name="name" 
                        onChange={e=>setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        name="email"
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        onChange={e=>setPassword(e.target.value)}
                    />
        
                    
                    <button className={styles.settings_submit_button} type="submit">
                        Update
                    </button>
                 
        
        
                </form>
            </div>
      </div>
    );
}

export default index
