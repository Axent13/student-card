import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "./textField";
import { validator } from "../utils/validator";

const CardEditor = ({ name, surname, yearOfBirth, portfolioUrl }) => {
  const [data, setData] = useState({
    name,
    surname,
    yearOfBirth,
    portfolioUrl,
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле 'Имя' обязательно для заполнения",
      },
    },
    surname: {
      isRequired: {
        message: "Поле 'Фамилия' обязательно для заполнения",
      },
    },
    yearOfBirth: {
      isRequired: {
        message: "Поле 'Год рождения' обязательно для заполнения",
      },
      isInRange: {
        message: "Год введён некорректно",
        // Для примера, допускаю, что возраст человека должен быть в пределах от 0 до 100 лет
        min: new Date().getFullYear() - 100,
        max: new Date().getFullYear(),
      },
    },
    portfolioUrl: {
      isRequired: {
        message: "Поле 'Портфолио' обязательно для заполнения",
      },
      isUrl: {
        message: "Введите корректный url-адрес!",
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
    localStorage.setItem("name", data.name);
    localStorage.setItem("surname", data.surname);
    localStorage.setItem("yearOfBirth", data.yearOfBirth);
    localStorage.setItem("portfolioUrl", data.portfolioUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{name ? "Редактировать" : "Создать"}</h1>
      <TextField
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Фамилия"
        name="surname"
        value={data.surname}
        onChange={handleChange}
        error={errors.surname}
      />
      <TextField
        label="Год рождения"
        type="number"
        name="yearOfBirth"
        value={data.yearOfBirth}
        onChange={handleChange}
        error={errors.yearOfBirth}
      />
      <TextField
        label="Портфолио"
        name="portfolioUrl"
        value={data.portfolioUrl}
        onChange={handleChange}
        error={errors.portfolioUrl}
      />
      <button type="submit" disabled={!isValid} className="btn btn-primary">
        {name ? "Редактировать" : "Создать"}
      </button>
    </form>
  );
};

CardEditor.defaultProps = {
  name: "",
  surname: "",
  yearOfBirth: "",
  portfolioUrl: "",
};

CardEditor.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  yearOfBirth: PropTypes.string,
  portfolioUrl: PropTypes.string,
};

export default CardEditor;
