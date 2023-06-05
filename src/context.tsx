import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
//import jwt from 'jsonwebtoken'
//import { useHistory } from 'react-router-dom';
//import jwtDecode from 'jsonwebtoken';

// Define the shape of the user object stored in the context
interface User {
  id: string;
  username: string;
}

interface Us {
    _id: string;
    email: string;
    password: string;
    name: string;

}

// Define the shape of the auth context
interface AuthContextValue {
  user: Us | null;
  login: (token: string) => void;
  logout: () => void;
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the auth context
const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
  setUser: ()=> {},
  token: null,
});

// AuthProvider component to wrap your app and provide the auth context
const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Us | null>({_id: "111", name: "Dev", email:"", password: ""});

  const[token, setToken] = useState<string | null>("")

  const navigate = useNavigate()


  
   const login = (token: string) => {
//     const decodedToken = ""//jwtDecode<{ userId: string; username: string }>(token);

  };

  // Logout function to clear user data and redirect to the login page
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null);

    setToken(null)

    // Remove the token from localStorage or sessionStorage if needed
    // Example: localStorage.removeItem('token');

    navigate('/login') // Redirect to the login page after logout
  };

  // Perform any additional checks or token validation on app startup
//   useEffect(() => {
//     // Check if a token is stored in localStorage or sessionStorage
//     const token = localStorage.getItem('token');
 

//     // If the token is valid, set the user object
//     if (token) {
//       setToken(token)
    
//     }
//   }, []);








  return (
    <AuthContext.Provider value={{ user, login, setUser, logout , token}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
