import React from 'react';

interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  imagenUrl?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, category, description, price, imagenUrl } = product;

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
      <h4>Description:</h4>
      <p>{description}</p>
      <h4>Price:</h4>
      <p>{price}</p>
    </div>
  );
};


export default ProductCard;