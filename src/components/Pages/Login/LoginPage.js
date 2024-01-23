import React from 'react'
import log from  '../../Assets/LoginImages/loginMainImg.svg'
import LoginPageLeftSide from './LoginPageLeftSide'

const LoginPage = () => {
  return (
    <section className='flex justify-start items-start bg-[#F5F5F5] h-[100vh]'>
        <div className='hidden md:block  md:h-[100%]'>
            <img src={log} className='object-cover h-[100%] w-[100%]' alt="LoginMainImg"/>
        </div>
        <div className='w-[100%] h-[100%] bg-[#F5F5F5]'>
            <LoginPageLeftSide/>   
        </div>
        
    </section>
  )
}

export default LoginPage
