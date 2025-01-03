import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/loginimg.png';
import axios from 'axios';

const LoginPage = () => {
 const navigate = useNavigate();

 const handleSubmit = async (e) => {
   e.preventDefault();
   
   try {
     const response = await axios.post('http://127.0.0.1:8000/api/user/login', {
       email: e.target.email.value,
       password: e.target.password.value
     });

     if (response.data.success) {
       localStorage.setItem('token', response.data.token);
       localStorage.setItem('userType', response.data.userType);
       
       const userType = response.data.userType;
       navigate(userType === 'teacher' ? '/teacher' : '/student');
     }
   } catch (error) {
     console.error('Login failed:', error);
     alert(error.response?.data?.message || 'Login failed');
   }
 };

 return (
   <div className="bg-gray-100 flex justify-center items-center h-screen">
     <div className="hidden lg:block">
       <img
         src={img}
         alt="Placeholder Image"
         className="w-full md:w-2/3 lg:w-3/4 h-auto object-contain mx-auto"
       />
     </div>

     <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 mt-5">
       <h1 className="text-2xl font-semibold mb-4">Login</h1>
       <form onSubmit={handleSubmit}>
         <div className="mb-4">
           <label htmlFor="email" className="block text-gray-600">Email</label>
           <input
             type="email"
             id="email"
             name="email"
             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
             autoComplete="off"
           />
         </div>

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

         <div className="mb-4 flex items-center">
           <input 
             type="checkbox"
             id="remember"
             name="remember"
             className="text-blue-500"
           />
           <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
         </div>

         <div className="mb-6 text-slate-500">
           <a href="#" className="hover:underline">Forgot Password?</a>
         </div>

         <button
           type="submit"
           className="bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-md py-2 px-4 w-full"
         >
           Login
         </button>
       </form>

       <div className="mt-6 text-slate-500 text-center">
         <a href="/register" className="hover:underline">Sign up Here</a>
       </div>
     </div>
   </div>
 );
};

export default LoginPage;