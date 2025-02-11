import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import Billing from "../../components/Billing";

const Cart = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <div className="py-12 max-w-7xl mx-auto container px-4">
      <h2 className="text-xl font-bold mb-5">Shopping Cart</h2>
      <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
        <div className="md:w-2/3 space-y-6">
          {carts.length > 0 ? (
            carts.map((item, index) => <CartItem key={index} item={item} />)
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
        <div>
          <Billing />
        </div>
      </div>
    </div>
  );
};

export default Cart;
