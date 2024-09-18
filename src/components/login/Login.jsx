import React from 'react'
import { useNavigate } from 'react-router-dom';
import { chnageLoginStatus,setLoginUser } from '../../redux/slices/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const {loginStatus}=useSelector((store)=>store.login)
    const dispatch=useDispatch();
  
    const handleLogin = async () => {
        
        try{ 
            const res= await fetch(" https://dummyjson.com/auth/login",{
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username:'emilysds',
                    password:'emilyspass',
                    expiresInMins:30,
                })
            })
            const loginUser=await res.json();
            if(loginUser.token){
            localStorage.setItem("auth", JSON.stringify({ isAuth: loginUser.token }));
            dispatch(chnageLoginStatus());
            dispatch(setLoginUser(loginUser));
            alert("User logedin!");
            }
            else{
                console("user not found")
            }
        }
        catch(error)
        {
            console.log("error",error);

        }
     
    };
  
    const handleLogout = () => {
      localStorage.removeItem("auth");
      dispatch(chnageLoginStatus());
      dispatch(setLoginUser([]));
      navigate("/");
    };
  
  return (
    <div>
     <button onClick={!loginStatus ?handleLogin:handleLogout}>{!loginStatus ? "Login" : "Logout"}</button>
    </div>
  )
}

export default Login;