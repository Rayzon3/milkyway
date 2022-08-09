import React , {useEffect, useState} from 'react'
import { Map, Draggable } from "pigeon-maps"
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
    
    useEffect(() =>{
        if ("geolocation" in navigator) {
            console.log('Avaiable')
        }
        navigator.geolocation.watchPosition(function(position) {
            setAnchor([position.coords.latitude, position.coords.longitude])
            setDemo([position.coords.latitude+1, position.coords.longitude-1])
            
            // setAnchor(position.coords.longitude)
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
        });
    },[])
    console.log(anchor)
  return (
    <div>
    <div>
        <Map animate={true} height={500} defaultCenter={[28.48023399258176,77.00982396076051]} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
        <img src={pin.src} width={100} height={95} alt="Pigeon!" />
        </Draggable>
        <Draggable offset={[60, 87]} anchor={demo} >
        <img src={milk_pin.src} width={100} height={95} alt="Pigeon!" />
        </Draggable>

        </Map>
    </div>
    <div className='rounded-2xl shadow-2xl bg-green-400 -mt-8 pb-8 absolute w-full text-white '>
        <h1 className='text-center py-8 font-bold text-4xl'>What are you craving today?</h1>
        <div className='grid grid-cols-5 gap-8 items-center'>
            <div>
                <img src={milk.src} className='mx-auto h-52'></img>
                <p className='text-center text-2xl font-Poppins'>Milk</p>
            </div>
            <div>
                <img src={curd.src} className='h-40  mx-auto'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Curd</p>
            </div>
            <div>
                <img src={paneer.src} className='h-48 mx-auto'></img>
                <p className='text-center text-2xl font-Poppins'>Paneer</p>
            </div>
            <div>
                <img src={lassi.src} className='mx-auto h-40'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Lassi</p>
            </div>
            <div>
                <img src={ghee.src} className='h-40 mx-auto'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Ghee</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home