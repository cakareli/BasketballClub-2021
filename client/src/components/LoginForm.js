import React, { useState} from 'react'
import axios from '../api/axios';
import jwtDecode from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';


const LOGIN_URL = '/auth/login';

function LoginForm() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    let navigate = useNavigate()

    const submitHandler = async e =>  {
        e.preventDefault();
        try{
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({username: email, password: password}),
                {
                    headers: {'Content-Type': 'application/json'},
                }
            );
            console.log(JSON.stringify(response?.data));
            const data = JSON.stringify(response?.data);
            var obj = JSON.parse(data);
            console.log("Access Token: "+obj.access_token)
            console.log("Refresh Token: "+obj.refresh_token)
            const accessToken = obj.access_token;
            if(accessToken){
                const decodedToken = jwtDecode(accessToken)
                const decodedTokenJson = JSON.stringify(decodedToken)
                var obj = JSON.parse(decodedTokenJson);
                console.log("Role: "+obj.role)
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("id",obj.sub)
                localStorage.setItem("role",obj.role)
                
            }else{
                console.log("There is no token")
            }
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }
    return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name='email' id='email' onChange={e => setEmail(e.target.value)} value={email}/>
            </div>
            <br></br>
            <div className='form-group'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
            </div>
            <input type="submit" value='LOGIN'/>
        </div>
    </form>
  )
}

export default LoginForm