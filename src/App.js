import React from "react";
import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import Data from "./Data";
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";
import { Provider } from "react-redux";

//initial store
const initalStore = {
  cart: Data,
  total: 0,
  amount: 0,
};

//store
const store = createStore(reducer, initalStore);

function App() {
  return (
    <Provider store={store}>
      <div className="artboard bg-base-200">
        <Navbar />
        <CartContainer />
      </div>
    </Provider>
  );
}

export default App;
