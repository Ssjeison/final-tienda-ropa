import React from 'react';

interface Category {
  name: string;
  description: string;
  imagenUrl?: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, description, imagenUrl } = category;

  return (
    <div className="recipe-card">
      <img 
        src={imagenUrl || '/images/default.jpg'}
        alt={`Imagen de ${name}`} 
        onError={(e) => (e.currentTarget.src = '/images/default.jpg')} 
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <h3>{name}</h3>
      <strong>Description:</strong>
      <p>{description}</p>
    </div>
  );
};



export default CategoryCard;