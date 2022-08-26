import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { scaleQuantile } from 'd3-scale';
import { 
    ComposableMap, Geographies, Geography 
  } from 'react-simple-maps';
  
  const INDIA_TOPO_JSON = require('../india.topo.json');


  const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937]
  };
  
  const getHeatMapData = () => {
    return [
      { id: 'AP', state: 'Andhra Pradesh', value: 20 },
      { id: 'AR', state: 'Arunachal Pradesh', value: 20 },
      { id: 'AS', state: 'Assam', value: 20 },
      { id: 'BR', state: 'Bihar', value: 20 },
      { id: 'CT', state: 'Chhattisgarh', value: 20 },
      { id: 'GA', state: 'Goa', value: 21 },
      { id: 'GJ', state: 'Gujarat', value: 22 },
      { id: 'HR', state: 'Haryana', value: 20 },
      { id: 'HP', state: 'Himachal Pradesh', value: 24 },
      { id: 'JH', state: 'Jharkhand', value: 26 },
      { id: 'KA', state: 'Karnataka', value: 27 },
      { id: 'KL', state: 'Kerala', value: 20 },
      { id: 'MP', state: 'Madhya Pradesh', value: 20 },
      { id: 'MH', state: 'Maharashtra', value: 20 },
      { id: 'MN', state: 'Manipur', value: 20 },
      { id: 'ML', state: 'Meghalaya', value: 59 },
      { id: 'MZ', state: 'Mizoram', value: 20 },
      { id: 'NL', state: 'Nagaland', value: 59 },
      { id: 'OD', state: 'Odisha', value: 59 },
      { id: 'PB', state: 'Punjab', value: 20 },
      { id: 'RJ', state: 'Rajasthan', value: 20 },
      { id: 'SK', state: 'Sikkim', value: 20 },
      { id: 'TN', state: 'Tamil Nadu', value: 20 },
      { id: 'TG', state: 'Telangana', value: 20 },
      { id: 'TR', state: 'Tripura', value: 14 },
      { id: 'UK', state: 'Uttarakhand', value: 20 },
      { id: 'UP', state: 'Uttar Pradesh', value: 15 },
      { id: 'WB', state: 'West Bengal', value: 17 },
      { id: 'WB', state: 'West Bengal', value: 17 },
      { id: 'AN', state: 'Andaman and Nicobar Islands', value: 20 },
      { id: 'CH', state: 'Chandigarh', value: 20 },
      { id: 'DN', state: 'Dadra and Nagar Haveli', value: 19 },
      { id: 'DD', state: 'Daman and Diu', value: 20 },
      { id: 'DL', state: 'Delhi', value: 59 },
      { id: 'JK', state: 'Jammu and Kashmir', value: 25 },
      { id: 'LA', state: 'Ladakh', value: 20 },
      { id: 'LD', state: 'Lakshadweep', value: 20 },
      { id: 'PY', state: 'Puducherry', value: 20 },
      {id: 'TS', state: 'Telengana', value:0}
    ];
  };

  const data = getHeatMapData()

  const COLOR_RANGE = [
    '#2596be'
  ];

  const geographyStyle = {
    default: {
      outline: 'none',
    //   fill:'#00f'
    },
    hover: {
      fill: '#2596be',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none',
    }
}

  const DEFAULT_COLOR = '#C6C6C6';
  
  const AdminHome = () => {

    let len = 0;
    let sum = 0;
      
      const [number, setNumber] = useState(0)
      const [active, setActive] = useState(false)
      const [tooltipContent, setTooltipContent] = useState('');
      const [uinstate, setUinstate] = useState([])
      const [pinstate, setPinState] = useState([])
      
    useEffect(() =>{
        axios.get('http://localhost:5000/api/getProviders')
        .then((response) => {
            setNumber(response.data.length)
        })
        .catch((err) => {console.log(err)})

    },[])

    useEffect(() =>{
      axios.post('http://localhost:5000/api/adminData/state',{
                      state:tooltipContent
                    })
                    .then((response) => {
                      setPinState(response.data)
                      console.log(response.data)
                    })
                    .catch((error) => {console.log(error)})
      axios.post('http://localhost:5000/api/adminData/stateUser',{
                      state:tooltipContent
                    })
                    .then((response) => {
                      setUinstate(response.data)
                      len = (response.data.length)
                      console.log(len)    
                      console.log(sum)
                    })
                    .catch((error) => {console.log(error)})
    },[tooltipContent])

  return (
    <div>
        <div className='flex px-20 py-3 items-center justify-between'>
        <h1 className='font-Poppins text-4xl'>MilkyWay</h1>
        <button>Sign out</button>
        </div>

        <h1 className='text-center my-12 text-2xl lg:text-4xl font-semibold'>Number of active vendors all around India : {number}</h1>
        
        <div className='lg:grid lg:grid-cols-2'>
        <div>

       <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={300}
        height={220}
        data-tip=""
    >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map(geo => {
              const current = data.find(s => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={ DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={()=>{
                    setTooltipContent(current.state)
                    console.log(tooltipContent)
                    setActive(true)
                }}
                onMouseLeave={()=>{
                  setTooltipContent(current.state)
                  setActive(true)
              }}

                // hover twice on j&K in starting
                //   onMouseEnter={onMouseEnter(geo, current)}
                //   onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
    </ComposableMap> 
        </div>
        <div>
            { 
            !active?
            <div>
                <h1 className='text-center text-2xl p-4 rounded-xl bg-red-200 text-red-500 border-red-500 border-4 mt-20 mx-4 font-bold'>Click on a state to know more about it</h1>
            </div>
            :
            <div>
                <h1 className='text-center text-3xl font-bold '>{tooltipContent}</h1>
                <h1 className='text-center text-2xl font-bold text-red-500 my-8'>Number of Providers<br></br>{pinstate.length}</h1>
                <h1 className='text-center text-2xl font-bold text-red-500 my-8'>Number of Users<br></br>{uinstate.length}</h1>
                {/* <h1>Number of Users:</h1> */}
            </div>
            }

        </div>
        </div>

        <div>
          {
            !active?
            <div>
                <h1 className='text-center text-2xl p-4 rounded-xl bg-blue-100 text-blue-500 border-blue-500 border-4 mt-20 mx-32 mb-12 font-bold'>Click on a state to know get the list of all the providers in the state </h1>
            </div>
            :
            <div>
              <h1 className='text-center text-3xl font-bold '>Providers in {tooltipContent}</h1>
                {
                  pinstate.map((provider)=>{
                    return(
                      <div className='lg:mx-20 mx-3 p-4 shadow-2xl my-4 rounded-xl'>
                        <div className='flex justify-between'>
                        <div className=''>
                        <p className='text-xl font-semibold'>Name:</p>
                        <h1 className='text-2xl font-bold'>{provider.name}</h1>
                        </div>
                        <h1 className='text-xl'>Contact: {provider.mobileNum}</h1>  
                        </div>
                        <div>
                          <h1 className='text-xl'>Address:{provider.address}</h1>
                        </div>
                      </div>
                    );
                  })
                }
            </div>
          }
        </div>




    </div>
  )
}

export default AdminHome