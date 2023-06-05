import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
//import {sign} from 'jsonwebtoken'

//import { SignOptions } from 'jsonwebtoken';
import { AuthContext } from '../context'


const Login:React.FC = () => {
    const navigate = useNavigate()

    const {setUser} = useContext(AuthContext)

    // interface Us {
    //     _id: string;
    //     email: string;
    //     password: string;
    //     name: string;

    // }

    const db = {
        email: "poradi500@gmail.com",
        password: "Dev@1234",
        _id: '12345',
        name: 'Debashish Dutta'
    }
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    // const options: SignOptions = {
    //     expiresIn: '1h', 
    //   };

    // const generateToken = (userId: string, name: string): string => {
    //     const secretKey = 'Dev-hero-123';
    //     const token = "567" //sign({ _id: userId, name: name }, secretKey, options);
    //     console.log(token)
    //     return token;
    //   };
    
    



    const handleSubmit = (e:any)=>{
        e.preventDefault()
        
            if(email==db.email && pass==db.password){
                let  token =   "3339edjdjfdkjfiififfrfr"  //generateToken(db._id, db.name)
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(db))
                setUser(db)
                navigate('/')
        
            }else{
                alert("enter wrong email password")
            }
        
        

    }

    return (
    <>
    <h1>Login here</h1>
    <form onSubmit={handleSubmit}>
    <input type='email' name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='email..'/>
    <input type='text' name="pass" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder='password..'/>
    <button type='submit'>Login</button>

    </form>

    </>
    )

}

export default Login