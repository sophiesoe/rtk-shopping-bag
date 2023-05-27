import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { openModal } from "../actions/modalActions";

function CartContainer() {
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  const clearCartHandler = () => {
    openModal();
  };
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <span>${total.toFixed(2)}</span>
          </h4>
          <button className="btn clear-btn" onClick={clearCartHandler}>
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
}

export default CartContainer;
