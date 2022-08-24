import {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Producer_home = () => {
  const router = useRouter()
    const [name, setName] = useState('')
    const [isListed, setisListed] = useState(false)
    const [pid, setPid] = useState('')
    useEffect(() =>{
        axios.get('http://localhost:5000/api/auth/providerMe',{
          withCredentials:true,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((m_response) =>{
          console.log(m_response)
          setName(m_response.data.name)
          setPid(m_response.data.id)
        })
        .catch((err) =>{
          console.log(err)
        })
      },[])

      const handleSignout = () => {
    
            axios.get('http://localhost:5000/api/auth/logoutProvider',{
                withCredentials: true
            })
            router.push('/')
      }

     
        axios.post('http://localhost:5000/api/providerStock/getProviderItemsData',{
          providerID:pid
        })
        .then((response) =>{
          // console.log(response)
          if(response.data === null){
            setisListed(true)
          }
          else{
            setisListed(false)
          }
        })
        .catch((err) =>{
          setisListed(false)
        })
    
  return (
    <div className=''>
      <div className='flex px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-4xl'>MilkyWay</h1>
        <button>Sign out</button>
        </div>
        <div>
        <h1 className='text-center my-36 text-7xl  font-bold'>Hi, {name}</h1>
        <div className='grid grid-cols-3 gap-10 mx-32 text-center'>
            <Link href='/newOrders'>
            <div className='border-2 cursor-pointer rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>New Orders</h1>
                <p className='text-xl'>Pick Up an order from the customer</p>
            </div>
            </Link>
            <Link href='/liveOrders'>
            <div className='border-2 cursor-pointer rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>Live Orders</h1>
                <p className='text-xl'>Track the status of your current orders</p>
            </div>
            </Link>
            <Link href='/producerHistory'>
            <div className='border-2 cursor-pointer rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>History</h1>
                <p className='text-xl'>Checkout your order history</p>
            </div>
            </Link>

        </div>
        {
          isListed &&
        <div className='text-center'>
            <Link href='/itemsSold'><button className='mt-20 text-2xl font-bold bg-black text-white rounded-xl px-6 py-3 shadow-2xl'>List Items to Sell</button></Link>
        </div>
        }
        {
          !isListed &&
          <div className='text-center'>
            <Link href='/updateItems'><button className='mt-20 text-2xl font-bold bg-black text-white rounded-xl px-6 py-3 shadow-2xl'>Update & Check Items</button></Link>
        </div>

        }
        </div>
    </div>
  )
}

export default Producer_home