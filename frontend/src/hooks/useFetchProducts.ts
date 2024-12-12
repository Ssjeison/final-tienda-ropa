import { useState, useEffect } from 'react';
import apiClient from '../utils/api';


interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image?: string;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const response = await apiClient.get('api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    FetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchProducts;