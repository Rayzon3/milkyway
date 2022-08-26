import axios from 'axios';
import {useState, useEffect} from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'

const ProviderRegister = () => {
  const [name ,setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass ,setPass] = useState('')
  const [pnum, setPnum] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [lat, setLat] = useState(0.0)
  const [long, setLong] = useState(0.0)
  const router = useRouter()
  
  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/auth/registerProvider',{
      name:name,
      email:email,
      password:pass,
      pnum:pnum,
      address:address,
      state:state,
      district:district,
      lat:lat,
      long:long
    })
    .then((response) => {
      // router.push('/providerLogin')
      console.log(response)
    })
    .catch((error) => {console.log(error)})
    console.log(name, email, pass, lat, long, state, district, pnum)
    setName('')
    setEmail('')
    setPass('')
    setPnum('')
    setAddress('')
    setLat(0.0)
    setLong(0.0)
    setState('')
    setDistrict('')
  }

  useEffect(() =>{
    if ("geolocation" in navigator) {
        console.log('Avaiable')
      }
      navigator.geolocation.watchPosition(function(position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      });
    },[])

  return (
    <div className='min-h-screen bg-[#5fc5fb] pb-12'>
        <h1 className=' text-white font-Poppins text-4xl ml-2 lg:ml-4 py-8 '>MilkyWay</h1>
        <form className='bg-white lg:mx-auto flex flex-col justify-center   lg:w-1/2 mx-3  p-8 rounded-xl'>
          <h1 className='font-Poppins text-3xl text-center py-3'>Register as a Seller</h1>
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
            type="text"
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
          <div className='flex space-x-8 items-center'>
            <input
            id="name"
            type="email"
            className="p-2  m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter District'
            required
            value={district}
            onChange={(e)=>{setDistrict(e.target.value)}}
          />
          <input
            id="name"
            type="text"
            className="p-2 m-2 rounded-md border-gray-300 w-full border-b-2 focus:outline-none focus:border-cyan-400"
            placeholder='Enter State'
            required
            value={state}
            onChange={(e)=>{setState(e.target.value)}}
          />
          </div>
          <button className='bg-[#5fc5fb] mx-3 lg:mx-32 py-2 rounded-xl mt-4 text-white text-xl' onClick={handleSubmit}>Sign Up</button>
          <p className="text-center mt-4 text-lg ">Already a seller? <span className='text-blue-500'><Link href='/userLogin '>Log In here!</Link></span></p>
        </form>
    </div>
  );
  };
  
  export default ProviderRegister;
  