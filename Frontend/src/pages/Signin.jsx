import React from 'react'
import Heading from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'


const Signin = () => {
  return (
    <div className='flex justify-center bg-slate-300 h-screen'>
    <div className='flex flex-col justify-center pt-2 bg-white h-max mt-8 rounded-lg w-auto'>
     <Heading label={"Sign In"}/>
     <SubHeading label={"Enter your information to create an account"}/>
     <InputBox label={"Email"} placeholder={"john@gmail.com"}/>
     <InputBox label={"Password"} placeholder={"***"}/>
     <Button label={"Sign In"}/>
     <BottomWarning label={"Don't have an account"} to={"/signup"} buttonText={"SignUp"}/>
   </div>
  </div>
  )
}

export default Signin
