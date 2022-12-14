import React, {useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import Link from 'next/link'

const AdminLogin = () => {
  
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const handleSubmit =() =>{
        // e.preventDefault
        axios.post('http://localhost:5000/api/adminAuth/login',{
        email:email,
        password:pass
        }, {
          withCredentials: true
        })
        .then((res)=>{
          router.push('/adminHome')
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
          alert('The user could not be found')
        })
        console.log(email, pass)
        setEmail('')
        setPass('')
    }
  return (
    <div className='min-h-screen bg-[#5fc5fb] pt-20'>
        <h1 className='text-center text-white font-Poppins text-8xl pb-8'>MilkyWay</h1>
        <p className='text-center text-white text-3xl '>Logging In as a Admin</p>
        <form className='bg-white mx-auto flex flex-col justify-center w-1/3 mt-8 p-8 rounded-xl'>
            <h1 className='font-Poppins text-3xl text-center py-3'>Login in to your account</h1>
            <input
            id="name"
            type="email"
            className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br></br>
          <input
            id="name"
            type="text"
            className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder="Enter Password"
            required
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
          />
          <button className='bg-[#5fc5fb] mx-32 py-2 rounded-xl mt-4 text-white text-xl' onClick={handleSubmit}>Log In</button>
          <p className="text-center mt-4 text-lg">New here? <span className='text-blue-500'><Link href='/providerRegister '>Register Now!</Link></span> as a seller</p>
        </form>
    </div>
  )
}

export default AdminLogin