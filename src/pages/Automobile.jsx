import React from "react";
import ProductCard from "../components/ProductCard";
import { getProductImage } from "../data/data";

const Automobile = () => {
  const products = [
    { name: "Auto Parts", category: "Automobile" },
    { name: "Engine Components", category: "Automobile" },
    { name: "Brake Systems", category: "Automobile" },
    { name: "Transmission Parts", category: "Automobile" },
    { name: "Electrical Components", category: "Automobile" },
    { name: "Body Parts", category: "Automobile" },
  ];

  return (
    <div
      className="page-content section-padding"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem" }}>Automobile</h1>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "var(--color-text-light)",
            }}
          >
            Quality automobile parts and components for various vehicle types.
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

export default Automobile;
