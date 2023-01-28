import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector(store => store.cart);
  const { isLoading } = useSelector(store => store.cart);
  console.log(isLoading);
  const { isOpen } = useSelector(store => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems);
  }, [])

  if(isLoading) {
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }

  return <main>
    <Navbar />
    {isOpen && <Modal />}
    <CartContainer />
  </main>;
}
export default App;
