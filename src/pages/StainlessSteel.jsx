import React from "react";
import ProductCard from "../components/ProductCard";
import { getProductImage } from "../data/data";

const StainlessSteel = () => {
  const products = [
    { name: "Stainless Steel Sheets", category: "Stainless Steel" },
    { name: "Stainless Steel Pipes", category: "Stainless Steel" },
    { name: "Stainless Steel Bars", category: "Stainless Steel" },
    { name: "Stainless Steel Coils", category: "Stainless Steel" },
    { name: "Stainless Steel Fittings", category: "Stainless Steel" },
    { name: "Stainless Steel Wire", category: "Stainless Steel" },
  ];

  return (
    <div
      className="page-content section-padding"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem" }}>Stainless Steel</h1>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "var(--color-text-light)",
            }}
          >
            Premium stainless steel products for industrial and commercial
            applications.
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

export default StainlessSteel;
