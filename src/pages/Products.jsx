import React from "react";
import ProductCard from "../components/ProductCard";
import { products, getProductImage } from "../data/data";

const Products = () => {
  return (
    <div className="page-content section-padding">
      <div className="container">
        <div className="text-center section-header">
          <h1 className="page-title">Our Products</h1>
          <p className="section-description">
            Explore our wide range of premium Indian spices, grains, pulses, and
            more.
          </p>
        </div>

        {products.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="grid grid-3 products-grid">
              {category.items.map((item, i) => (
                <ProductCard
                  key={i}
                  name={item}
                  category={category.category}
                  image={getProductImage(item)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
