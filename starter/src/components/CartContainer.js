import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import CartItem from './CartItem';
const CartContainer = () => {

  const { cartItems, total } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  if (total < 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Your cart</h2>
          <h4 className='empty-cart'>your cart is currently empty</h4>
        </header>
      </section>
    )
  }

  return <section className='cart'>
    <header>
      <h2>your cart</h2>
    </header>
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
    </div>
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${total.toFixed(2)}</span>
        </h4>
      </div>
      <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </footer>
  </section>

}

export default CartContainer;
