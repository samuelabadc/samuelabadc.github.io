import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import HortiImg from "../assets/img/7.jpg";
import advisory from "../assets/img/advisory.jpg"
import design from "../assets/img/blueprints.png"
import maintenance from "../assets/img/maintance.jpg"
import integration from "../assets/img/integration.webp"
// import InstElec from "../assets/img/INST_ELEC.jpg"
function Cards() {
  return (
    <div className="cards">
      <h1>Our solutions</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={advisory}
              text="Advisory: Tell us about your needs."
              label="Advisory"
              path="/services"
            />
            <CardItem
              src={design}
              text="Design: Let's make You the best solution."
              label=""
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={maintenance}
              text="Maintenance and Technical Support: Offering ongoing maintenance and technical support for products or systems."
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={HortiImg}
              text=" Supervision of Assembly/Installation: Offering expert oversight during the assembly or installation of products and systems."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={integration}
              text="System Integration: Helping businesses integrate different systems and technologies to improve operational efficiency."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
