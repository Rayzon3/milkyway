import React from 'react'
import milk from '../images/milk.png';
import curd from '../images/curd.png';
import paneer from '../images/panner.png';
import lassi from '../images/lassi.png';
import ghee from '../images/ghee.png';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect, useRef } from 'react';
import AppContext from '../AppContext'
import dynamic from 'next/dynamic';
import axios from 'axios'
import Link from 'next/link';

const Checkout = () => {

    const router = useRouter();
    const data = router.query;
    console.log(data)
    const [items, setItems] = useState(data.items);
    const [prices, setPrices] = useState(data.prices);
    const [pnum, setPnum] = useState('');
    const [uid, setUid] = useState('');
    const [address, setAddress] = useState();
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('')
    const [pid, setPid] = useState(data.pid);
    const [quantity, setQuantity] = useState([]);
    const zip = (...rows) => [...rows[0]].map((_,c) => rows.map(row => row[c]))
    const [collect, setCollect] = useState(zip(items, prices, quantity ))
    console.log(items,prices, collect, quantity)
    const [vname, setVname] = useState('')

    var sum = 0;

    useEffect(() =>{
        axios.get('http://localhost:5000/api/auth/me',{
            withCredentials:true,
        })
        .then((response) => {
            setUid(response.data.id)
            console.log(response)
        })
        .catch((err) => {console.log(err)})
    },[])

    for(var i=0; i<prices.length; i++) {
        // prices[i] = parseInt(prices[i])
        sum+=parseInt(prices[i])
    }

    axios.post('http://localhost:5000/api/auth/providerPostMe',{
        providerID:data.pid
    })
    .then((response) => {
        console.log(response)
        setVname(response.data.name)
        setAddress(response.data.address)
        setPnum(response.data.mobileNum)
        setLat(response.data.lat)
        setLong(response.data.long)

    })
    .catch((err) => {console.log(err)})
    

    const postDetails = () =>{
        
        axios.post('http://localhost:5000/api/orders',{
            items:items, 
            prices:prices,
            providerID:pid,

            // userID:uid,
        },{
            withCredentials:true,
        })
        .then((response) => {console.log(response)})
        .catch((err) => {console.log(err)})

        axios.post('http://localhost:5000/api/providerStock/orderForProvider',{
            userID:uid,
            providerID:pid,
            items:items,
            prices:prices,
            quant:quantity,
            total:sum
        })
        .then((response) => {console.log(response)})
        .catch((err) => {console.log(err)})
    }
    

    // console.log(item)

    


//   useEffect(() =>{
//       setItems()
//       setPrices()
//       console.log(items, prices)
//     //   console.log(JSON.parse(localStorage.getItem('Items')))
//   },[items, prices])
  const value = useContext(AppContext);
  let { languageSelected } = value.state;
  let {milkyway, slogan, login, signup, about, byline,p1,p2,p3,rb, rs, close}  = value.state.languages;
  console.log(languageSelected)
  var maps_url = `http://maps.google.co.uk/maps?q=${lat},${long}`
  
  return (
    <div className='min-h-screen pb-20 bg-[#5fc5fb]'>
        <div>
            <h1 className='text-white font-Poppins text-3xl ml-10 py-3'>{milkyway}</h1>
        </div>
        <div className='bg-white rounded-xl shadow-2xl mb-20 space-y-8 mt-16 mx-3 lg:mx-40'>
            <h1 className='text-center text-4xl font-bold py-8'>Your Basket</h1>
            <div className=' items-center justify-end mx-2 lg:mx-8 shadow-xl rounded-xl'>
            {
            collect.map((item) =>{
                return(
                    <div className='flex justify-end items-center mx-3 lg:mx-8  my-5 px-3 py-5 rounded-xl '>
                        <h1 className='lg:text-3xl text-xl font-bold'>{item[0]}</h1>
                        <div className='mx-auto'>
                        <h1 className='text-center'>Quantity: 1kg</h1>    
                        {/* <input placeholder='Enter Quantity in Kgs' value={item[2]} onChange={(e)=>{setQuantity([...quantity,e.target.value])}}></input>
                        <button onClick={(e)=>{setQuantity([...quantity,e.target.value])}}></button> */}
                        </div>
                        <h1 className='lg:text-2xl  text-xl'><span className='text-red-500'>Price:</span> ₹{item[1]}/-</h1>
                    </div>
                );
            })
        }
            </div>
            <div className='text-right mr-8 text-xl mt-8 pb-8'>
                <p>Total: ₹{sum}/-</p>
            </div>
        </div>
        <div className='bg-white mx-3 lg:mx-40 rounded-xl px-8 py-8 shadow-2xl'>
            <h1 className='lg:text-3xl  font-bold text-center mb-8 '>Vendor Details</h1>
            <div className='flex justify-between'>    
            <p className='text-2xl font-bold'>{vname}</p>
            <div>
                <a href={maps_url} className='bg-blue-600 text-white px-6 py-3 hover:scale-110 hover:-translate-y-1 transition  rounded-xl text-xl'>Locate on Map</a>
            </div>
            </div>
            <p className='text-xl'><span className='font-bold'>Address :</span> {address}</p>
            <p className='text-xl'><span className='font-bold'>Contact :</span> {pnum}</p>
        </div>

        <div className='text-center mt-20'>
            <Link href={{pathname:'/orderSucces', query:{sum:sum}}}><button className='text-white bg-blue-600 py-2 px-5 text-2xl rounded-xl hover:scale-110 hover:-translate-y-1 transition' onClick={postDetails}>Proceed to Checkout </button></Link>
        </div>

    </div>
  )
}

export default dynamic(() => Promise.resolve(Checkout), { 
    ssr: false 
})