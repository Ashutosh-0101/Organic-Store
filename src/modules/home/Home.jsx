import React from 'react'
import { useSelector } from 'react-redux'
import LoginModal from '../../components/login/LoginModal'

const Home = () => {
    const {loginUser}=useSelector((store)=>store.login)

  return (
    <div style={{height:"100vh", width:"100%", backgroundColor:"yellow"}}>Home
       <div>
        {loginUser.email}
         
        </div>  
        <LoginModal/>  
    </div>
  )
}

export default Home