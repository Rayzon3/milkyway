import React, {useEffect, useState} from 'react'
import axios from 'axios'


const UserMe = () => {

    const [pname, setPname] = useState('')
    const [add, setAdd] = useState('')
    const [pnum, setPnum] = useState('')
    const [district, setDistrict] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
      
      useEffect(() =>{
        axios.get('http://localhost:5000/api/auth/me',{
          withCredentials:true,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((m_response) =>{
          setPname(m_response.data.name)
          setAdd(m_response.data.address)
          setPnum(m_response.data.mobileNum)
          setDistrict(m_response.data.district)
          setState(m_response.data.state)
          console.log(m_response.data)
        })
        .catch((err) =>{
          console.log(err)
        })
      },[])

      const handleEmailUpdate = ()=>{
        axios.post('http://localhost:5000/api/auth/update/email',{
            email:email
        },{
            withCredentials:true
        })
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
      }

      const handleAddressChange = () =>{
        axios.post('http://localhost:5000/api/auth/update/address',{
            email:email
        },{
            withCredentials:true
        })
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
      }
  return (
    <div>
        <div className='flex px-3 lg:px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-2xl lg:text-4xl'>MilkyWay</h1>
        {/* <button className='text-xl font-white bg-black text-white px-6 py-3 rounded-xl hover:scale-110 hover:-translate-x-1 transition-all'>Sign out</button> */}
        </div>
        <h1 className='text-5xl text-center my-20 font-bold'>Hi, {pname}</h1>
        <div className='  mx-40 gap-8'>
            <div className='text-center p-5 text-3xl font-bold rounded-xl shadow-xl'>
                <input placeholder='Update Email' className='py-2 px-2' value={email} onChange={(e)=>{setEmail(e.target.value);}}></input>
                <button className='text-2xl ml-4 text-white rounded-xl px-5 py-3 bg-black' onClick={handleEmailUpdate}>Update</button>
            </div>
            {/* <div className='text-center p-5 text-3xl font-bold rounded-xl shadow-xl'>
                <input placeholder='Update Address' className='py-2 px-2' value={address} onChange={(e)=>{setAddress(e.target.value);}}></input>
                <button className='text-2xl ml-4 text-white rounded-xl px-5 py-3 bg-black' onClick={handleAddressChange}>Update</button>
            </div> */}
        </div>
        <div>
            <h1 className='text-2xl font-semibold my-5 ml-8'>User Details:</h1>
            <h1 className='text-xl font-semibold ml-8'>Address: {add}</h1>
            <h1 className='text-xl font-semibold ml-8'>Mobile Number: {pnum}</h1>
            <h1 className='text-xl font-semibold ml-8'>District: {district}</h1>
            <h1 className='text-xl font-semibold ml-8'>State: {state}</h1>
        </div>
    </div>
  )
}

export default UserMe