import React from "react";
import "./About.css"; // Asegúrate de importar el CSS correcto
import Footer from "../Footer";

function About() {
    return (
      <> 
        <div className="about-page-layout">
            <div className="about-page-image-container">
                {/* La imagen se agrega aquí */}
                <img src="/src/assets/img/HORTI.jpg" alt="Invernadero" />
            </div>
            <div className="about-page-text-container">
                <h1 className="about-page-title">About Us</h1>
                <p className="about-page-description">
                At the forefront of agricultural innovation, our company stands as a leader in the development and implementation of advanced solutions for the control and automation of irrigation systems. With a steadfast commitment to sustainability and efficiency, we specialize in designing customized irrigation systems that not only meet the specific needs of each crop but also contribute to the optimization of water resource usage. Our team of experts tirelessly works to integrate the latest technologies into our systems, ensuring that each client receives a tailored solution that maximizes productivity and minimizes environmental impact. We are more than just a company; we are a strategic partner for farmers and producers seeking to elevate their crops to the next level of efficiency and sustainability.
                    {/* Resto del texto */}
                </p>
            </div>
        </div>
        <Footer />  
      </>
       
    );
}

export default About;
