import React from "react";

const ProductCard = ({ name, category, image }) => {

  const getColor = (cat) => {
    if (cat.includes("Spices")) return "#e32636";
    if (cat.includes("Grains")) return "#d4af37";
    if (cat.includes("Pulses")) return "#2e8b57";
    if (cat.includes("Oil")) return "#daa520";
    if (cat.includes("Fruits")) return "#cd853f";
    return "#0a2351";
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "916383618434";
    const message = `Hi! I'm interested in exporting ${name} (${category}). Please share price, MOQ and export details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <article
      className="product-card"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div
        className="product-image-container"
        style={{ backgroundColor: image ? "transparent" : getColor(category) }}
      >
        {image ? (
          <img
            src={image}
            alt={`${name} exporter from India | Aqeel Traders`}
            loading="lazy"
            itemProp="image"
            className="product-image"
          />
        ) : (
          <span>{name.charAt(0)}</span>
        )}
      </div>

      <div className="product-info">
        <p className="product-category" itemProp="category">
          {category} Exporter
        </p>

        <h3 className="product-name" itemProp="name">
          {name} Exporter from India
        </h3>

        {/* Hidden SEO description for Google */}
        <p className="sr-only" itemProp="description">
          Premium quality {name} supplied and exported worldwide by Aqeel Traders
          Karaikudi, India. Bulk supply available for international buyers.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-btn"
          aria-label={`Send WhatsApp inquiry for ${name}`}
        >
          Export Inquiry
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
