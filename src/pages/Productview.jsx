import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { products, getProductImage } from "../data/data";
import ProductCard from "../components/ProductCard";

/* ---------- Animation Variants ---------- */

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const Productview = () => {
    return (
        <motion.section
            className="section-padding products-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
            <div className="container">
                {/* Heading */}
                <div className="text-center section-header">
                    <h2 className="section-title">Our Products</h2>
                    <p>Explore our premium export products.</p>
                </div>

                {/* Products Grid */}
                <motion.div
                    className="products-carousel-wrapper"
                    variants={staggerContainer}
                >
                    <div className="products-carousel-track">
                        {[...products.flatMap((cat) =>
                            cat.items.map((item) => ({
                                name: item,
                                category: cat.category,
                                image: getProductImage(item),
                            }))
                        )].map((product, idx) => (
                            <motion.div
                                key={idx}
                                className="carousel-product-card"
                                variants={fadeUp}
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Button */}
                <div className="text-center view-more-container">
                    <Link to="/contact" className="btn btn-primary">
                        Enquire Now
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

export default Productview;
