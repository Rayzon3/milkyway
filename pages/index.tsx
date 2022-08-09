import type { NextPage } from 'next'
import {useState, useEffect , useRef} from 'react'
import logo from '../images/LOGOO..jpg'
import milky from '../images/logo1.jpeg'
import milk_cookie from '../images/milk_cookie.png' 
import Script from 'next/script'
import CELLS from 'vanta/dist/vanta.cells.min'
import * as THREE from "three"

const Home: NextPage = () => {
  
  return (
    <div className="bg-[#78dbf3]">
    

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      <Script src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js'></Script>
      <nav className='flex space-x-4 justify-between shadow-xl px-4 items-center py-2  bg-[#78dbf3]'>
        {/* <img src={logo.src} className='h-8 ml-8 rounded-full' ></img>  */}
        <img src={milky.src} className='h-24'></img>
        <div className='pr-5'>
        
        </div>
      </nav>
      <div>
      <div  className='flex items-center justify-between py-20  px-28'>
        <div>
          <h1 className='text-9xl  font-Poppins text-white'>MilkyWay</h1>
          <p className='text-4xl mt-14 text-white '>Pouring a glass of nutrition into your life</p>
          
        </div>
        <div >
        <img src={milk_cookie.src} className='h-[30rem] mr-0'></img>
        </div>
      </div>
      <div className='text-center justify-evenly  space-x-8'>
      <button className='text-4xl text-white bg-orange-500 px-6 py-6 rounded-lg'>Login</button>
      <button className='text-4xl text-white bg-orange-500 px-6 py-6 rounded-lg'>Register</button>
      </div>
      <h1>About us</h1>
      </div>
    </div>
  )
}

export default Home
