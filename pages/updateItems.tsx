import axios from 'axios'
import React,{useEffect, useState} from 'react'

const UpdateItems = () => {

    const [items, setItems] = useState([])
    const [prices, setPrices] = useState([])
    // const [collect, setCollect] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/api/providerStock/getStock',{
          withCredentials: true
        })
        .then((response) =>{
          setItems(response.data.items)
          setPrices(response.data.prices)
          console.log(response.data)
        })
        .catch((err) =>{console.log(err)})
    },[])
    
    const zip = (items, prices) => items.map((x, i) => [x, prices[i]]);
    const collect = (zip(items, prices))
    console.log(collect)


  return (
    <div>
        <div className='flex px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-4xl'>MilkyWay</h1>
        <button>Sign out</button>
        </div>
        <h1 className='text-center text-3xl font-bold my-8'>These are the listed items:</h1>
        {
            collect.map((item) =>{
                return(
                    <div className='flex justify-between items-center mx-8 shadow-xl my-5 px-3 py-5 rounded-xl '>
                        <h1 className='text-3xl font-bold'>{item[0]}</h1>
                        <h1 className='text-2xl '><span className='text-red-500'>Price:</span> {item[1]}</h1>
                    </div>
                );
            })
        }

    </div>
  )
}

export default UpdateItems