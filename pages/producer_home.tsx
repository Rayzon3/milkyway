import {useState, useEffect} from 'react'


const Producer_home = () => {
    const [name, setName] = useState('')
    useEffect(() =>{
        setName(localStorage.getItem('name'))
      },[])
     
    
  return (
    <div className=''>
        <div className='flex px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-4xl'>MilkyWay</h1>
        <button>Sign out</button>
        </div>
        <div>
        <h1 className='text-center my-36 text-7xl  font-bold'>Hi, {name}</h1>
        <div className='grid grid-cols-3 gap-10 mx-32 text-center'>
            <div className='border-2 rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>New Orders</h1>
                <p className='text-xl'>Pick Up an order from the customer</p>
            </div>
            <div className='border-2 rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>Live Orders</h1>
                <p className='text-xl'>Track the status of your current orders</p>
            </div>
            <div className='border-2 rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>History</h1>
                <p className='text-xl'>Checkout your order history</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Producer_home