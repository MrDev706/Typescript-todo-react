import * as React from 'react'
import { Navigate } from "react-router-dom";
interface MyComponentProps {
    children: React.ReactNode;
  }

export const PrivateRoutes:React.FC<MyComponentProps> = ({children}) =>{
 
   
   const geTokenFromLocalStorage = localStorage.getItem("token")
   console.log(geTokenFromLocalStorage)

   return geTokenFromLocalStorage? <>{children}</> : (<Navigate to='/login' replace={true} />)
}