import React from "react";
import PropTypes from "prop-types";
import "../styles/card.css";

const Card = function Card({ id, url, name }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article id={id} className="card">
      <div className="img-container m-4">
        <img src={url} alt={`Card of ${name}`} />
      </div>
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
