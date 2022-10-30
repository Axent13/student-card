import React from "react";
import PropTypes from "prop-types";

const StudentCard = ({ name, surname, yearOfBirth, portfolioUrl }) => {
  const getAge = () => {
    const age = Number(new Date().getFullYear()) - Number(yearOfBirth);
    const lastNumber = Number(String(age).slice(-1));

    if (age >= 5 && age <= 20) return `${age} лет`;
    else if (lastNumber === 1) return `${age} год`;
    else if (lastNumber >= 2 && lastNumber <= 4) return `${age} года`;
    else return `${age} лет`;
  };

  return (
    <div>
      {name ? (
        <>
          <p>
            <strong>Имя: </strong>
            {name}
          </p>
          {surname ? (
            <p>
              <strong>Фамилия: </strong>
              {surname}
            </p>
          ) : (
            ""
          )}
          {yearOfBirth ? (
            <p>
              <strong>Год рождения: </strong>
              {yearOfBirth} ({getAge()})
            </p>
          ) : (
            ""
          )}
          {portfolioUrl ? (
            <p>
              <strong>Портфолио: </strong>
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                {portfolioUrl}
              </a>
            </p>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          <p>Нет данных</p>
        </>
      )}
    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  yearOfBirth: PropTypes.string,
  portfolioUrl: PropTypes.string,
};

export default StudentCard;
