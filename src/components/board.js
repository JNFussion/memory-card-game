/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import React, { useEffect, useReducer } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";
import Card from "./card";
import Aang from "../assets/images/Aang_at_Jasmine_Dragon.webp";
import Katara from "../assets/images/Katara_smiles_at_coronation.webp";
import Sokka from "../assets/images/Sokka.webp";
import Toph from "../assets/images/Toph_Beifong.webp";
import Zuko from "../assets/images/Zuko.webp";
import Iroh from "../assets/images/Iroh_smiling.webp";
import Azula from "../assets/images/Azula.webp";
import Appa from "../assets/images/Appa_flying.webp";
import TyLee from "../assets/images/Ty_Lee.webp";
import Suki from "../assets/images/Suki.webp";
import Momo from "../assets/images/Momo_staring.webp";
import Mai from "../assets/images/Mai.webp";

function init() {
  const characters = [
    { name: "Aang", url: Aang },
    { name: "Katara", url: Katara },
    { name: "Sokka", url: Sokka },
    { name: "Toph", url: Toph },
    { name: "Zuko", url: Zuko },
    { name: "Iroh", url: Iroh },
    { name: "Azula", url: Azula },
    { name: "Appa", url: Appa },
    { name: "Ty Lee", url: TyLee },
    { name: "Suki", url: Suki },
    { name: "Momo", url: Momo },
    { name: "Mai", url: Mai },
  ];
  const initialDeck = [];

  characters.forEach((i, index) => {
    initialDeck.push({
      name: i.name,
      url: i.url,
      id: uniqid(),
      isClicked: false,
    });
  });

  return initialDeck;
}

function reducer(state, action) {
  const { type, id, array } = action;
  switch (type) {
    case "set": {
      return [...array];
    }
    case "setClicked":
      return state.map((c) => {
        if (c.id === id) {
          c.isClicked = true;
        }
        return c;
      });
    case "reset":
      return state.map((c) => {
        c.isClicked = false;
        return c;
      });
    default:
      break;
  }
  return state;
}
function shuffle(array) {
  const aux = [...array];
  for (let i = aux.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = aux[i];
    aux[i] = aux[j];
    aux[j] = temp;
  }
  return aux;
}

const Board = function Board({ setScore }) {
  const [deck, dispatch] = useReducer(reducer, undefined, init);

  useEffect(() => {
    const board = document.getElementById("board");
    function handleClick(e) {
      if (e.target.id && e.target.tagName === "ARTICLE") {
        const targetCard = deck.find((c) => c.id === e.target.id);

        if (deck.every((c) => c.isClicked)) {
          dispatch({ type: "reset" });
        }

        if (targetCard.isClicked) {
          setScore(0);
          dispatch({ type: "reset" });
        } else {
          setScore((prevScore) => prevScore + 1);
          dispatch({ type: "setClicked", id: targetCard.id });
        }
        dispatch({ type: "set", array: shuffle(deck) });
      }
    }

    board.addEventListener("click", handleClick);

    return () => {
      board.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      id="board"
      className="max-w-5xl mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {deck.map((card) => (
        <Card key={card.id} id={card.id} url={card.url} name={card.name} />
      ))}
    </div>
  );
};

Board.propTypes = {
  setScore: PropTypes.func.isRequired,
};

export default Board;
