import React from 'react'
import { Navigate } from "react-router-dom";

export const PrivateRoutes:React.FC = ({children}) =>{
    interface Us {
        token: string,
  
    }
   const geTokenFromLocalStorage = localStorage.getItem("token")
   console.log(geTokenFromLocalStorage)

   return geTokenFromLocalStorage? children : (<Navigate to='/login' replace={true} />)
}