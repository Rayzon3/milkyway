import React, {useState, useEffect} from 'react'
import axios from 'axios'

const producerHistory = () => {
    const[name, setName] = useState('')
    const [uid, setUid] = useState('');
    const [orders, setOrders] = useState([])
    const [user, setUser] = useState([])
    const [sum, setSum] = useState(0)
    const zip = (items, prices) => items.map((x, i) => [x, prices[i]]);
    // console.log(zip(user, orders))

    const mix = zip(user, orders)
    console.log(mix)
    
    // const [uid, setUid] = useState('')
    // const [username, setUsername] = useState([])

    let promises = []
    // Promise.all(orders.map(u => {
    // })).then((response)=>{console.log(response)})
    // .catch((error)=>{console.log(error)})
    
    useEffect(() =>{
        axios.get('http://localhost:5000/api/providerStock/getOrderHistory',{
            withCredentials: true
        })
        .then((response)=>{
            console.log(response.data);
            setOrders(response.data)
        })
        .catch((error)=>{console.log(error)})
    },[])
    
    useEffect(() =>{
        for(var i=0; i<orders.length; i++){
            promises.push(axios.post('http://localhost:5000/api/auth/postMe',{
                uid: orders[i].userID
            }))
            // .then((response)=>{
            // setName(response.data.name)
            // console.log(name)
            // })
            // .catch((error)=>{console.log(error)})
            
        }
    
        Promise.all(promises)
      .then(responses => {
        setUser(responses)
      });
    },[orders])

    const accept = (order) =>{
        console.log(order[1].id)
        axios.put('http://localhost:5000/api/providerStock/putOrderInHistory',{
            orderID:order[1].id
        },{
            withCredentials: true
        })
        .then(response =>{console.log(response)})
        .catch((error)=>{console.log(error)})

        window.location.href=window.location.href

    }

    const decline = ()=>{

    }

    console.log(user)
    console.log(orders)

    
  return (
    <div>
        <div className='flex px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-4xl'>MilkyWay</h1>
        <button>Sign out</button>
        </div>
        <h1 className='text-center mt-8 text-3xl font-bold'>These are recent orders you have completed:</h1>
        <div>
            {
                mix.map((order) =>{
                    var maps_url = `http://maps.google.co.uk/maps?q=${order[0].lat},${order[0].long}`
                    return(
                        <div className='mt-10'>
                            <div className= 'mx-3 lg:mx-20 border shadow-xl p-4 rounded-xl '>
                                <div className='flex justify-between'>
                                <div>
                                <h1 className='lg:text-2xl text-xl font-bold'>Name:</h1>
                                <h1 className='font-bold text-2xl lg:text-3xl'>{order[0].data.name}</h1>
                                </div>   
                                </div>
                                <div className='lg:flex justify-between'>
                                <div className=''>
                                <h1 className='lg:text-2xl text-xl font-bold'>Items:</h1>
                                <h1 className='lg:flex text-xl lg:text-2xl  '>{order[1].items.map((item)=>{return<h1 className=''>{item},</h1>})}</h1>
                                </div>
                                <div>
                                <div>
                                <h1 className='lg:text-2xl text-xl font-bold'>Address:</h1>
                                <h1 className='lg:text-2xl text-xl'>{order[0].data.address}</h1>
                                </div>
                                <div className='mr-32'>
                                <h1 className='lg:text-2xl text-xl  font-bold'>Mobile Number:</h1>
                                <h1 className='lg:text-2xl text-xl'>{order[0].data.mobileNum}</h1>
                                </div>   

                                </div>
                                </div>
                                <h1 className='lg:text-2xl text-xl pb-6 font-bold'>Total: ₹ {order[1].total} /-</h1>
                                <div className='text-center'>
                                <a href={maps_url} className='text-xl bg-orange-500 text-white px-6 py-3 rounded-xl mt-6'>Locate on Maps</a>
                                </div>
                                <div className='flex mt-4 justify-around'>
                                {/* <button className='bg-green-500 text-xl text-white px-6 rounded-xl py-3 mt-8'  onClick={()=>accept(order)}>Mark as Delivered</button> */}
                                {/* <button className='bg-red-500 text-xl text-white px-6 rounded-xl py-3' onClick={decline}>Decline</button> */}
                                </div>
                            </div>
                            
                        </div>
                    )
                })

            }
        </div>
    </div>
  )
}

export default producerHistory