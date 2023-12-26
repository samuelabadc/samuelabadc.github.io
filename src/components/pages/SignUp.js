import React, { useState } from "react";
import "./SignUpForm.css";
import Footer from "../Footer"; // Importing the Footer component

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
    console.log(formData);
  };

  return (
    <>
      <div className="hero-background">
        <div className="sign-up-form">
          <h1 className="sign-up">SIGN UP</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>

      <Footer /> {}
    </>
  );
}
