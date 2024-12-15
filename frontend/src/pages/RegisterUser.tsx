import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/user/register', formData);
      alert('User registered successfully');
      setFormData({
        username: '',
        email: '',
        password: '',
      })
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Username" 
        value={ formData.username }
        onChange={e => setFormData({ ...formData, username: e.target.value })} 
      />
      <input 
        type="email" 
        placeholder="Email"
        value={ formData.email }
        onChange={e => setFormData({ ...formData, email: e.target.value })} 
      />
      <input 
        type="password" 
          placeholder="Password"
          value={ formData.password } 
          onChange={e => setFormData({ ...formData, password: e.target.value })} 
        />
      <button type="submit">Register User</button>
    </form>
  );
};

export default RegisterUser;