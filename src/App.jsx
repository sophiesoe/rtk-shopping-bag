import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotal } from "./actions/cartActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpened } = useSelector((state) => state.modal);
  useEffect(() => {
    calculateTotal();
  }, [cartItems]);
  return (
    <main>
      {isOpened === true && <Modal />}
      <Navbar />
      <CartContainer cartItems={cartItems} />
    </main>
  );
}
export default App;
