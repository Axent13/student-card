import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Modal = ({ isVisible }) => {
  return (
    <div className={"modal" + (isVisible ? " d-block" : "")}>
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <p>Обновлено!</p>
          </div>
          <div className="modal-footer">
            <Link to="/">Close </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isVisible: false,
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
};

export default Modal;
