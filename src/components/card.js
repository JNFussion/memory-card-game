import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { useEffect, useState } from "react";
import { useAsync } from "react-async-hook";
import PropTypes from "prop-types";
import "../styles/card.css";
import air from "../assets/images/air.png";
import earth from "../assets/images/earth.png";
import fire from "../assets/images/fire.png";
import water from "../assets/images/water.png";

const Card = function Card({ id, gifID, element, playing }) {
  const [ID, setID] = useState(id);
  const [gif, setGif] = useState(null);
  useAsync(async () => {
    const giphyFetch = new GiphyFetch(process.env.REACT_APP_API_KEY);
    const { data } = await giphyFetch.gif(gifID);
    setGif(data.images.original_still.url);
  }, []);

  const [back, setBack] = useState([
    {
      name: "water",
      url: water,
    },
    {
      name: "fire",
      url: fire,
    },
    {
      name: "earth",
      url: earth,
    },
    {
      name: "air",
      url: air,
    },
  ]);

  function getFace() {
    if (playing) {
      return (
        <div className="img-container m-4">
          {gif && <img src={gif} alt={`Card of ${element} element`} />}
        </div>
      );
    }
    return (
      <div className="backs-card">
        {back.map((i) => (
          <div className={`back-element ${i.name}`}>
            <img src={i.url} alt={`backs cards ${i.name} element`} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <article id={ID} className={`card ${element}`}>
      {getFace()}
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  gifID: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
};

export default Card;
