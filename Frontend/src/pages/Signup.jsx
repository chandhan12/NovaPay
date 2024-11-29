import React, { useState } from 'react'
import Heading from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from "axios"

const Signup = () => {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  return (
   <div className='flex justify-center bg-slate-300 h-screen'>
     <div className='flex flex-col justify-center pt-2 bg-white h-max mt-8 rounded-lg w-auto'>
      <Heading label={"Sign Up"}/>
      <SubHeading label={"Enter your information to create an account"}/>
      <InputBox onInputChange={(e) =>{
        setFirstName(e.target.value)
      }} label={"First Name"} placeholder={"john"}/>
      <InputBox onInputChange={(e) =>{
        setLastName(e.target.value)
      }} label={"Last Name"} placeholder={"doe"}/>
      <InputBox onInputChange={(e) =>{
        setUserName(e.target.value)
      }} label={"Email"} placeholder={"john@gmail.com"}/>
      <InputBox onInputChange={(e) =>{
        setPassword(e.target.value)
      }} label={"Password"} placeholder={"min-6(123895)"}/>
      <Button onClick={async () =>{
       const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
          userName,
          password,
          firstName,
          lastName
        })
        localStorage.setItem("token",response.data.token)
      }} label={"Sign Up"}/>
      <BottomWarning label={"Already have an account"} to={"/signin"} buttonText={"SignIn"}/>
    </div>
   
   </div>
  )
}

export default Signup
