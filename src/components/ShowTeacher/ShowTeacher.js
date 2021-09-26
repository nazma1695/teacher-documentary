import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ShowTeacher.css";

const ShowTeacher = (props) => {
  const { name, designation, technology, email, phone, salary, img } =
    props.teacher;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="teacher">
      <div className="card">
        {/* <img src={img} className="card-img-top" alt="..."> */}
        <img src={img} alt="" />
        <div className="card-body">
          <h3>{name}</h3>
          <p>
            Designation: <small>{designation}</small>
          </p>
          <p>
            Technology: <small>{technology}</small>
          </p>
          <p>
            Email: <small>{email}</small>
          </p>
          <p>
            Phone: <small>{phone}</small>
          </p>
          <p>
            Salary: <small>{salary}</small>
          </p>
          <button
            onClick={() => props.handleAddToChart(props.teacher)}
            className="btn btn-success"
          >
            {cartIcon} Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowTeacher;
