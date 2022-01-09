import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";
import axios from "axios"

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verify, setVerify] = useState(false);


    useEffect(() => {
        const verifyToken = async() => {
          try{
            const token = localStorage.getItem("token");
            const res = await axios.get('http://localhost:3030/api/v1/auth/verifytoken', {
              headers: {
                "authorization":token
              }
            })
            setVerify(true)
          }catch(err){
            localStorage.removeItem("token");
            router.push("/login");
          }
          verifyToken();
        }
    }, [])



    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;