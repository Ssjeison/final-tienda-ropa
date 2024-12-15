import React from 'react';

interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  imagenUrl?: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, category, description, price, imagenUrl, stock } = product;

  return (
    <div className="recipe-card">
      <img 
        src={imagenUrl || '/images/default.jpg'} 
        alt={`Imagen de ${name}`} 
        onError={(e) => (e.currentTarget.src = '/images/default.jpg')} 
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <h3>{name}</h3>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <strong>Description:</strong>
      <p>{description}</p>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>
        <strong>Stock:</strong> {stock}
      </p>
    </div>
  );
};


export default ProductCard;