import Link from 'next/link'
import React, {useState} from 'react'
import LogoImg from '../../../../public/cart.jpeg'
import styles from "./HeaderTolbar.module.scss";


const HeaderTolbar = () => {
    const [loged, setLoged] = useState(false)
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("token");  
        token && setLoged(true) 
    }
    return (
        <div className={styles.header__toolbar}>
            {loged? (
                <a 
                    className="btn btn-white"
                    onClick={()=>localStorage.removeItem("token")}
                >
                    Logout
                </a>
            ):(
                <Link href="/connect/login">
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
