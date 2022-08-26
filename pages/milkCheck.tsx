import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountUp from 'react-countup';


const MilkCheck = () => {

    const [ph, setPH] = useState(0)
    const [res, setRes] = useState(false)
    const [comp, setComp] = useState(true)
    // const [arph, setArph] = useState([])
    const [price, setPrice] = useState([])
    const [date, setDate] = useState([])
    const [temp, setTemp] = useState(0.0)
    const [odor, setOdor] = useState(0)
    const [tdate, setTdate] = useState('')

    var now = new Date();
    var today = String(now)
    // console.log(now.toLocaleDateString());

    setTimeout(() => {
        setComp(false)
    },15000)

    var arph = []

    
    axios.get('https://api.thingspeak.com/channels/1836237/feeds.json?results=2')
    .then(response => {
        setPH(response.data.feeds[1].field4)
        setTemp(response.data.feeds[1].field1)
        if(response.data.feeds[1].field3>300){
            setOdor(1)
        }
        else(setOdor(0))
        console.log(response)
        console.log(response.data.feeds[1].field4)
        setRes(true)
    })
    .catch((error) => {console.log(error)})

    useEffect(() =>{
        axios.get('http://localhost:5000/api/graphDataProvider/getGraphData',{
            withCredentials: true
        })
        .then((response) => {
            arph = response.data[0].pH
            console.log(arph)
            setPrice(response.data[0].rate)
            setDate(response.data[0].date)
            console.log(response)
        })
        .catch(err => {console.log(err)})
    },[])

    var rate = 0
    if(ph<=6.9 && ph>=6.5){
        rate = 70
    }
    else if((ph<=6.5 && ph>=5.9) ||(ph>=6.9 && ph<=8.0) ){
        rate = 65
    }
    else {
        rate = 50
    }
    // var rate = Math.round(70*Math.E**(-((ph-6.5)**2)/(2*4)))
    console.log(rate)

    var strrate = rate.toString()

    console.log(arph)
    


    const handleSubmit = () => {
        arph.push(ph)
        console.log(arph)
    axios.post('http://localhost:5000/api/graphDataProvider/postGraphData',{
        pH:arph,
        dates:[...date, today],
        rates:[...price, strrate]
    },{
        withCredentials: true
    })
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)})
    }
    return (
        <div>
        <div className='flex px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-4xl'>MilkyWay</h1>
        <button>Sign out</button>
        </div>
        <h1 className='text-3xl font-bold text-center my-12'>Use your IoT device to set the milk rates for today</h1>
        {/* <h1 className='text-center text-2xl mx-3'>The maximum rate 70 is obtained is at a normal pH of 6.5 </h1> */}
        {
            comp &&
            <div>
                <h1 className='text-2xl font-bold text-center mt-8 '>Computing.....</h1>
            </div>
        }
        {
            res
            ?
            <div>
            <h1 className='text-6xl my-16 font-bold text-red-500 text-bold text-center'>pH : <CountUp end={ph} decimals={2} delay={15} duration={0.5}></CountUp>  </h1>
            <h1 className='text-6xl my-16 font-bold text-green-600 text-bold text-center'>Temperature : <CountUp end={temp} decimals={2} delay={15} duration={0.5}></CountUp> °C  </h1>
            <h1 className='text-6xl my-16  font-bold text-violet-600 text-bold text-center'>Presence of odour : <CountUp end={odor} delay={15} duration={0.5}></CountUp> </h1>
            <h1 className='text-6xl my-16  font-bold text-blue-500 text-bold text-center'>Price : ₹ <CountUp end={rate} delay={15} duration={0.5}></CountUp> /-</h1>
            <div className='text-center'>
            <button className='bg-black text-white text-3xl px-6 py-3 rounded-xl ' onClick={handleSubmit}>Save Rates</button>
            </div>
            </div>
            :
            <div>
                <h1 className='text-6xl text-bold text-center '>Dip the IoT Device in milk to see the results</h1>
            </div>
        }
    </div>
  )
}

export default MilkCheck