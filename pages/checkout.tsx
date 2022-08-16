import React from 'react'
import milk from '../images/milk.png';
import curd from '../images/curd.png';
import paneer from '../images/panner.png';
import lassi from '../images/lassi.png';
import ghee from '../images/ghee.png';
import { useContext } from 'react';
import AppContext from '../AppContext'

const Checkout = () => {
  const value = useContext(AppContext);
  let { languageSelected } = value.state;
  let {milkyway, slogan, login, signup, about, byline,p1,p2,p3,rb, rs, close}  = value.state.languages;
  console.log(languageSelected)
  return (
    <div className='min-h-screen pb-20 bg-[#5fc5fb]'>
        <div>
            <h1 className='text-white font-Poppins text-3xl ml-10 py-3'>{milkyway}</h1>
        </div>
        <div className='bg-white rounded-xl shadow-2xl mb-20 space-y-8 mt-16 mx-40'>
            <h1 className='text-center text-4xl font-bold py-8  '>Your Basket</h1>
            <div className='flex items-center justify-between mx-8 shadow-xl rounded-xl'>
                <div className='flex items-center '>
                <img src={milk.src} className='h-40'></img>
                <h1 className='text-2xl text-slate-500 font-semibold'>Milk</h1>
                </div>
                <div className=''>
                    <h1 className='text-xl pb-1'>Quantity</h1>
                    <div className='flex items-center space-x-4'>
                    <input className='border border-blue-600 shadow-blue-600 shadow-md  rounded-lg px-2 py-1 outline-none w-1/2 '></input>
                    <h1>ml</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mr-8'><span className='text-red-600'>Price:</span> ₹260/-</h1>
                </div>
            </div>
            <div className='flex items-center justify-between shadow-xl rounded-xl py-6 mx-8'>
                <div className='flex items-center'>
                <img src={curd.src} className='h-20 ml-16'></img>
                <h1 className='text-2xl text-slate-500 ml-20 font-semibold'>Curd</h1>
                </div>
                <div className=''>
                    <h1 className='text-xl pb-1'>Quantity</h1>
                    <div className='flex items-center space-x-4'>
                    <input className=' border-blue-600 shadow-md   shadow-blue-600 rounded-lg px-2 py-1 outline-none w-1/2 border'></input>
                    <h1>ml</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mr-8'><span className='text-red-600'>Price:</span> ₹260/-</h1>
                </div>
            </div>
            <div className='flex items-center justify-between mx-8 shadow-xl rounded-xl'>
                <div className='flex items-center'>
                <img src={paneer.src} className='h-40 ml'></img>
                <h1 className='text-2xl text-slate-500 font-semibold ml-5'>Paneer</h1>
                </div>
                <div className=''>
                    <h1 className='text-xl pb-1'>Quantity</h1>
                    <div className='flex items-center space-x-4'>
                    <input className=' border-blue-600 shadow-md shadow-blue-600 rounded-lg px-2 py-1 outline-none w-1/2 border'></input>
                    <h1>ml</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mr-8'><span className='text-red-600'>Price:</span> ₹260/-</h1>
                </div>
            </div>
            <div className='flex items-center justify-between mx-8 shadow-xl py-8  rounded-xl'>
                <div className='flex items-center'>
                <img src={lassi.src} className='h-20 ml-12 '></img>
                <h1 className='text-2xl text-slate-500 ml-20 font-semibold '>Lassi</h1>
                </div>
                <div className=''>
                    <h1 className='text-xl pb-1'>Quantity</h1>
                    <div className='flex items-center space-x-4'>
                    <input className=' border-blue-600 shadow-md shadow-blue-600 rounded-lg px-2 py-1 outline-none w-1/2 border'></input>
                    <h1>ml</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mr-8'><span className='text-red-600'>Price:</span> ₹260/-</h1>
                </div>
            </div>
            <div className='flex items-center justify-between mt-4 mx-8 shadow-xl rounded-xl py-8'>
                <div className='flex items-center'>
                <img src={ghee.src} className='h-24 ml-5 '></img>
                <h1 className='text-2xl text-slate-500 font-semibold ml-10'>Ghee</h1>
                </div>
                <div className=''>
                    <h1 className='text-xl pb-1'>Quantity</h1>
                    <div className='flex items-center space-x-4'>
                    <input className=' border-blue-600 shadow-md shadow-blue-600 rounded-lg px-2 py-1 outline-none w-1/2 border'></input>
                    <h1>ml</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mr-8'><span className='text-red-600'>Price:</span> ₹260/-</h1>
                </div>
            </div>
            <div className='text-right mr-8 text-xl mt-8 pb-8'>
                <p>Total: ₹260/-</p>
            </div>
        </div>
        <div className='bg-white mx-40 rounded-xl px-8 py-8 shadow-2xl'>
            <h1 className='text-3xl font-bold text-center mb-8 '>Vendor Details</h1>
            <div className='flex justify-between'>    
            <p className='text-2xl font-bold'>Bhupesh Singhania</p>
            <div>
                <h1>Rating:</h1>
                <p> 69 Stars(stars add krdunga m yaha)</p>
            </div>
            </div>
            <p>Address: Chawl m rehta h bhadwa basically</p>
            <p>Contact: +91-6969696969</p>
        </div>

        <div className='text-center mt-20'>
            <button className='text-white bg-blue-600 py-2 px-5 text-2xl rounded-xl hover:scale-110 hover:-translate-y-1 transition'>Proceed to Checkout </button>
        </div>

    </div>
  )
}

export default Checkout