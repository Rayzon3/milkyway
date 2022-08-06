const UserRegister = () => {
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
            />
            <input
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Mobile Number"
            />
            <input
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Email"
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
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Enter Password"
            />
            <input
              type="text"
              className="p-2 m-2 rounded-md border-gray-300 border-b-2 focus:outline-none focus:border-cyan-400"
              placeholder="Confirm Password"
            />
            <button className="rounded-md p-2 m-2 bg-blue-200 hover:bg-blue-300">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserRegister;
  