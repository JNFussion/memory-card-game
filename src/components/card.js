import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { useEffect, useState } from "react";
import { useAsync } from "react-async-hook";
import uniqid from "uniqid";
import "../styles/card.css";

const Card = function Card({ gifID, element }) {
  const [ID, setID] = useState(uniqid());
  const [gif, setGif] = useState(null);

  useAsync(async () => {
    const giphyFetch = new GiphyFetch(process.env.REACT_APP_API_KEY);
    const { data } = await giphyFetch.gif(gifID);
    setGif(data.images.original_still.url);
  }, []);

  return (
    <article id={ID} className={`card ${element}Nation`}>
      <div className="img-container m-4">
        {gif && <img src={gif} alt={`Card of ${element} element`} />}
      </div>
    </article>
  );
};

export default Card;
