import React, { useState } from 'react';
import axios from 'axios';

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    image: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', formData);
      alert('Product added successfully');
    } catch (error) {
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input type="text" placeholder="Category" onChange={e => setFormData({ ...formData, category: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
      <textarea placeholder="Price" onChange={e => setFormData({ ...formData, price: e.target.value })} />
      <input type="text" placeholder="Image URL" onChange={e => setFormData({ ...formData, image: e.target.value })} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;