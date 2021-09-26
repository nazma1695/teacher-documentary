import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import ShowTeacher from "../ShowTeacher/ShowTeacher";
import "./Teacher.css";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./teachers.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  const handleAddToChart = (teacher) => {
    const newCart = [...cart, teacher];
    setCart(newCart);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 teacher-container">
          {teachers.map((teacher) => (
            <ShowTeacher
              key={teacher.id}
              teacher={teacher}
              handleAddToChart={handleAddToChart}
            ></ShowTeacher>
          ))}
        </div>
        <div className="col-md-2 cart-container pl-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
