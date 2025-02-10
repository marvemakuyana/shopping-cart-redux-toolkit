import React from "react";

const ProductCard = ({ product }) => {
  const { id, name, price, image, category, date } = product || {};
  console.log(product);

  return (
    <div className="card bg-base-100 w-full md:w-96 shadow-xl">
      <figure>
        <img src={image} alt="Product" className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title text-gray-800">{name}</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          tempore error fuga rem laborum voluptas dignissimos et nam cumque
          quasi quos distinctio quia. Sint incidunt optio velit voluptate
          impedit id?
        </p>
        <div className="card-actions justify-end items-center">
          <p className="text-blue-600 font-semibold">R{price}</p>
          <button className="btn bg-blue-500 text-white hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
