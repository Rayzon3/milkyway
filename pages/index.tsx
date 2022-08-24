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
import team from '../images/team.jpeg'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from "react";
import AppContext from "../AppContext";
const qoutes = [
  'Drinking whole milk over low-fat milk helps you avoid gaining weight.',
  'Milk is a great post-workout recovery drink.',
  'Milk provides exceptional hydration.',
  'Milk is the official state beverage of 21 states.',
  'Milk is one of the most nutritionally-dense foods on the planet.',
  'Almost all milk produced today comes from family farms.'
]





const Home: NextPage = () => {

  const value = useContext(AppContext);
  let { languageSelected } = value.state;
  let {milkyway, slogan, login, signup, about, byline,p1,p2,p3,rb, rs, close, lb, ls}  = value.state.languages;
  const [active, setIsActive] = useState(false)
  const [loginActive, setLoginActive] = useState(false)
  var index =0;

  index = Math.floor(Math.random()*6)

  console.log(languageSelected)

  
  return (
    <div className="">
      <div></div>
      <AnimatePresence>
      {
        active &&
      <motion.div className={'fixed mx-auto lg:left-44 w-3/4 rounded-xl top-0 bottom-0 right-0 lg:bottom-auto lg:right-auto left-0  m-auto lg:top-32 h-1/2 z-10 lg:h-2/3 my-auto bg-white backdrop-filter backdrop-blur-lg'}
      initial={{y:400, opacity:0}}
      animate = {{y:0,opacity:1}}
      exit={{y:-400, opacity:0}}
      >
        <div className='lg:grid lg:grid-cols-2  text-white'>
          <Link href='/userRegister'>
          <div className='bg-red-500 lg:pb-28 cursor-pointer'>
            <img src={buyer.src} className='mx-auto lg:h-80 pt-8  hover:scale-110 transition-all  hidden lg:block'></img>
            <h1 className='lg:mt-8 text-center py-20 lg:py-0 text-4xl font-Poppins hover:scale-110 transition-all'>{rb}</h1>
          </div>
          </Link>
          <Link href='/providerRegister'>
          <div className='bg-emerald-500 cursor-pointer' >
            <img src={seller.src} className='mx-auto h-80 pt-8 hover:scale-110 hidden lg:block transition-all'></img>
            <h1 className='lg:mt-8 text-center py-20 lg:py-0 text-4xl font-Poppins  hover:scale-110 transition-all'>{rs}</h1>
          </div>
          </Link>
        </div>
        <div className='text-center -mt-20 z-20'>
          <button className='bg-white text-blue-600 px-8 text-xl z-30 font-semibold rounded-xl hover:scale-110 hover:-translate-y-1 transition py-3 ' onClick={()=>{setIsActive(false)}}>{close}</button>
        </div>
      </motion.div>
      }
      </AnimatePresence>

      <AnimatePresence>
      {
        loginActive &&
      <motion.div className={'fixed mx-auto lg:left-44 w-3/4 rounded-xl top-0 bottom-0 right-0 lg:bottom-auto lg:right-auto left-0  m-auto lg:top-32 h-1/2 z-10 lg:h-2/3 my-auto bg-white backdrop-filter backdrop-blur-lg'}
      initial={{y:400, opacity:0}}
      animate = {{y:0,opacity:1}}
      exit={{y:-400, opacity:0}}
      >
        <div className='lg:grid lg:grid-cols-2  text-white'>
          <Link href='/userLogin'>
          <div className='bg-red-500 lg:pb-28 cursor-pointer'>
            <img src={buyer.src} className='mx-auto lg:h-80 pt-8  hover:scale-110 transition-all  hidden lg:block'></img>
            <h1 className='lg:mt-8 text-center py-20 lg:py-0 text-4xl font-Poppins hover:scale-110 transition-all'>{lb}</h1>
          </div>
          </Link>
          <Link href='/providerLogin'>
          <div className='bg-emerald-500 cursor-pointer' >
            <img src={seller.src} className='mx-auto h-80 pt-8 hover:scale-110 hidden lg:block transition-all'></img>
            <h1 className='lg:mt-8 text-center py-20 lg:py-0 text-4xl font-Poppins  hover:scale-110 transition-all'>{ls}</h1>
          </div>
          </Link>
        </div>
        <div className='text-center -mt-20 z-20'>
          <button className='bg-white text-blue-600 px-8 text-xl z-30 font-semibold rounded-xl hover:scale-110 hover:-translate-y-1 transition py-3 ' onClick={()=>{setLoginActive(false)}}>{close}</button>
        </div>
      </motion.div>
      }
      </AnimatePresence>
      <div  className='lg:flex hidden items-center'>

        <h1 suppressHydrationWarning className='fixed border-2 bottom-4 right-32 rounded-xl p-4 bg-white w-1/5'>{qoutes[index]}</h1>
        <img src={cow.src} className='fixed bottom-0 right-8 h-24'></img>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      <Script src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js'></Script>
    
        <div className="relative bg-fixed">
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
          className="bg-fixed"
        >
          <source src='./milk_videos.webm' type="video/mp4" />
        </video>
        <div className='text-right'>
        <select
          className="bg-transparent rounded-lg text-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 mr-6"
          name="class"
          required
          value={languageSelected}
          onChange = {(e)=>{value.setLanguageSelected(e.target.value)}}
          >
                <option value="en">Language</option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
        </div>
        <div  className='lg:flex items-center justify-between  pb-10  lg:px-28'>
        <div className='order-last'>
        <img src={milk_cookie.src} className='h-[30rem] mr-0'></img>
        </div>
        <div>
          <h1 className='lg:text-9xl text-6xl lg:text-left text-center   font-Poppins text-[#a92912]'>{milkyway}</h1>
          <p className='text-4xl lg:text-left text-center mt-14 text-[#996bd3] font-Poppins '>{slogan}</p>          
        </div>
      </div>
      <div className='text-center pb-8 justify-evenly  space-x-2'>
     <button className='text-3xl text-white bg-orange-500 px-6 py-3 rounded-lg' onClick={()=>{setLoginActive(true)}}>{login}</button>
      <button className='text-3xl text-white bg-orange-500 px-6 py-3 rounded-lg' onClick={()=>{setIsActive(true)}}>{signup}</button>
      </div>
      <p className='pb-10'><AiOutlineArrowDown className='text-center animate-bounce text-4xl font-bold text   mx-auto'></AiOutlineArrowDown></p>
      </div>
      <div className='pb-8'>
        <h1 className='text-center text-4xl lg:text-6xl my-16 font-bold'>{about}</h1>
        <div className='lg:grid lg:grid-cols-2'>
          <div>
            <img src={team.src} className='lg:mx-auto h-[20rem] lg:h-[29rem] rounded-xl'></img>
          </div>
          <div>
            <h1 className='text-center text-3xl lg:text-4xl mx-3 my-5 font-semibold mt-10'>" {byline} "</h1>
            <p className='text-xl leading-8 mx-4'>{p1} 
              <br></br>{p2} 
              <br></br>{p3} 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
