import React, { useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  return (
    <div className="relative">
      <input
        className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8'
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <button
        className="absolute top-0 right-0 mt-5 mr-5 focus:outline-none"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
      </button>
    </div>
  );
};

export default PasswordInput;
