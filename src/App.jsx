import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ScrapMetal from "./pages/ScrapMetal";
import Automobile from "./pages/Automobile";
import StainlessSteel from "./pages/StainlessSteel";
import ScrollToAnchor from "./components/ScrollToAnchor";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/others/scrap-metal" element={<ScrapMetal />} />
          <Route path="/others/automobile" element={<Automobile />} />
          <Route path="/others/stainless-steel" element={<StainlessSteel />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
