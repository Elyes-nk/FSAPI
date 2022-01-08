import React, { useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [verify, setVerify] = useState(false);
    //On va chercher le token
    //On consomme un endpoint de vérification de token qui renvoie true ou false
    //dans le useEffect
    // À l'intérieur du then
    // - cas 1: si true return <WrappedComponent {..props}/>
    // - cas 2 : Si false on redirige sur login
    // - remove du localsotrage
  };
};

export default withAuth;