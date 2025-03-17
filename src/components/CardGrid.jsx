import Card from "./Card";
import "../styles/CardGrid.css";
import { useState } from "react";


function CardGrid({cards, setScore, setBestScore, selectedCards, setSelectedCards, score, bestScore}) {
  return (
    <div className="card-grid">
      {cards && cards.map(c => <Card info={c} key={c.code} selectedCards={selectedCards} setSelectedCards={setSelectedCards} setBestScore={setBestScore} setScore={setScore} score={score} bestScore={bestScore}/>)}
    </div>
  );
}



export default CardGrid;