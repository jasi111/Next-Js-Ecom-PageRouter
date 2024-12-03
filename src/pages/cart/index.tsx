'use client'
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";

const TestCart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cartItems, addToCart, removeFromCart } = cartContext;

  const handleAddToCart = (prod: any) => {
    addToCart(prod);
  };

  const handleRemoveFromCart = (prod: any) => {
    removeFromCart(prod);
  };

  const cartTotalPrice = (cartItems: any[]) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalPrice = cartTotalPrice(cartItems);

  return (
    <div>
      <h2 className="mt-4 sticky-top">Your Cart</h2>
      <div className="container-fluid my-5 d-flex">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center">
                  No items in the cart
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr key={item.id}>
                  <th scope="row" className="w-25">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.title}
                    />
                    <br />
                    {item.title}
                  </th>
                  <td>${item.price}</td>
                  <td>
                    <div className="d-inline-flex align-items-center">
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="btn bg-green btn-light fs-3 py-0 fw-bold"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="form-control "
                        style={{ width: "50px" }}
                      />
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="btn bg-green btn-light fs-5 fw-bold"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div
          className="sticky-top border bg-blue text-light pt-2 w-50 d-flex flex-column"
          style={{ height: "35vh" }}
        >
          <h4 className="fw-bold">Cart Summary</h4>
          <p className="fs-5 fw-bold mt-5">Total Price: ${totalPrice}</p>
          <button className="btn rounded-5 bg-green text-dark text-light fw-semibold px-1 mx-5 mb-2 mt-auto">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCart;
