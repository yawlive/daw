import React, { useState } from 'react'
import img from '../assets/images/register.png'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); 
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'password' && formData.confirmPassword && value !== formData.confirmPassword) {
        setPasswordError('Passwords do not match');
      } else if (name === 'confirmPassword' && formData.password !== value) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    try {
      // Send a POST request to the API endpoint
      const response = await axios.post('http://localhost:8000/api/user/register', {
        name: formData.fullName, 
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        role: 'student', 
        phone_number: '1234567890',
      });
  
      // Handle success
      console.log('Registration successful', response.data);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      // Handle errors
      if (error.response) {
        console.error('Error response:', error.response.data);
        alert(`Error: ${error.response.data.message}`);
      } else {
        console.error('Error:', error);
        alert('An error occurred during registration.');
      }
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen mt-1 mb-2">
    <div className="hidden lg:block">
      <img
        src={img}
        alt="Placeholder Image"
        className="w-full md:w-2/3 lg:w-3/4 h-auto object-contain mx-auto"
      />
    </div>

    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 mt-5" >
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-600">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Phonenumber" className="block text-gray-600">Phone Number</label>
          <input
            type="text"
            id="Phonenumber"
            name="Phonenumber"
            value={formData.Phonenumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-600">Rewrite Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        <button 
          type="submit" 
          className="bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  )
};

export default RegistrationPage;