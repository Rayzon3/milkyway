import React, {useState, useEffect, } from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import Link from 'next/link'

const AdminRegister = () => {
  const [name ,setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass ,setPass] = useState('')
//   const [pnum, setPnum] = useState('')
  const router = useRouter()
  
  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/adminAuth/register',{
      name:name,
      email:email,
      password:pass,
    })
    .then((response) => {
      router.push('/adminLogin')
    })
    .catch((error) => {console.log(error)})
    console.log(name, email, pass)
    setName('')
    setEmail('')
    setPass('')
  }

  return (
    <div className='min-h-screen bg-[#5fc5fb] '>
        <h1 className=' text-white font-Poppins text-4xl ml-4 py-8 '>MilkyWay</h1>
        <form className='bg-white m-auto flex flex-col justify-center w-1/3 mt-20 p-8 rounded-xl'>
          <h1 className='font-Poppins text-3xl text-center  py-3'>Register as an Admin</h1>
          <input
            id="name"
            type="Enter Name"
            className="p-2  m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter Name'
            required
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <div className=''>
            <input
            id="name"
            type="email"
            className="p-2  m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter Email'
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            id="name"
            type="password"
            className="p-2 m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter Password'
            required
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
          />
          </div>
          
          <button className='bg-[#5fc5fb] mx-32 py-2 rounded-xl mt-4 text-white text-xl' onClick={handleSubmit}>Sign Up</button>
          <p className="text-center mt-4 text-lg">Already have an account? <span className='text-blue-500'><Link href='/adminLogin '>Log In here!</Link></span></p>
        </form>
    </div>
  );
}

export default AdminRegister