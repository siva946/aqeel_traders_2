import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Home from "../pages/Home";

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      {/* <Home/> */}
      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default Layout;
