import React from "react";
import PropTypes from "prop-types";

const StudentCard = ({ name, surname, yearOfBirth, portfolioUrl }) => {
  return (
    <div>
      {name ? (
        <>
          <p>
            <span className="font-weight-bold">Имя: </span>
            {name}
          </p>
          {surname ? (
            <p>
              <span className="font-weight-bold">Фамилия: </span>
              {surname}
            </p>
          ) : (
            ""
          )}
          {yearOfBirth ? (
            <p>
              <span className="font-weight-bold">Год рождения: </span>
              {yearOfBirth}
            </p>
          ) : (
            ""
          )}
          {portfolioUrl ? (
            <p>
              <span className="font-weight-bold">Портфолио: </span>
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
