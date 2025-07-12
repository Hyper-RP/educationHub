
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/students/forgot-password?email=${email}`)
      .then(() => {
        toast.success('OTP sent to your email.');
      })
      .catch(() => {
        toast.error('Error sending OTP. Please check your email and try again.');
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-bold text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <button className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Send OTP
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
