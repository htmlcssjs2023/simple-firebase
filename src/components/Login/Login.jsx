
const Login = () =>{
  
    return (
      <div className="mx-auto w-3/4 space-y-6">
        <h2 className="text-6xl mt-4 ">To gain access please provide authorized credentials</h2>
        <button
          type="button"
          className="bg-green-600 px-8 py-2 outline-none border-none rounded-sm text-white hover:bg-gray-300 hover:text-black"
        >
          Google Login
        </button>
      </div>
    );
}
export default Login;