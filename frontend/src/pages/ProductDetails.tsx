import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image?: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching the product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="recipe-details">
      {product ? (
        <><h3>Description:</h3><p>{product.description}</p></>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default ProductDetails;