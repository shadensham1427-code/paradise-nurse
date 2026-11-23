import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h3 className="cart-item-name">
                  {item.name}
                </h3>

                <p className="cart-item-price">
                  Unit Price: ${Number(item.price).toFixed(2)}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

                <p>
                  Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>
            Total Cart Amount: $
            {calculateTotalAmount().toFixed(2)}
          </h2>

          <button
            className="get-started-button"
            onClick={() => alert("Coming Soon!")}
          >
            Checkout
          </button>
        </>
      )}

      <Link to="/plants" className="get-started-button">
        Continue Shopping
      </Link>
    </div>
  );
}

export default CartItem;