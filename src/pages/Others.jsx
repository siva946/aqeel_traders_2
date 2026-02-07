import React from "react";
import ProductCard from "../components/ProductCard";
import { getProductImage } from "../data/data";

const Others = () => {
  const otherProducts = [
    { name: "Scrap Metal", category: "Others" },
    { name: "Automobile", category: "Others" },
    { name: "Stainless Steel", category: "Others" },
  ];

  return (
    <div
      className="page-content section-padding"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem" }}>Others</h1>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "var(--color-text-light)",
            }}
          >
            Additional products and materials we trade.
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: "30px" }}>
          {otherProducts.map((product, index) => (
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

export default Others;
