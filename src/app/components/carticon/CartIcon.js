import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const CartIcon = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const getCartCount = () => {
    try {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        const cartItems = JSON.parse(cartData);
        return cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
      }
      return 0;
    } catch (error) {
      console.error('Error reading cart data:', error);
      return 0;
    }
  };

  useEffect(() => {
    setCartItemCount(getCartCount());

    const handleStorageChange = (e) => {
      if (e.key === 'cart') {
        setCartItemCount(getCartCount());
      }
    };

    const handleCartUpdate = () => {
      setCartItemCount(getCartCount());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <Link href="/checkout" className="relative group">
      <ShoppingCart style={{color: 'black'}}size={20} />
      {/* Green dot only shows when cart has items */}
      {cartItemCount > 0 && (
        <span className="absolute -top-3 -right-3 bg-[#82a133] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
          {cartItemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;