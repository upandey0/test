import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [cookies] = useCookies(["token"]);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogout = async () => {
    const token = cookies.token;
    // Check if token exists
    if (!token) {
      console.error("Token not found in cookies");
      return;
    }

    try {
      // Make POST request to backend
      const response = await axios.get(
        "http://localhost:8080/api/user/logout",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );
      // Check if request was successful
      if (response.data.success) {
        navigate("/login");
        console.log("Logout Successfully");
      } else {
        console.error("Signup failed:", response.data.message);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error.message);
    }
  };

  return (
    <nav class="navbar navbar-expand-lg  h-100 navColor">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  d-flex justify-content-between align-items-center"
          id="navbarSupportedContent"
        >
          <div className="leftNav d-flex align-items-center">
            {/* <div className="leftSide">
              <span>
                <IoReorderThreeOutline fontSize={40} />
              </span>
            </div> */}
            <div className="leftSide">
              <h5>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="20.303 25.565 159.393 148.871"
                  viewBox="20.303 25.565 159.393 148.871"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="color"
                  role="img"
                  aria-label="Homepage"
                >
                  <defs>
                    {/* <style>#comp-kk2o699z svg [data-color="1"] {fill: #8A8A8A;}</style> */}
                  </defs>
                  <g>
                    <path
                      d="M179.398 97.035c-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0L88.06 83.006C76.12 77.633 61.196 84.2 59.107 97.035c-.299.895-.299 2.089-.299 3.283 0 .895 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283z"
                      fill="#FD6262"
                      data-color="1"
                    ></path>
                    <path
                      d="M49.556 62.112l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864.895-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.013 19.402 28.953 14.029z"
                      fill="#FD6262"
                      data-color="1"
                    ></path>
                    <path
                      d="M111.94 137.928l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864 1.194-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.896.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.836-17.014-19.402-28.953-14.029z"
                      fill="#FD6262"
                      data-color="1"
                    ></path>
                  </g>
                </svg>
                <span className="logoDesign ">
                  <b>f</b>-ai
                </span>
              </h5>
            </div>
            {/* <div className="leftSide">
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
            <div className="leftSide">
              <Link to="#">
                <span>Subscription</span>
              </Link>
            </div> */}
          </div>
          <div className="helloCen">
            {" "}
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/subscription">
              <span className="mx-2">Subscription</span>
            </Link>
          </div>

          <ul class="navbar-nav mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <span className="navMenuIcons">
                  <IoIosNotifications />
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span className="navMenuIcons">
                  {" "}
                  <MdEmail />
                </span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link">
                <span className="navMenuIcons">
                  {" "}
                  {/* <FaCircleUser /> */}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
