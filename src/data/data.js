import black_pepper from "../assets/products/black_pepper.webp";
import cardamom from "../assets/products/cardamom.webp";
import cloves from "../assets/products/cloves.webp";
import cinnamon from "../assets/products/cinnamon.webp";
import fenugureek_seeds from "../assets/products/fengureek_seeds.webp";
import dry_red_chilli from "../assets/products/dry_red_chili.webp";
import chilli_powder from "../assets/products/chilli_powder.webp";
import turmeric from "../assets/products/turmeric.webp";
import coriander_seeds from "../assets/products/coriander.webp";
import cumin_seeds from "../assets/products/cumin_seeds.webp";
import barley from "../assets/products/barley.webp"
import basmati_rice from "../assets/products/basmati_rice.webp"
import wheat from "../assets/products/wheat.webp"
import chickpea from "../assets/products/chickpea.webp"
import corn from "../assets/products/corn.webp"
import fennal_seeds from "../assets/products/fennal_seeds.webp"
import mustard_seeds from "../assets/products/mustard_seeds.webp"
import millets from "../assets/products/millets.webp"
import non_basmati_rice from "../assets/products/non_basmati_rice.webp"
import red_lintal from "../assets/products/red_lintal.webp"


export const products = [
  {
    category: "Spices & Condiments",
    items: [
      "Dry Red Chilli (Guntur, Teja, Byadgi)",
      "Chilli Powder",
      "Turmeric (Fingers & Powder)",
      "Coriander Seeds & Powder",
      "Cumin Seeds",
      "Black Pepper",
      "Cardamom",
      "Cloves",
      "Cinnamon",
      "Fenugreek Seeds",
      "Mustard Seeds",
      "Fennel Seeds",
    ],
  },
  {
    category: "Grains & Cereals",
    items: [
      "Basmati Rice",
      "Non-Basmati Rice",
      "Wheat",
      "Maize (Corn)",
      "Barley",
      "Millet varieties (Bajra, Jowar, Ragi)",
    ],
  },
  {
    category: "Pulses & Lentils",
    items: [
      "Chickpeas (Kabuli & Desi)",
      "Red Lentils",
      "Green Gram (Moong)",
      "Black Gram (Urad)",
      "Toor Dal",
      "Masoor Dal",
      "Kidney Beans (Rajma)",
    ],
  },
  {
    category: "Oil Seeds & Edible Oils",
    items: [
      "Groundnut (Peanut)",
      "Sesame Seeds (White & Black)",
      "Soybean",
      "Sunflower Seeds",
      "Mustard Seeds",
      "Edible Oils (Groundnut Oil, Sesame Oil, Sunflower Oil)",
    ],
  },
  {
    category: "Dry Fruits & Nuts",
    items: [
      "Cashew Nuts",
      "Almonds",
      "Raisins",
      "Dates",
      "Walnuts",
      "Pistachios",
    ],
  },
  {
    category: "Processed & Packaged Foods",
    items: [
      "Ready-to-cook spice mixes",
      "Flours (Wheat Flour, Rice Flour, Gram Flour)",
      "Pickles",
      "Papad",
      "Instant food mixes",
      "Snacks and namkeen items",
    ],
  },
  {
    category: "Fresh & Dehydrated Products",
    items: [
      "Fresh Fruits and Vegetables (as per season)",
      "Dehydrated Onion, Garlic, Ginger",
      "Dehydrated Vegetables",
      "Frozen food items (on request)",
    ],
  },
];
export const productImages = [
  { name: "black_pepper", src: black_pepper },
  { name: "cardamom", src: cardamom },
  { name: "cloves", src: cloves },
  { name: "cinnamon", src: cinnamon },
  { name: "fenugureek_seeds", src: fenugureek_seeds },
  { name: "dry_red_chilli", src: dry_red_chilli },
  { name: "chilli_powder", src: chilli_powder },
  { name: "turmeric", src: turmeric },
  { name: "coriander_seeds", src: coriander_seeds },
  { name: "cumin_seeds", src: cumin_seeds },
  {name: "mustard_seeds", src: mustard_seeds},
  {name: "fennel_seeds", src: fennal_seeds},
  {name: "basmati_rice", src: basmati_rice},
  {name: "non_basmati_rice", src: non_basmati_rice},
  {name: "wheat", src: wheat},
  {name: "corn", src: corn},
  {name: "barley", src: barley},
  {name: "millet", src: millets},
  {name: "chickpea", src: chickpea},
  {name: "red_lintal", src: red_lintal},
];

export const getProductImage = (productName) => {
  const normalizedName = productName.toLowerCase();

  // Direct matches
  const directMatch = productImages.find(
    (img) =>
      normalizedName.includes(img.name.replace("_", " ")) ||
      img.name.replace("_", " ").includes(normalizedName),
  );
  if (directMatch) return directMatch.src;

  // Specific mapping for complex names
  if (normalizedName.includes("black pepper")) return black_pepper;
  if (normalizedName.includes("cardamom")) return cardamom;
  if (normalizedName.includes("clove")) return cloves;
  if (normalizedName.includes("cinnamon")) return cinnamon;
  if (normalizedName.includes("fenugreek")) return fenugureek_seeds;
  if (normalizedName.includes("dry red chilli")) return dry_red_chilli;
  if (normalizedName.includes("chilli powder")) return chilli_powder;
  if (normalizedName.includes("turmeric")) return turmeric;
  if (normalizedName.includes("coriander")) return coriander_seeds;
  if (normalizedName.includes("cumin")) return cumin_seeds;
  if (normalizedName.includes("mustard seeds")) return mustard_seeds; 
  if (normalizedName.includes("fennel seeds")) return fennal_seeds;
  if (normalizedName.includes("basmati_rice")) return basmati_rice;
  if (normalizedName.includes("non basmati")) return non_basmati_rice;
  if (normalizedName.includes("wheat")) return wheat;
  if (normalizedName.includes("corn")) return corn;
  if (normalizedName.includes("barley")) return barley;
  if (normalizedName.includes("millet")) return millets;
  if (normalizedName.includes("chickpea")) return chickpea;
  if (normalizedName.includes("red lentil")) return red_lintal;

  return null;
};

export const exportDestinations = [
  "China",
  "Malaysia, Sabah",
  "Singapore",
  "Vietnam",
  "Turkey",
  "Thailand",
  "Saudi Arabia",
  "UAE",
  "Maldives",
  "America",
  "Afghanistan",
  "Hong Kong SAR",
  "Indonesia",
  "Sri Lanka",
  "South Korea",
  "Qatar",
  "Philippines",
  "Nepal",
  "Muscat",
  "New Zealand",
  "Mexico",
  "Brazil",
  "United Kingdom",
  "United States",
  "Belize",
  "Bangaladesh",
  "Malaysia",
];

export const companyInfo = {
  name: "Aqeel Traders",
  tagline: "Global Exporters of Premium Food Products from India",
  description:
    "Aqeel Traders is a trusted export and import company specializing in a wide range of high-quality food products from India. We supply spices, grains, pulses, oil seeds, processed foods, and agro commodities to global markets with a strong focus on quality, reliability, and customer satisfaction.",
  mission:
    "To deliver high-quality food products globally with integrity, efficiency, and excellence.",
  vision:
    "To become a globally recognized exporter of Indian food and agro products.",
  contact: {
    location: "India",
    email: "aqeeltraders7557@gmail.com",
    phone1: "+919443187557",
    phone2: "+916383618434",
  },
};
