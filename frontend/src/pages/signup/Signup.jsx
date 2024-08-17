import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import {Link} from "react-router-dom"
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setinputs] = useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

  const {loading, signup} =useSignup()

  const handleCheckboxChange = (gender) => {
    setinputs({...inputs,gender})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(inputs)
await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Sign Up
          <span className="text-blue-500"> Lets Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e)=> setinputs({...inputs, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e)=> setinputs({...inputs, userName: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e)=> setinputs({...inputs, password: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e)=> setinputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
           Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2"
            disabled ={loading}
            >
            {loading ? <span className="loading loading-spinner"></span>: "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


// STARTER CODE
// import GenderCheckbox from "./GenderCheckbox";

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300 ">
//           Sign Up
//           <span className="text-blue-500"> Lets Chat</span>
//         </h1>
//         <form action="">
//         <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter fullname"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderCheckbox/>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//            Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
