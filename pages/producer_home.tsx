import {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {useRouter} from 'next/router'
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


const labels1 = ['70', '68', '63', '65', '69', '80', '75'];

export const data1 = {
  labels,
  datasets: [
    {
      label: 'pH Levels',
      data: [6.5,6.4,6.9,6,7,6.5,6.6],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const data2 = {
  labels,
  datasets: [
    {
      label: 'Rates on different days',
      data: [70,40,55,29,32,47, 80],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const data3 = {
  labels1,
  datasets: [
    {
      label: 'pH Levels',
      data: [6.5,6.4,6.9,6,7,6.5,6.6],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
const Producer_home = () => {
  const router = useRouter()
    const [name, setName] = useState('')
    const [isListed, setisListed] = useState(false)
    const [pid, setPid] = useState('')
    useEffect(() =>{
        axios.get('http://localhost:5000/api/auth/providerMe',{
          withCredentials:true,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((m_response) =>{
          console.log(m_response)
          setName(m_response.data.name)
          setPid(m_response.data.id)
        })
        .catch((err) =>{
          console.log(err)
        })
      },[])

      const handleSignout = () => {
    
            axios.get('http://localhost:5000/api/auth/logoutProvider',{
                withCredentials: true
            })
            router.push('/')
      }

     
        axios.post('http://localhost:5000/api/providerStock/getProviderItemsData',{
          providerID:pid
        })
        .then((response) =>{
          // console.log(response)
          if(response.data === null){
            setisListed(true)
          }
          else{
            setisListed(false)
          }
        })
        .catch((err) =>{
          setisListed(false)
        })
    
  return (
    <div className=''>
      <div className='flex px-3 lg:px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-2xl lg:text-4xl'>MilkyWay</h1>
        <button className='text-xl font-white bg-black text-white px-6 py-3 rounded-xl hover:scale-110 hover:-translate-x-1 transition-all'>Sign out</button>
        </div>
        <div>
        <h1 className='text-center my-36 text-5xl lg:text-7xl mx-3 font-bold'>Hi, {name}</h1>
        <div className='lg:grid lg:grid-cols-3 gap-10 mx-3 space-y-4 lg:space-y-0 lg:mx-32 text-center'>
            <Link href='/newOrders'>
            <div className='border-2 hover:scale-110 hover:-translate-x-1 transition  cursor-pointer rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>New Orders</h1>
                <p className='text-xl'>Pick Up an order from the customer</p>
            </div>
            </Link>
            <Link href='/liveOrders'>
            <div className='border-2 hover:scale-110 hover:-translate-x-1 transition cursor-pointer rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>Live Orders</h1>
                <p className='text-xl'>Track the status of your current orders</p>
            </div>
            </Link>
            <Link href='/producerHistory'>
            <div className='border-2 hover:scale-110 hover:-translate-x-1 transition cursor-pointer rounded-2xl shadow-2xl px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>History</h1>
                <p className='text-xl'>Checkout your order history</p>
            </div>
            </Link>

        </div>
        {
          isListed &&
        <div className='text-center'>
            <Link href='/itemsSold'><button className='mt-20 text-2xl hover:scale-110 hover:-translate-x-1 transition font-bold bg-black text-white rounded-xl px-6 py-3 shadow-2xl'>List Items to Sell</button></Link>
        </div>
        }
        {
          !isListed &&
          <div className='text-center'>
            <Link href='/updateItems'><button className='mt-20 text-2xl font-bold bg-black text-white rounded-xl px-6 py-3 shadow-2xl'>Update & Check Items</button></Link>
        </div>

        }
        </div>

        <div>
          <h1 className='text-3xl font-bold text-center my-12'>Your Previous pH records and prices</h1>
          <div className='h-60  lg:w-1/2 mx-auto'>
          <Line options={options} data={data1}   />
          </div>
          <div className='h-60 lg:w-1/2 mx-auto'>
          <Line options={options} data={data2}   />
          </div>
          {/* <div className='h-60 w-1/2 mx-auto'>
          <Line options={options} data={data3}   />
          </div> */}

        </div>
    </div>
  )
}

export default Producer_home