import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from './features/cart/cartSlice';
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return <main>
    <Navbar />
    <Modal />
    <CartContainer />
  </main>;
}
export default App;
