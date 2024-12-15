import { useState, useEffect } from 'react';
import apiClient from '../utils/api';


interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imagenUrl?: string;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const response = await apiClient.get('api/product');
        setProducts(response.data);
        console.log( response );
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