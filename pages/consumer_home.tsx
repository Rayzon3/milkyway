import React , {useEffect, useState} from 'react'
import { Map, Draggable, Marker, Overlay } from "pigeon-maps"
import pin from '../images/pin.png';
import milk_pin from '../images/milk_bottle.png';
import milk from '../images/milk.png';
import curd from '../images/curd.png';
import paneer from '../images/panner.png';
import lassi from '../images/lassi.png';
import ghee from '../images/ghee.png';
import {AiFillCloseCircle} from 'react-icons/ai'
import Link from 'next/link';
import axios from 'axios';
import {motion, AnimatePresence} from 'framer-motion'
import { useRouter } from "next/router"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'pH levels',
    },
  },
  maintainAspectRatio: false 
};



const labels = ['28th August', '29th August', '30th August', '31st August', '1st September', '2nd September', '3rd September'];

const data2 = {
  labels,
  datasets: [
    {
      label: 'Rates on different days',
      data: [70,40,55,29,32,47, 80],
      borderColor: '#5fc5fb',
      fill:true,
      backgroundColor: '#5fc5fb',
    },
    {
      label:'pH levels on different days',
      data:[6.7,6,6.5,6.6,7,7.7, 7.1],
      borderColor :'#DE3163',
      fill:true,
      backgroundColor: '#DE3163',
    },
    {
      label:'Temperature (°C)',
      data:[27.3,25.32,21.32,28.21,28.2,25,24],
      borderColor :'#800080',
      fill:true,
      backgroundColor: '#800080',
    }
  ],
};


const Home = () => {

  const router = useRouter();
  const [latitude ,setLatitude] = useState(null)
  const [longitude ,setLongitude] = useState(null)
  const [open, setOpen] = useState(false)
  const [pname, setPname] = useState('')
  const [anchor, setAnchor] = useState([])
  const [setDemo] = useState([])
  const [b1] = useState(false)
  const [b2] = useState(false)
  const [b3] = useState(false)
  const [b4] = useState(false)
  const [b5] = useState(false)
  const [order, setOrder] = useState([])
  const [address, setAddress] = useState('')
  const [setLink] = useState('')
  const [data, setData] = useState([])
  const [logged, setLogged] = useState(false)
  const [pid, setPid] = useState('')
  const [items, setItems] = useState([])
  const [prices, setPrices] = useState([])
  const [collect, setCollect] = useState([])
  const [uid] = useState('')
  const [num, setNum] = useState('')
  const [uname, setUname] = useState('')

  const handleLogout = () => {
      axios.get('http://localhost:5000/api/auth/logout',
      {
        withCredentials:true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((res)=>{
        router.push('/')
      })
      .catch((err)=>{console.log(err)})
    
  }

  const checkout = () => {
      axios.put('http://localhost:5000/api/orders/coords',{
        userID:uid,
        lat:latitude,
        long:longitude,
      },{
        withCredentials:true,
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
  }

  const getItems = (providers) => {
    setOpen(true)
    setPname(providers.name)
    setPid(providers.id)
    setAddress(providers.address)
    setNum(providers.mobileNum)
  
    axios.post('http://localhost:5000/api/providerStock/getProviderItemsData',{
      providerID: providers.id
    })
    .then((response) =>{
      setItems(response.data.items)
      setPrices(response.data.prices)
      console.log(response.data)
    })
    .catch((err) =>{console.log(err)})
    const zip = (items, prices) => items.map((x, i) => [x, prices[i]]);
    setCollect(zip(items, prices))
    console.log(collect) 
  }
 
    



  useEffect(() =>{
    axios.get('http://localhost:5000/api/getProviders')
    .then((response) =>{
      setData(response.data)
    })
    .catch((error) => console.log(error))

  },[])
  
  useEffect(() =>{
    axios.get('http://localhost:5000/api/auth/me',{
      withCredentials:true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((m_response) =>{
      setPname(m_response.data.name)
      setLogged(true)
      console.log(num)
    })
    .catch((err) =>{
      console.log(err)
      setLogged(false)
    })
  },[])
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
    
    useEffect(() => setLink(`http://maps.google.co.uk/maps?q=${latitude},${longitude}`), [])
    useEffect(() =>{
        if ("geolocation" in navigator) {
            // console.log('Avaiable')
          }
          navigator.geolocation.watchPosition(function(position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            setAnchor([position.coords.latitude.toFixed(3), position.coords.longitude.toFixed(3)])
            setDemo([position.coords.latitude+1, position.coords.longitude-1])
            // setLink(`http://maps.google.co.uk/maps?q=${latitude},${longitude}`)
            
            // setAnchor(position.coords.longitude)
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
          });
        },[])
        console.log(anchor)
        console.log(order)
        console.log(open)
        const maps_url = `http://maps.google.co.uk/maps?q=${latitude},${longitude}`
  return (
    <div>
      <div>
        <AnimatePresence>
      {
        
        open &&
      <motion.div className={'lg:w-1/4 w-1/2 fixed rounded-xl bg-white z-20 right-0 h-full '}
      initial={{x:300, opacity:0}}
      animate={{x:0, opacity:1}}
      exit={{x:300,opacity:0}}
      >
        <p><AiFillCloseCircle className='mx-auto text-3xl mt-5' onClick={()=>{setOpen(false)}}></AiFillCloseCircle></p>
        
        <h1 className='text-center mt-6 text-2xl lg:text-3xl font-bold'>{pname}</h1>
        {/* <h1>{pid}</h1> */}
        <p className='mt-5 text-center  lg:text-left lg:ml-4 lg:text-lg'><span className='font-bold'>Contact No<br></br></span> {num}</p>
        <p className='mt-5 text-center lg:text-left lg:ml-4 lg:text-lg'><span className='font-bold'>Address<br></br></span> {address}</p>
        <div className='mx-4 '>
          {/* <div className='hidden lg:block'>
        <Map  animate={true} height={200}  center={[latitude,longitude]} defaultZoom={18} zoom={10} minZoom={1} maxZoom={1}>
        <Marker  anchor={[latitude,longitude]}>
        </Marker>
        </Map> 
          </div> */}
        <div className='h-80  mx-auto'>
          <Line options={options} data={data2}   />
        </div>  
        
        </div>
        {   

            collect.map((item) =>{
              if(item!=null){
                // console.log('Not null')
                return(
                    <div className='flex justify-between items-center lg:mx-8 mx-3 my-2 '>
                        <h1 className='text-xl font-bold'>{item[0]}</h1>
                        <h1 className='text-xl '><span className='text-red-500'>Price:</span> {item[1]}</h1>
                    </div>
                );
              }
              else{
                // console.log('null')
                return(
                  <h1>No data presented</h1>
                )
              }
            })
        }
        {/* 16.442008009456778, 80.62261605481285 */}
        <div className='  space-y-4 lg:space-y-0  lg:space-x-4 mx-3 text-center mt-8'>
          {/* <button className='bg-orange-500 shadow-2xl text-white px-3 py-2 rounded-lg '>Download Lab Report</button> */}
          {
            logged
            ?
          <Link href={{pathname:'/checkout',query:{items:items, prices:prices, pid:pid}}}><button className='text-center text-xl shadow-2xl hover:scale-110 hover:-translate-x-1 transition bg-[#5fc5fb] text-white px-3 py-2 rounded-lg' onClick={checkout}>Proceed further with this option</button></Link> 
          :
          <Link href={{pathname:'/userLogin'}}><button className='text-center shadow-2xl bg-orange-500 hover:scale-110 hover:-translate-x-1 transition text-white px-3 py-2 rounded-lg' onClick={checkout}>Log In to order</button></Link>                   
          }
        </div>

        
      </motion.div>
      }
        </AnimatePresence>
        <div className='flex backdrop-filter backdrop-blur-lg border-b-2 absolute z-10 w-full items-center justify-between'>
        <h1 className=' font-Poppins text-2xl lg:text-4xl mx-4 my-3'>MilkyWay</h1>
        <p className='hidden lg:block'>Do a double click over the bottles to see the stats</p>
        <div>
          {
            logged
            ?
              <div>
              <p className='lg:text-2xl text-xl mr-3 lg:mr-10'>Hi, {pname}</p>
              
              <button className='' onClick={handleLogout}>Log Out</button> 
              </div>
            :
              <Link href='/userLogin'><button className='bg-orange-500 mr-10 rounded-xl cursor-pointer py-3 px-6 text-white text-xl'>Log In</button></Link>
          }
          </div>

        </div>
        
    <div>
        <Map animate={true} height={1000} center={[latitude, longitude]} defaultZoom={18}>
        <Marker  anchor={[latitude, longitude]} >
        </Marker>
        {
          data.map((providers)=>{

            return(
          <Draggable offset={[60, 87]} onDragStart={()=>{
          // setOpen(true);
          // setPname(providers.name);
          // setPid(providers.id)
          // getItems();
          getItems(providers);   
          getItems(providers);       
        }} onDragMove={()=>{
          // setOpen(true);
          // setPname(providers.name);
          // setPid(providers.id)
          getItems(providers);
          getItems(providers);    
        }} anchor={[providers.lat, providers.long]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Draggable>

            );
          })
        }
        
        </Map>
    </div>
      
    </div>
    {/* <div className='rounded-2xl shadow-2xl bg-green-400  -mt-8 pb-8 absolute w-full text-white '>
        <h1 className='text-center py-8 text-black font-bold text-4xl'>What are you craving today?</h1>
        <div className='grid grid-cols-5 gap-8 px-10 '>
            <div className={b1?'bg-amber-600 rounded-2xl transition':'transition rounded-2xl'} onClick={()=>{setB1(!b1)}}>
                <img src={milk.src} className='mx-auto h-52'></img>
                <p className='text-center text-2xl font-Poppins'>Milk</p>
            </div>
            <div className={b2?'bg-amber-600 rounded-2xl transition':'transition rounded-2xl'} onClick={()=>{setB2(!b2)}}>
                <img src={curd.src} className='h-28 mt-12 mx-auto'></img>
                <p className='text-center text-2xl mt-10 font-Poppins'>Curd</p>
            </div>
            <div className={b3?'bg-amber-600 rounded-2xl transition':'transition rounded-2xl'} onClick={()=>{setB3(!b3)}}>
                <img src={paneer.src} className='h-48 mx-auto'></img>
                <p className='text-center text-2xl font-Poppins'>Paneer</p>
            </div>
            <div className={b4?'bg-amber-600 rounded-2xl transition':'transition rounded-2xl'} onClick={()=>{setB4(!b4)}}>
                <img src={lassi.src} className='mx-auto h-32 mt-8'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Lassi</p>
            </div>
            <div className={b5?'bg-amber-600 rounded-2xl transition':'transition rounded-2xl'} onClick={()=>{setB5(!b5)}}>
                <img src={ghee.src} className='h-32 mt-8 mx-auto'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Ghee</p>
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Home