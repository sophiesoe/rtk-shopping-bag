import { dispatch } from "../store";
import { actions } from "../features/cart/cartSlice";

export const clearCart = () => {
  dispatch(actions.clearCart());
};
export const removeItem = (id) => {
  dispatch(actions.removeItem(id));
};
export const increaseItem = (id) => {
  dispatch(actions.increaseAmount(id));
};

export const decreaseItem = (id) => {
  dispatch(actions.decreaseAmount(id));
};

export const calculateTotal = () => {
  dispatch(actions.cartTotal());
};
