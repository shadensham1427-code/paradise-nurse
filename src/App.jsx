import { useSelector } from "react-redux";
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
        <h1>Paradise Nursery</h1>
        <p>Bring Nature Into Your Home</p>

        <Link to="/plants" className="get-started">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h2>Total: ${totalAmount.toFixed(2)}</h2>

          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>
        </>
      )}

      <Link to="/plants">Continue Shopping</Link>
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;