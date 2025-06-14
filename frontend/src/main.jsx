
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Landing_Page/Home/HomePage";
import AboutPage from "./Landing_Page/About/AboutPage";
import PricingPage from "./Landing_Page/Pricing/PricingPage";
import ProductsPage from "./Landing_Page/Products/ProductsPage";
import Signup from "./Landing_Page/Signup/Signup";
import SupportPage from "./Landing_Page/Support/SupportPage";
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound";
import Login from "./Landing_Page/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById("root")).render(


  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
  </BrowserRouter>
 
);
