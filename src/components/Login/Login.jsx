
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './../../firebase/firebase.init';
const Login = () =>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleUserLogin = ()=>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(error => {
            console.log(error.message);
        })
    }
  
    return (
      <div className="mx-auto w-3/4 space-y-6 h-[75vh]">
        <h2 className="text-6xl mt-4 ">To get access please provide authorized credentials</h2>
        <button
          onClick={handleUserLogin}
          type="button"
          className="bg-green-600 px-8 py-2 outline-none border-none rounded-sm text-white hover:bg-gray-300 hover:text-black"
        >
          Google Login
        </button>
      </div>
    );
}
export default Login;