//import * as React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import Todo from './components/todo'
import { Routes, Route } from "react-router-dom";
import * as React from 'react'
import Login from './components/login';
import Todo from './components/todo';
import { PrivateRoutes } from './components/privateRoute';

const App:React.FC = ()=> {
  


  return (
    <>

    <div><h1>Debashish Todo List</h1></div>

    <Routes>
      <Route path="/" element={
        <PrivateRoutes>
          <Todo />

        </PrivateRoutes>
         
         } />
      <Route path="/login" element={ <Login />} />
    </Routes>

 

      
       

    </>
  )
}

export default App
