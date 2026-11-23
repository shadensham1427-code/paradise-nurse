import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Bring Nature Into Your Home</p>

        <Link to="/plants" className="get-started">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;