import React, { useState } from "react";
import { Link } from "react-router-dom";
import { errorHandler, successHandler } from "../../utils";
import axios from "axios"
import { baseUrl } from "../../baseUrl";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = signupInfo;

    if (!username || !email || !password) {
      return errorHandler("All fields are required");
    }

    try {
      const res = await axios.post(
        `${baseUrl}/api/auth/signup`,
        signupInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      successHandler("Signup successful");
      console.log("Signup successful:", res.data);
    } catch (err) {
      errorHandler(err.response?.data?.message || "Signup failed");
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card p-4 shadow-sm border-0 rounded-4">
            <h2 className="text-center mb-4 text-primary">Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={signupInfo.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={signupInfo.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Create a password"
                  value={signupInfo.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Signup
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Signup;
