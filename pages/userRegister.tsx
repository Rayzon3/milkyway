import {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {useRouter} from 'next/router'
const UserRegister = () => {
  const [name ,setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass ,setPass] = useState('')
  const [pnum, setPnum] = useState(0)
  const [address, setAddress] = useState('')
  const router = useRouter()
  
  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/auth/register',{
      name:name,
      email:email,
      password:pass,
      mobileNum:pnum,
      address:address
    })
    .then((response) => {
      router.push('/userLogin')
    })
    .catch((error) => {console.log(error)})
    console.log(name, email, pass)
    setName('')
    setEmail('')
    setPass('')
    setPnum(0)
    setAddress('')
  }

  return (
    <div className='min-h-screen bg-[#5fc5fb] '>
        <h1 className=' text-white font-Poppins text-4xl ml-4 py-8 '>MilkyWay</h1>
        <form className='bg-white mx-auto flex flex-col justify-center w-1/2 mt-8 p-8 rounded-xl'>
          <h1 className='font-Poppins text-3xl text-center py-3'>Register as a Buyer</h1>
          <input
            id="name"
            type="Enter Name"
            className="p-2  m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter Name'
            required
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <div className='flex space-x-8 items-center'>
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
          <input
            id="number"
            type="number"
            className="p-2 m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter Phone Number'
            required
            value={pnum}
            onChange={(e)=>{setPnum(e.target.value)}}
          />
          <textarea
            id="name"
            rows={4} 
            className="p-2 m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter your Address'
            required
            value={address}
            onChange={(e)=>{setAddress(e.target.value)}}
          />
          <button className='bg-[#5fc5fb] mx-32 py-2 rounded-xl mt-4 text-white text-xl' onClick={handleSubmit}>Sign Up</button>
          <p className="text-center mt-4 text-lg">Already a user? <span className='text-blue-500'><Link href='/userLogin '>Log In here!</Link></span></p>
        </form>
    </div>
  );
};

export default UserRegister;
