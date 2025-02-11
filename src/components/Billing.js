import React from "react";
import { useSelector } from "react-redux";

const Billing = () => {
  const carts = useSelector((state) => state.carts);
  const subtotal = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const totalBilling = subtotal + tax;
  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
      <div className="mb-2 flex space-x-6 justify-between">
        <p className="text-gray-700">SubTotal</p>
        <p className="text-gray-700">R{subtotal}</p>
      </div>
      <div className="mb-2 flex space-x-6 justify-between">
        <p className="text-gray-700">VAT</p>
        <p className="text-gray-700">R{tax}</p>
      </div>
      <div className="mb-2 flex space-x-6 justify-between">
        <p className="text-gray-700">Total</p>
        <p className="text-gray-700">R{totalBilling}</p>
      </div>
    </div>
  );
};

export default Billing;
