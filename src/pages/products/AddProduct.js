import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/products/productSlice";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addProduct(data));
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/*product name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Product Name:{" "}
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {/* product category */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Category:{" "}
          </label>
          <select
            {...register("category", { required: true })}
            name="category"
            id="category"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a category</option>
            <option value="clothing">Clothing</option>
            <option value="gadgets">Gadgets</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
        {/* product image */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Product Image URL:{" "}
          </label>
          <input
            {...register("image", { required: true })}
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {/* product price and date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Price:{" "}
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Date:{" "}
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              name="date"
              id="date"
              className="w-full bg-gray-50 text-black mt-1 p-2 placeholder:text-black rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
