import React, {  } from 'react'
import milk from '../images/milk.png';
import curd from '../images/curd.png';
import paneer from '../images/panner.png';
import lassi from '../images/lassi.png';
import ghee from '../images/ghee.png';
import {MdClose} from 'react-icons/md'
import { useState , useEffect } from 'react';
import {useRouter} from 'next/router'
import axios from 'axios'
const ItemsSold = () => {

  const router = useRouter();
    const [b1, setB1] = useState(true);
    const [b2, setB2] = useState(true);
    const [b3, setB3] = useState(true);
    const [b4, setB4] = useState(true);
    const [b5, setB5] = useState(true);
    const [order, setOrder] = useState([]);
    const [mprice, setMprice] = useState('');
    const [cprice, setCprice] = useState('');
    const [pprice, setPprice] = useState('');
    const [lprice, setLprice] = useState('');
    const [gprice, setGprice] = useState('');
    const [price, setPrice] = useState([])

    function moveArrayItemToNewIndex(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        while(arr.includes(undefined)){
            for (var i = 0; i < order.length; i++) {
                if (order[i] === undefined) {
                  order.splice(i,1)
            }
        }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; 
    };

    
    if(b1 && !order.includes('Milk')){
        setOrder([...order, 'Milk'])
      }
      else if(!b1 && order.includes('Milk')){
        for (var i = 0; i < order.length; i++) {
          if (order[i] === "Milk") {
            order.splice(i,1)
              }
            }
          }
          
          if(b2 && !order.includes('Curd')){
            setOrder([...order, 'Curd'])
          }
          else if(!b2 && order.includes('Curd')){
            for (var i = 0; i < order.length; i++) {
              if (order[i] === "Curd") {
                order.splice(i,1)
              }
            }
          }
          
          if(b3 && !order.includes('Paneer')){
            setOrder([...order, 'Paneer']);
          }
        else if(!b3 && order.includes('Paneer')){
          for (var i = 0; i < order.length; i++) {
            if (order[i] === "Paneer") {
              order.splice(i,1)
            }
          }
        }
        
        if(b4 && !order.includes('Lassi')){
          setOrder([...order, 'Lassi'])
        }
        else if(!b4 && order.includes('Lassi')){
          for (var i = 0; i < order.length; i++) {
            if (order[i] === "Lassi") {
              order.splice(i,1)
            }
          }
        }
        
        if(b5 && !order.includes('Ghee')){
          setOrder([...order, 'Ghee'])
       
        }
        else if(!b5 && order.includes('Ghee')){
          for (var i = 0; i < order.length; i++) {
            if (order[i] === "Ghee") {
              order.splice(i,1)
            }
          }
        }
        // console.log(order.indexOf('Ghee'))
        // console.log(order)

        useEffect(()=>{
            setPrice([])
        },[])
        const update = () => {
            if(order.indexOf('Milk')!=0 &&order.includes('Milk')) {
                setOrder(moveArrayItemToNewIndex(order,order.indexOf('Milk'),0))
            }
            if(order.indexOf('Curd')!=1){
                setOrder(moveArrayItemToNewIndex(order,order.indexOf('Curd'),1))
      
            }
            if(order.indexOf('Paneer')!=2){
                setOrder(moveArrayItemToNewIndex(order,order.indexOf('Paneer'),2))
          
            }
            if(order.indexOf('Lassi')!=3){
                setOrder(moveArrayItemToNewIndex(order,order.indexOf('Lassi'),3))
      
            }
            if(order.indexOf('Ghee')!=4){
                setOrder(moveArrayItemToNewIndex(order,order.indexOf('Ghee'),4))
            }
        }
        const save = () => {
            update();
            console.log(order)
            if(b1 && order.includes('Milk')){
                price.push(mprice)
            }
            if(b2 && order.includes('Curd')){
                price.push(cprice)
            }
            if(b3 && order.includes('Paneer')){
                price.push(pprice)
            }
            if(b4 && order.includes('Lassi')){
                price.push(lprice)
            }
            if(b5 && order.includes('Ghee')){
                price.push(gprice)
            }

            axios.post('http://localhost:5000/api/providerStock',{
              items: order,
              prices:price,
            },{
              withCredentials: true
            })
            .then((res)=>{
              router.push('/producer_home')
            })
            .catch((err)=>{console.log(err)})
        }
  return (
    <div>
        <div className='flex px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-4xl'>MilkyWay</h1>
        <button>Sign out</button>
        </div>
        <h1 className='text-center text-3xl font-bold my-8'>What items do you sell from the following?</h1>
        <div className='mx-auto'>
        <div className='grid grid-cols-5 mx-8 gap-8  mt-10'>
            {
                b1 &&
            <div className='rounded-xl p-4 shadow-2xl'>
                <div className='text-right'>
                <button onClick={()=>{setB1(false)}}>
                <MdClose className='text-4xl ml-auto  font-bold text-slate-400'></MdClose>
                </button>    
                </div>
                <img src={milk.src} className='h-[11rem] my-1 mx-auto'></img>
                <h1 className='text-center text-3xl font-bold'>Milk</h1>
                <p className='mt-3 text-xl text-center'>Price per litre:</p>
                <div className='mx-auto'>
                <input className='w-1/2 mx-auto block my-2 border outline-none rounded-lg border-blue-600 shadow-md shadow-blue-600 py-2 px-2'
                value={mprice}
                type='number'
                required
                onChange={(e)=>{setMprice(e.target.value);}}
                ></input>
                </div>
            </div>
            }
            {
                b2 &&
            <div className='rounded-xl p-4 shadow-2xl'>
                <div className='text-right'>
                <button onClick={()=>{setB2
                    (false)}}>
                <MdClose className='text-4xl ml-auto  font-bold text-slate-400'></MdClose>
                </button> 
                </div>
                <img src={curd.src} className='mx-auto h-36 my-5 '></img>
                <h1 className='text-center text-3xl font-bold '>Curd</h1>
                <p className='mt-3 text-xl text-center'>Price per kg:</p>
                <div className='mx-auto'>
                <input className='w-1/2 mx-auto block my-2 border outline-none rounded-lg border-blue-600 shadow-md shadow-blue-600 py-2 px-2'
                value={cprice}
                type='number'
                required
                onChange={(e)=>{setCprice(e.target.value);}}
                ></input>
                </div>
            </div>
            }
            {
                b3 &&
            <div className='rounded-xl p-4 shadow-2xl'>
                <div className='text-right'>
                <button onClick={()=>{setB3(false)}}>
                <MdClose className='text-4xl ml-auto  font-bold text-slate-400'></MdClose>
                </button> 
                </div>
                <img src={paneer.src} className='h-44 my-1 mx-auto'></img>
                <h1 className='text-center text-3xl font-bold'>Paneer</h1>
                <p className='mt-3 text-xl text-center'>Price per kg:</p>
                <div className='mx-auto'>
                <input className='w-1/2 mx-auto block my-2 border outline-none rounded-lg border-blue-600 shadow-md shadow-blue-600 py-2 px-2'
                value={pprice}
                type='number'
                required
                onChange={(e)=>{setPprice(e.target.value)}}
                ></input>
                </div>
            </div>
            }
            {
                b4 &&

            <div className='rounded-xl p-4 shadow-2xl'>
                <div className='text-right'>
                <button onClick={()=>{setB4(false)}}>
                <MdClose className='text-4xl ml-auto  font-bold text-slate-400'></MdClose>
                </button> 
                </div>
                <img src={lassi.src} className='h-40 my-3 mx-auto '></img>
                <h1 className='text-center text-3xl font-bold'>Lassi</h1>
                <p className='mt-3 text-xl text-center'>Price per litre:</p>
                <div className='mx-auto'>
                <input className='w-1/2 mx-auto block my-2 border outline-none rounded-lg border-blue-600 shadow-md shadow-blue-600 py-2 px-2'
                value={lprice}
                type='number'
                required
                onChange={(e)=>{setLprice(e.target.value)}}
                ></input>
                </div>
            </div>
            }
            {
                b5 &&
            <div className='rounded-xl p-4 shadow-2xl'>
                <div className='text-right'>
                <button onClick={()=>{setB5(false)}}>
                <MdClose className='text-4xl ml-auto  font-bold text-slate-400'></MdClose>
                </button> 
                </div>
                <img src={ghee.src} className='h-40 mx-auto my-3'></img>
                <h1 className='text-center text-3xl font-bold'>Ghee</h1>
                <p className='mt-3 text-xl text-center'>Price per kg:</p>
                <form className='mx-auto'>    
                <input className='w-1/2 mx-auto block my-2 border outline-none rounded-lg border-blue-600 shadow-md shadow-blue-600 py-2 px-2'
                type='number'
                onChange={(e)=>{setGprice(e.target.value)}}
                value={gprice}
                required={true}
                ></input>
                </form>
            </div>
            }
        </div>
        </div>
        <div className='flex justify-center mt-16 space-x-8'>
            {
                !b1 &&
            <button className='bg-black text-white font-bold px-6 py-3 text-xl rounded-xl' onClick={()=>(setB1(true))}>Add Milk</button>
            }
            {
                !b2 &&
            <button className='bg-black text-white font-bold px-6 py-3 text-xl rounded-xl' onClick={()=>(setB2(true))}>Add Curd</button>
            }
            {
                !b3 &&
            <button className='bg-black text-white font-bold px-6 py-3 text-xl rounded-xl' onClick={()=>(setB3(true))}>Add Paneer</button>
            }
            {
                !b4 &&
            <button className='bg-black text-white font-bold px-6 py-3 text-xl rounded-xl' onClick={()=>(setB4(true))}>Add Lassi</button>
            }
            {
                !b5 &&
            <button className='bg-black text-white font-bold px-6 py-3 text-xl rounded-xl' onClick={()=>(setB5(true))}>Add Ghee</button>
            }
        </div>
        <div className='text-center'>
            <button className='mt-8 font-bold bg-black text-white text-xl rounded-xl px-6 py-3' onClick={save}>Save<br></br>(Double Click to Save your Order)</button>
        </div>
    </div>
  )
}

export default ItemsSold