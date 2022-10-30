import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "../components/studentCard";

const Mainpage = () => {
  const name = localStorage.getItem("name");

  return (
    <>
      <h1>Карточка студента</h1>
      <StudentCard {...localStorage} />
      <Link to="/cardEditor">
        <button type="button" className="btn btn-primary me-3">
          {name ? "Редактировать" : "Добавить"}
        </button>
      </Link>
    </>
  );
};

export default Mainpage;
