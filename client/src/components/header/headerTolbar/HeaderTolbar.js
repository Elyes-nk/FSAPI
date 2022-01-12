import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import LogoImg from '../../../../public/cart.jpeg'
import styles from "./HeaderTolbar.module.scss";
import { useRouter } from "next/router";


const HeaderTolbar = () => {
    const router = useRouter();
    const [loged, setLoged] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("token");  
        token && setLoged(true) 
    }, [])
    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/login");
    }
    return (
        <div className={styles.header__toolbar}>
            {loged? (
                <a 
                    className="btn btn-white"
                    onClick={()=>handleLogout()}
                >
                    Logout
                </a>
            ):(
                <Link href="/login">
                    <a className="btn btn-white">
                        Login
                    </a>
                </Link>
            )}
           
            {/* <Link href="/connect/register">
                <a className="btn btn-white">
                    Register
                </a>
            </Link> */}
            <Link href='/shop'>
                <img 
                    src={LogoImg.src} alt="Nike" 
                />
            </Link>
        </div>        
    )
}

export default HeaderTolbar
