import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/loginimg.png';

const LoginPage = () => {
 const navigate = useNavigate();

 const handleSubmit = (e) => {
   e.preventDefault();
   
   const username = e.target.username.value;
   const password = e.target.password.value;

   if (username === 'rahma' && password === 'rahma') {
     navigate('/student');
   }
   if (username === 'mayar' && password === 'mayar') {
    navigate('/teacher');
  }
 };

 return (
   <div className="bg-gray-100 flex justify-center items-center h-screen">
     {/* Left: Image */}
     <div className=" hidden lg:block">
       <img
         src={img}
         alt="Placeholder Image"
         className="w-full md:w-2/3 lg:w-3/4 h-auto object-contain mx-auto"
       />
     </div>
     
     {/* Right: Login Form */}
     <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 mt-5">
       <h1 className="text-2xl font-semibold mb-4">Login</h1>
       <form onSubmit={handleSubmit}>
         {/* Username Input */}
         <div className="mb-4">
           <label htmlFor="username" className="block text-gray-600">Username</label>
           <input
             type="text"
             id="username"
             name="username"
             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
             autoComplete="off"
           />
         </div>
         
         {/* Password Input */}
         <div className="mb-4">
           <label htmlFor="password" className="block text-gray-600">Password</label>
           <input
             type="password"
             id="password"
             name="password"
             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
             autoComplete="off"
           />
         </div>

         {/* Remember Me Checkbox */}
         <div className="mb-4 flex items-center">
           <input 
             type="checkbox" 
             id="remember" 
             name="remember" 
             className="text-blue-500" 
           />
           <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
         </div>
         
         {/* Forgot Password Link */}
         <div className="mb-6 text-slate-500">
           <a href="#" className="hover:underline">Forgot Password?</a>
         </div>
         
         {/* Login Button */}
         <button 
           type="submit" 
           className="bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-md py-2 px-4 w-full"
         >
           Login
         </button>
       </form>
       
       {/* Sign up Link */}
       <div className="mt-6 text-slate-500 text-center">
         <a href="/register" className="hover:underline">Sign up Here</a>
       </div>
     </div>
   </div>
 );
};

export default LoginPage;