import React from 'react'
import axios from 'axios'

const ApiCall = () => {
    axios.get('https://api.thingspeak.com/channels/1836237/status.json')
    .then((response)=>console.log(response))
    .catch((err)=>console.log(err))
  return (
    <div>
        <iframe width="450" height="260"  src="https://thingspeak.com/channels/1836237/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&timescale=10&title=Temperature+C&type=line"></iframe>

    </div>
  )
}

export default ApiCall