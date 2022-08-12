import React , {useEffect, useState} from 'react'
import { Map, Draggable, Marker } from "pigeon-maps"
import pin from '../images/pin.png';
import milk_pin from '../images/milk_cookie.png';
import milk from '../images/milk.png';
import curd from '../images/curd.png';
import paneer from '../images/panner.png';
import lassi from '../images/lassi.png';
import ghee from '../images/ghee.png';

const Home = () => {
    const [latitude ,setLatitude] = useState(null)
    const [longitude ,setLongitude] = useState(null)
    const [anchor, setAnchor] = useState([])
    const [demo, setDemo] = useState([])
    const [b1, setB1] = useState(false)
    const [b2, setB2] = useState(false)
    const [b3, setB3] = useState(false)
    const [b4, setB4] = useState(false)
    const [b5, setB5] = useState(false)
    const [order, setOrder] = useState([])

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
   
    
    useEffect(() =>{
        if ("geolocation" in navigator) {
            // console.log('Avaiable')
        }
        navigator.geolocation.watchPosition(function(position) {
            setAnchor([position.coords.latitude, position.coords.longitude])
            setDemo([position.coords.latitude+1, position.coords.longitude-1])
            
            // setAnchor(position.coords.longitude)
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
        });
    },[])
    // console.log(anchor)
    console.log(order)
  return (
    <div>
        <div className='flex absolute z-10 w-full items-center justify-between'>
        <h1 className=' font-Poppins text-4xl mx-4 my-3'>MilkyWay</h1>
        <p className='text-2xl mr-10'>Hi, Username</p>
        </div>
        
    <div>
        <Map animate={true} height={600} defaultCenter={[28.48023399258176,77.00982396076051]} defaultZoom={18}>
        <Marker  anchor={anchor} onDragEnd={setAnchor}>
        {/* <img src={pin.src} width={100} height={95} alt="Pigeon!" /> */}
        </Marker>
        <Draggable offset={[60, 87]} anchor={demo} >
        <img src={milk_pin.src} width={100} height={95} alt="Pigeon!" />
        </Draggable>

        </Map>
    </div>
    <div className='rounded-2xl shadow-2xl bg-green-400 -mt-8 pb-8 absolute w-full text-white '>
        <h1 className='text-center py-8 text-black font-bold text-4xl'>What are you craving today?</h1>
        <div className='grid grid-cols-5 gap-8 px-10 '>
            <div className={b1?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB1(!b1)}}>
                <img src={milk.src} className='mx-auto h-52'></img>
                <p className='text-center text-2xl font-Poppins'>Milk</p>
            </div>
            <div className={b2?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB2(!b2)}}>
                <img src={curd.src} className='h-28 mt-12 mx-auto'></img>
                <p className='text-center text-2xl mt-10 font-Poppins'>Curd</p>
            </div>
            <div className={b3?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB3(!b3)}}>
                <img src={paneer.src} className='h-48 mx-auto'></img>
                <p className='text-center text-2xl font-Poppins'>Paneer</p>
            </div>
            <div className={b4?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB4(!b4)}}>
                <img src={lassi.src} className='mx-auto h-32 mt-8'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Lassi</p>
            </div>
            <div className={b5?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB5(!b5)}}>
                <img src={ghee.src} className='h-32 mt-8 mx-auto'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Ghee</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home