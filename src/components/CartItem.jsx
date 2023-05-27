import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { decreaseItem, increaseItem, removeItem } from "../actions/cartActions";

function CartItem({ id, img, title, price, amount }) {
  const removeItemHandler = () => {
    removeItem(id);
  };
  const increaseAmountHandler = () => {
    increaseItem({ id });
  };
  const decreaseAmountHandler = () => {
    if (amount === 1) {
      removeItemHandler(id);
    } else {
      decreaseItem({ id });
    }
  };
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={removeItemHandler}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={increaseAmountHandler}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={decreaseAmountHandler}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
