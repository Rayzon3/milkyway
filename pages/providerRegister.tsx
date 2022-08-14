import axios from 'axios';
import {useState} from 'react'


const ProviderRegister = () => {
  const [name ,setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/auth/registerProvider',{
      name:name,
      email:email,
      password:pass
    },{
      withCredentials: true
    })
    .then((res)=>{console.log(res)})
    .catch((err) => {console.log(err)})
    setName('')
    setEmail('')
    setPass('')

  }
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-cyan-100">
        <div className="flex flex-col bg-white items-center justify-center p-4 rounded-md">
          <h1 className="font-bold text-4xl text-blue-400">Provider Registeration</h1>
          <div className="p-4 flex flex-col w-96 relative">
            <input
              id="name"
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Name"
              required
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <input
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Mobile Number"
            />
            <input
              type="email"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Address Line 1"
            />
            <input
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Address Line 2"
            />
            <input
              type="password"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Password"
              required
              value={pass}
              onChange={(e)=>{setPass(e.target.value)}}
            />
            <input
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Confirm Password"
            />
            <button type='submit' onClick={handleSubmit} className="rounded-md p-2 m-2 bg-blue-200 hover:bg-blue-300">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProviderRegister;
  