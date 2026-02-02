import React from "react";

const ProductCard = ({ name, category }) => {
  // Placeholder color based on category to make it colorful
  const getColor = (cat) => {
    if (cat.includes("Spices")) return "#e32636";
    if (cat.includes("Grains")) return "#d4af37";
    if (cat.includes("Pulses")) return "#2e8b57";
    if (cat.includes("Oil")) return "#daa520";
    if (cat.includes("Fruits")) return "#cd853f";
    return "#0a2351";
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
      className="product-card"
    >
      <style>{`
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
      `}</style>
      <div
        style={{
          height: "200px",
          backgroundColor: getColor(category),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.2)",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        {name.charAt(0)}
      </div>
      <div style={{ padding: "20px" }}>
        <p
          style={{
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#888",
            marginBottom: "5px",
          }}
        >
          {category}
        </p>
        <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
