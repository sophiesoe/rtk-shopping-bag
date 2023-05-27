import { actions } from "../features/modal/modalSlice";
import { dispatch } from "../store";

export const openModal = () => {
  dispatch(actions.openModal());
};
export const closeModal = () => {
  dispatch(actions.closeModal());
};
