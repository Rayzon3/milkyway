import type { NextPage } from 'next'
import {useState, useEffect , useRef} from 'react'
import Link from 'next/link'
import logo from '../images/LOGOO..jpg'
import milky from '../images/logo1.jpeg'
import milk_cookie from '../images/milk_cookie.png' 
import Script from 'next/script'
import cow from '../images/cow.png'
import {AiOutlineArrowDown} from 'react-icons/ai'
import buyer from '../images/buyer.png'
import seller from '../images/seller.png'
const qoutes = [
  'Drinking whole milk over low-fat milk helps you avoid gaining weight.',
  'Milk is a great post-workout recovery drink.',
  'Milk provides exceptional hydration.',
  'Milk is the official state beverage of 21 states.',
  'Milk is one of the most nutritionally-dense foods on the planet.',
  'Almost all milk produced today comes from family farms.'
]


const Home: NextPage = () => {

  const [active, setIsActive] = useState(false)
  var index =0;

  index = Math.floor(Math.random()*6)
  
  return (
    <div className="">
      <div className={active?'fixed mx-auto left-44 w-3/4 rounded-xl  top-32 z-10 h-2/3 my-auto bg-white backdrop-blur-lg':'hidden'}>
        <div className='grid grid-cols-2  text-white'>
          <Link href='/userRegister'>
          <div className='bg-red-500 cursor-pointer'>
            <img src={buyer.src} className='mx-auto h-80 pt-8 hover:scale-110 transition-all'></img>
            <h1 className='mt-8 text-center text-4xl font-Poppins hover:scale-110 transition-all'>Register as a Buyer</h1>
          </div>
          </Link>
          <Link href='/providerRegister'>
          <div className='bg-emerald-500 cursor-pointer' >
            <img src={seller.src} className='mx-auto h-80 pt-8 hover:scale-110 transition-all'></img>
            <h1 className='mt-8 text-center text-4xl font-Poppins pb-28 hover:scale-110 transition-all'>Register as a Seller</h1>
          </div>
          </Link>
        </div>
        <div className='text-center -mt-20 z-20'>
          <button className='bg-white text-blue-600 text-xl z-20 font-semibold rounded-xl hover:scale-110 hover:-translate-y-1 transition py-3 px-5' onClick={()=>{setIsActive(false)}}>Close</button>
        </div>
      </div>

      <div className='flex items-center '>

        <h1 suppressHydrationWarning className='fixed bottom-4 right-32 rounded-xl p-4 bg-white w-1/5'>{qoutes[index]}</h1>
        <img src={cow.src} className='fixed bottom-0 right-8 h-24'></img>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      <Script src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js'></Script>
    
        <div className="relative">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src='./milk_videos.webm' type="video/mp4" />
        </video>
        <div  className='flex items-center justify-between pt-20 pb-10  px-28'>
        <div>
          <h1 className='text-9xl  font-Poppins text-[#a92912]'>MilkyWay</h1>
          <p className='text-4xl mt-14 text-[#996bd3] font-Poppins '>Pouring a glass of nutrition into your life</p>          
        </div>
        <div >
        <img src={milk_cookie.src} className='h-[30rem] mr-0'></img>
        </div>
      </div>
      <div className='text-center pb-8 justify-evenly  space-x-2'>
      <button className='text-3xl text-white bg-orange-500 px-6 py-3 rounded-lg'>Login</button>
      <button className='text-3xl text-white bg-orange-500 px-6 py-3 rounded-lg' onClick={()=>{setIsActive(true)}}>Register</button>
      </div>
      <p className='pb-10'><AiOutlineArrowDown className='text-center animate-bounce text-4xl font-bold text   mx-auto'></AiOutlineArrowDown></p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Home
