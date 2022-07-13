import React from "react";
import CartItem from "./CartItem";
import { MdRemoveShoppingCart } from "react-icons/md";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTAL } from "../actions";
import { SiRedux } from "react-icons/si";
const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTAL });
  });
  if (cart.length === 0) {
    return (
      <div className="card-body w-full flex justify-center items-center h-96">
        <h1 className="card-title text-3xl flex flex-col">
          Your Bag <span className="text-xl">is Currently empty...!!</span>
          <SiRedux className="text-5xl mt-4 text-secondary " />
        </h1>
      </div>
    );
  }
  return (
    <div className="card w-full flex justify-center items-center">
      <div className="card-body w-full  flex justify-center items-center rounded-xl shadow-xl">
        <div className="card-title text-2xl border-b-2 pb-1 border-secondary">
          YOUR BAG
        </div>
        <article className="card-body w-full md:w-5/6 lg:w-1/2">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </article>
        <div className="card-body border-t-2 border-accent-focus w-full md:w-5/6 lg:w-1/2 mt-16 font-semibold border-b-2 text-2xl py-4  px-2 tracking-wide flex flex-row justify-space-between">
          <h2 className="text-start ">Total</h2>
          <p className="text-end">${total}</p>
        </div>
        <button
          className="btn btn-accent w-full md:w-3/4 lg:w-1/2 mt-4 text-base-100 text-2xl font-semibold "
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          Clear Cart <MdRemoveShoppingCart className="ml-8" />
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (store) => {
  const { cart, total } = store;
  return { cart, total };
};
export default connect(mapStateToProps)(CartContainer);
