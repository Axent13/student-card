import React from "react";
import PropTypes from "prop-types";

const StudentCard = ({ name, surname, yearOfBirth, portfolioUrl }) => {
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
              {yearOfBirth}
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
