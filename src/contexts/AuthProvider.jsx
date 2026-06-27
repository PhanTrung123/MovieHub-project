import React, { createContext, useEffect, useState } from 'react';
export const ContextAuth = createContext();
function AuthProvider({children}) {
     const [isLogin,setIsLogin] = useState(null);

     useEffect(() => {
       const accLogin = JSON.parse(localStorage.getItem("isLogin"));
       if(accLogin) {
         setIsLogin(accLogin);
       }
     },[]);

    const handleLoginAcc = (acc) => {
        localStorage.setItem("isLogin",JSON.stringify(acc));
        setIsLogin(acc);
    }

    const handleLogoutacc = () => {
        localStorage.removeItem("isLogin");
        setIsLogin(null);
    }

    return (
        <ContextAuth.Provider value={{handleLoginAcc , handleLogoutacc , isLogin }}>
             {children}
        </ContextAuth.Provider>
    );
}

export default AuthProvider;