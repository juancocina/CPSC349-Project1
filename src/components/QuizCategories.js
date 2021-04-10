import React from "react";
import { Link } from "react-router-dom";

import "./QuizCategories.css"

export default function QuizCategories({ setChoice }) {
  return (
    <div className="container--categories">
      <h1>Pick Your Quiz Category!</h1>
      <div>
        <button className="btn" onClick={() => setChoice(18)}>
          Computer
        </button>
        <button className="btn" onClick={() => setChoice(9)}>
          General
        </button>
        <button className="btn" onClick={() => setChoice(23)}>
          History
        </button>
        <button className="btn" onClick={() => setChoice(12)}>
          Music
        </button>
      </div>
      <div className="backButton">
      <Link to="/" className="btn">
          Go Back
        </Link>
      </div>
    </div>
  );
}
