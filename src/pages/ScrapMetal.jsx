import React from "react";
import ProductCard from "../components/ProductCard";
import { getProductImage } from "../data/data";

const ScrapMetal = () => {
  const products = [
    { name: "Iron Scrap", category: "Scrap Metal" },
    { name: "Steel Scrap", category: "Scrap Metal" },
    { name: "Copper Scrap", category: "Scrap Metal" },
    { name: "Aluminum Scrap", category: "Scrap Metal" },
    { name: "Brass Scrap", category: "Scrap Metal" },
    { name: "Mixed Metal Scrap", category: "Scrap Metal" },
  ];

  return (
    <div
      className="page-content section-padding"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem" }}>Scrap Metal</h1>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "var(--color-text-light)",
            }}
          >
            High-quality scrap metal materials for recycling and industrial use.
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: "30px" }}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              category={product.category}
              image={getProductImage(product.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrapMetal;
