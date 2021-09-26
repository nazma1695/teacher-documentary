import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  let total = 0;
  for (const teacher of cart) {
    total = total + teacher.salary;
  }
  return (
    <div className="text-center">
      <h3 className="text-center">Teachers</h3>
      <hr />
      <h5>
        {userIcon}Teachers Added: {props.cart.length}
      </h5>
      <h5>Total Cost: $ {total}</h5>
      <button className="btn btn-success">View Details</button>
    </div>
  );
};
export default Cart;
