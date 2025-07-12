
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/students/reset-password', { email, otp, newPassword })
      .then(() => {
        toast.success('Password reset successfully.');
      })
      .catch(() => {
        toast.error('Error resetting password. Please check your OTP and try again.');
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
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-bold text-gray-600">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <button className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Reset Password
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
