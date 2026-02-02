import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/data";

const Products = () => {
  return (
    <div
      className="page-content section-padding"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem" }}>Our Products</h1>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "var(--color-text-light)",
            }}
          >
            Explore our wide range of premium Indian spices, grains, pulses, and
            more.
          </p>
        </div>

        {products.map((category, index) => (
          <div key={index} style={{ marginBottom: "60px" }}>
            <h2
              style={{
                borderLeft: "5px solid var(--color-secondary)",
                paddingLeft: "15px",
                marginBottom: "30px",
                fontSize: "2rem",
              }}
            >
              {category.category}
            </h2>
            <div className="grid grid-3" style={{ gap: "30px" }}>
              {category.items.map((item, i) => (
                <ProductCard key={i} name={item} category={category.category} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
