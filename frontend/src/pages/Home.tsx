import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Calzado", image: "https://cdn.icon-icons.com/icons2/1465/PNG/512/428mansshoe_100857.png" },
  { name: "Camisetas", image: "https://cdn.icon-icons.com/icons2/1465/PNG/512/420tshirt_100521.png" },
  { name: "Pantalones", image: "https://cdn.icon-icons.com/icons2/1082/PNG/512/track-pant_78116.png" },
  { name: "Accesorios", image: "https://cdn.icon-icons.com/icons2/47/PNG/128/redhat_fedorahat_redhat_9976.png" },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenido a ModaCenter</h1>
      <p>Explora nuestras categorías destacadas</p>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {categories.map((category) => (
          <div
            key={category.name}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "150px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "10px 0" }}>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
