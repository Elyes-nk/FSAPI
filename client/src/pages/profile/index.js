import React,{useState, useEffect} from 'react'
import styles from './index.module.scss'
import axios from 'axios'
import Title from '../../components/ui/title/Title'
import Input from '../../components/ui/input/Input'
import withAuth from '../../../HOC/withAuth'

function index() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [userId, setUserId] = useState({})
    const [password, setPassword] = useState("")
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem("token");   
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:3030/api/users/get-user",{
                    headers:{
                        "authorization":token
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
    

    const handleSubmit = async() => {
        e.preventDefault();
        const updatedUser = {
          userId : userId,
          username,
          email,
          password,
        }
        try {
          const res = await axios.put("/users/"+userId,
            {
                headers:{
                    "authorization":token,
                }
            },
            updatedUser);
          setSucess(true);
        } catch (error) 
        {
            setError(true)
        }
    }
    
    return (
        <div>
            <Title title="Your account"/>
            <form className={styles.form__profil} onSubmit={()=>handleSubmit()}>
                <Input 
                    type="text" 
                    value={username} 
                    label="Username"
                    name="name" 
                    onChange={e=>setUsername(e.target.value)}
                />
                <Input 
                    type="email" 
                    value={email} 
                    label="Email"
                    name="email"
                    onChange={e=>setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    label="Password"
                    onChange={e=>setPassword(e.target.value)}
                />
    
                
                <input className="btn btn-black" type="submit" />
                {sucess && (
                    <Message type="success" message="Your Account has been updated successfuly"/>
                )}
            </form>
        </div>
    );
}

export default withAuth(index)
