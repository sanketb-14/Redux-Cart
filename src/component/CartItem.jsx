import React,{useState} from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'
import {connect} from 'react-redux'
import {REMOVE,DECREASE,INCREASE} from '../actions'
import { MdRemoveShoppingCart, MdRemoveCircle } from "react-icons/md";


function CartItem({id,img,title,price,amount,remove,increase,decrease}) {
  


    

    
    
    return (
      <div className="card card-side shadow-xl w-full mt-2 bg-base-100">
        <figure>
          <img src={img} alt={title} className="w-40 h-40   " />
        </figure>
        <div className="card-body">
          <h3 className="card-title border-b-2 border-accent w-full md:w-3/4 lg:w-1/2">
            {title}
          </h3>
          <div className="price flex  text-base-100 w-full md:w-3/4 lg:w-1/2">
            <p className="text-bold text-xl mt-2 flex-1 bg-secondary btn border-none hover:bg-accent md:w-3/4 lg:w-1/2 text-center rounded-xl shadow-xl py-2">
              {price}
            </p>
            <div className="amount flex flex-col flex-none justify-center items-center mt-4">
              <FaPlus className="text-accent ml-12 cursor-pointer" onClick={()=>increase()}/>
              <p className="text-neutral font-bold  ml-12 my-1">{amount}</p>
              <FaMinus className="text-accent ml-12 cursor-pointer" onClick={()=>decrease()}/>
            </div>
          </div>
          <button className=" mt-4 flex border-b-2 border-error justify-end  text-error w-20 md:w-3/4 lg:w-1/2" onClick={()=> remove()}>
            Remove <MdRemoveCircle className="m-1" />
          </button>
        </div>
      </div>
    );
    
}
const mapDispatchToProps=(dispatch,ownProps)=> {
  const {id,amount} = ownProps
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id,amount } }),
  };
}

export default connect(null , mapDispatchToProps)(CartItem)