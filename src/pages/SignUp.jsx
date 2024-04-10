// Signup.js
// Signup.js
import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css"; // Import the CSS file

const Signup = () => {
  const [cookies] = useCookies(["token"]);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isauth, setISAuth] = useState({
    state: false,
    email: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to backend
      const response = await axios.post(
        "http://localhost:8080/api/user/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );

      console.log(response);

      // Check if request was successful
      if (response.data.success) {
        navigate("/");
        console.log("Signup successful");
      } else {
        // Signup failed, handle error response
        console.error("Signup failed:", response.data.message);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <a href="/login">Already have an account? Login</a>
    </div>
  );
};

export default Signup;
