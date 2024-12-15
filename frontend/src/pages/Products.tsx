import React from 'react';
import ProductCard from '../components/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';

const Products: React.FC = () => {
  const { products, loading } = useFetchProducts();

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="home">
      {products.map((product) => (
        <ProductCard key={product._id} product={{ ...product  }} />
      ))}
    </div>
  );

};

export default Products;