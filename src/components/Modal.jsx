import React from "react";
import ReactDOM from "react-dom";
import { clearCart } from "../actions/cartActions";
import { closeModal } from "../actions/modalActions";

function Modal() {
  const clearCartHandler = () => {
    clearCart();
    closeModal();
  };
  const closeModalHandler = () => {
    closeModal();
  };
  return ReactDOM.createPortal(
    <aside className="modal-container" onClick={closeModalHandler}>
      <div className="modal">
        <h4>remove all items from your shopping cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={clearCartHandler}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={closeModalHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>,
    document.getElementById("modal")
  );
}

export default Modal;
