import React from "react";
import CardEditor from "../components/cardEditor";
// import StudentCard from "../components/studentCard";

const Mainpage = () => {
  // const name = localStorage.getItem("name");

  return (
    <>
      {/* <h1>Карточка студента</h1>
      <StudentCard {...localStorage} />
      <button type="button" className="btn btn-primary">
        {name ? "Редактировать" : "Добавить"}
      </button> */}
      <CardEditor {...localStorage} />
    </>
  );
};

export default Mainpage;
