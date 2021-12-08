/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import Card from "./card";
import initCards from "../assets/data/initCards.json";

const Board = function Board(props) {
  const [deck, setDeck] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const initDeck = [];
    initCards.map((c) => {
      for (let i = 0; i < 2; i += 1) {
        c.id = uniqid();
        initDeck.push(c);
      }
      return c;
    });
    setDeck(initDeck);
  }, []);
  return (
    <div className="max-w-5xl  grid grid-cols-4">
      {deck.length &&
        deck.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            element={card.element}
            gifID={card.gifID}
            playing={playing}
          />
        ))}
    </div>
  );
};

export default Board;
