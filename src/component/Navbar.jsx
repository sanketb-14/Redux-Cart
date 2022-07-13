import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";

function Navbar({ amount, total }) {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a href="/" className="text-2xl font-bold text-secondary">
          Redux-Cart
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart className="h-6 w-6" />
              <span className="badge badge-sm indicator-item">{amount}</span>
            </div>
          </label>
          <div className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">{amount} Items</span>
              <span className="text-info">Subtotal : {total}</span>
              <div className="card-actions">
                <button className="btn btn-secondary btn-block">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
const mapStateProps = (state) => {
  return { amount: state.amount, total: state.total };
};
export default connect(mapStateProps)(Navbar);
