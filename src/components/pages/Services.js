import React from "react";
import "./Services.css";
import Footer from "../Footer";
import Cards from "../Cards";

function Services() {
  return (
    <>
      <div className="services-page-layout">
        <h1 className="services-page-title">SERVICES</h1>
        <Cards />
      </div>
      <Footer />
    </>
    
  );
}

export default Services;
