import Layout from '../components/Layout/Layout';
import Cart, { EmptyCart } from '../components/Cart/Cart';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function CartPage() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal, 
    clearCart
  } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Thank you for your order! This is a demo store.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <Layout title="Cart">
        <EmptyCart />
      </Layout>
    );
  }

  return (
    <Layout title="Cart">
      <Cart
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemoveItem}
        onCheckout={handleCheckout}
        isCheckingOut={isCheckingOut}
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        total={total}
      />
    </Layout>
  );
} 