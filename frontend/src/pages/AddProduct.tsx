import React, { useState } from 'react';
import axios from 'axios';

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    imagenUrl: '',
    stock: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/product/create', formData);
      alert('Product added successfully');
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        imagenUrl: '',
        stock: ''
      });
    } catch (error) {
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit} id='form'>
      <input 
        type="text" 
        placeholder="Name" 
        value={ formData.name }
        onChange={e => setFormData({ ...formData, name: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder="Category" 
        value={ formData.category }
        onChange={e => setFormData({ ...formData, category: e.target.value })} 
      />
      <textarea 
        placeholder="Description" 
        value={ formData.description }
        onChange={e => setFormData({ ...formData, description: e.target.value })} 
      />
      <textarea 
        placeholder="Price" 
        value={ formData.price }
        onChange={e => setFormData({ ...formData, price: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder="Image URL"
        value={ formData.imagenUrl } 
        onChange={e => setFormData({ ...formData, imagenUrl: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder='10' 
        value={ formData.stock }
        onChange={ e => setFormData({ ...formData, stock: e.target.value }) } 
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;