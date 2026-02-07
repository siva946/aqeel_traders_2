import React from "react";

const ProductCard = ({ name, category, image }) => {
  const getColor = (cat) => {
    if (cat.includes("Spices")) return "#e32636";
    if (cat.includes("Grains")) return "#d4af37";
    if (cat.includes("Pulses")) return "#2e8b57";
    if (cat.includes("Oil")) return "#daa520";
    if (cat.includes("Fruits")) return "#cd853f";
    if (cat.includes("Scrap Metal")) return "#708090";
    if (cat.includes("Automobile")) return "#4169e1";
    if (cat.includes("Stainless Steel")) return "#c0c0c0";
    return "#0a2351";
  };

  return (
    <div className="product-card">
      <div
        className="product-image-container"
        style={{ backgroundColor: image ? "transparent" : getColor(category) }}
      >
        {image ? (
          <img src={image} alt={name} className="product-image" />
        ) : (
          name.charAt(0)
        )}
      </div>
      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-name">{name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
