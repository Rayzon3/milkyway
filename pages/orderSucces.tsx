import React,{useEffect, useState} from 'react'
import axios from 'axios'

const OrderSucces = () => {

    const [items, setItems] = useState([])
    const [pid, setPid] = useState('')
    const [vname, setVname] = useState('')
    const [address, setAddress] = useState('')
    const [pnum, setPnum] = useState('')
    const [lat, setLat] = useState('')
    const [long,setLong] = useState('')
    useEffect(() =>{
        axios.get('http://localhost:5000/api/orders/userOrder',{
            withCredentials: true
        })
        .then((response)=>{
            console.log(response)
            setItems(response.data.items)
            setPid(response.data.providerID)
        })
        .catch((error)=>{console.log(error)})

        axios.post('http://localhost:5000/api/auth/providerPostMe',{
            providerID:pid,
        })
        .then((response)=>{
            setVname(response.data.name)
            setAddress(response.data.address)
            setLat(response.data.lat)
            setLong(response.data.long)
            console.log(response)
        })
        .catch((error)=>{console.log(error)})
    },[])
    
    const map_url = `http://maps.google.co.uk/maps?q=${lat},${long}`
    

  return (
    <div>
        <div className='bg-green-500'>
            <h1 className='text-center  text-white py-20 text-8xl font-Poppins '>Thank You!</h1>
            <p className='text-center text-white pb-16 text-4xl'>{vname} will reach at your doorstep shortly</p>
        </div>
        <div className='mx-20 shadow-xl mt-8 p-5 rounded-xl'>
            <h1 className='text-2xl font-bold'>Order Details:</h1>
            <p className='text-xl my-3'>Items:</p>
            <div className='flex justify-between'>
             <div>
            {
                items.map((item)=>{
                    return(
                        <div className='text-xl'>{item}</div>
                    );
                })
            }
            </div>   
            <h1 className='text-2xl'>Total amount: </h1>
            </div>
        </div>
        <div className='mx-20 shadow-xl mt-8 mb-12 p-5 rounded-xl'>
            <h1 className='text-2xl font-bold'>Vendor Details:</h1>
            <div className='flex justify-between'>
            <div>
            <p className='text-xl'>Name:</p>
             <h1 className='text-2xl font-bold'>{vname}</h1>
            </div>    
             <div>
            <h1 className='text-xl'>Address: </h1>
            <h1 className='text-xl pb-8'>{address}</h1>
            <a href={map_url} className='bg-orange-500 text-white text-xl mt-4 px-6 py-3 rounded-xl'>Locate on Map</a>

             </div>

            </div>
            <h1 className='text-xl'>Contact No: {}</h1>
        </div>
        <div>

        </div>
    </div>
  )
}

export default OrderSucces