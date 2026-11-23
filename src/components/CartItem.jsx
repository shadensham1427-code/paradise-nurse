import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>

        <p>Price: ${Number(item.price).toFixed(2)}</p>

        <p>
          Total: $
          {(Number(item.price) * item.quantity).toFixed(2)}
        </p>

        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;