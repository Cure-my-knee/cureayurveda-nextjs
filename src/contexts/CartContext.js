 "use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
        updateCartCount(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Update cart count whenever cart items change
  const updateCartCount = (items) => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  // Add item to cart
  const addToCart = (product, quantity = 0, selectedSize = '') => {
    const cartItem = {
      id: product.id,
      name: product.productName,
      price: parseFloat(product.price),
      quantity: parseInt(quantity), // Ensure quantity is a number
      image: product.images[0],
      size: selectedSize,
      currency: product.currency,
      stock: product.stock,
      sku: product.sku || `SKU-${product.id}`,
      weight: product.weight || 0.2,
      hsn: product.hsn || '30049011'
    };

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => 
        item.id === cartItem.id && item.size === cartItem.size
      );

      let updatedCart;
      if (existingItemIndex !== -1) {
        // Update quantity if item exists
        updatedCart = [...prevItems];
        updatedCart[existingItemIndex].quantity += cartItem.quantity;
      } else {
        // Add new item to cart
        updatedCart = [...prevItems, cartItem];
      }

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateCartCount(updatedCart);
      
      return updatedCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (id, size = '') => {
    setCartItems(prevItems => {
      const updatedCart = prevItems.filter(item => 
        !(item.id === id && item.size === size)
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateCartCount(updatedCart);
      return updatedCart;
    });
  };

  // Update item quantity
  const updateQuantity = (id, size = '', newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id, size);
      return;
    }

    setCartItems(prevItems => {
      const updatedCart = prevItems.map(item => 
        item.id === id && item.size === size 
          ? { ...item, quantity: newQuantity }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateCartCount(updatedCart);
      return updatedCart;
    });
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem('cart');
  };

  // Get total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};