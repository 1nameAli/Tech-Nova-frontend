import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { errorHandler, successHandler } from "../../utils";
import { baseUrl } from "../../baseUrl";

const Login = () => {
    
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) return errorHandler("All fields are required");

    try {
      const res = await axios.post(
        `${baseUrl}/api/auth/login`,
        loginInfo,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      successHandler("Login Successful");
          // ✅ Redirect to external dashboard app
    setTimeout(() => {
      window.location.href = "http://localhost:5174/";
    }, 1500)
      console.log("Login success:", res.data);
    } catch (err) {
      errorHandler(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card p-4 shadow-sm border-0 rounded-4">
            <h2 className="text-center mb-4 text-primary">Account Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={loginInfo.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    name="password"
                    type={"password"}
                    className="form-control"
                    placeholder="Enter your password"
                    value={loginInfo.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <p className="text-center mt-3">
              Don’t have an account? <Link to="/signup">Signup here</Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
