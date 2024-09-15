const Login = () => {
  return (
    <>
    <div className=" bg-white flex flex-col justify-center items-center px-3 py-2 shadow-lg rounded-lg ">
          <input  className="border-b outline-none border-gray m-2 p-2 b" type="text" placeholder="Name" />
          <input className="border-b outline-none border-gray m-2 p-2 b" type="email" placeholder="Email" />
          <input className="border-b outline-none border-gray m-2 p-2 b" type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label className="p-1 cursor-pointer bg-sky-300 w-3/4 rounded-md text-center mt-3 hover:bg-gray-400 transition-colors text-white font-semibold" htmlFor="file">Upload File</label>
          <button className="bg-pink-600 rounded-xl text-white font-bold hover:bg-pink-500 px-4 hover:-translate-y-1 transition-all my-3 py-2">Register</button>
        </div>
    </>
  )
}

export default Login