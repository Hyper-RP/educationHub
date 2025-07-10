
import React from 'react';
import { motion } from 'framer-motion';

const SignInForm = ({ userType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">{userType} Sign In</h2>
        <form className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <button className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Sign In
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignInForm;
