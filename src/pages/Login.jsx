import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/login.module.css"; // Import CSS module for login styles
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies] = useCookies(["token"]);
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to backend
      const response = await axios.post(
        "https://https://f-ai-backend-seven.vercel.app/api/user/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);

      // Check if request was successful
      if (response.data.success) {
        navigate("/")
        console.log("Login successful");
      } else {
        // Signup failed, handle error response
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error.message);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <Link to="/signup" className={styles.signupLink}>
        Don't have an account? Sign up
      </Link>
    </div>
  );
};

export default Login;
