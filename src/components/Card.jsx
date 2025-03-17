import "../styles/Card.css";

function Card({info, selectedCards, setScore, setBestScore, setSelectedCards, score, bestScore}) {
  return (
  <div className="card" onClick={() => {
    console.log(selectedCards)
    if (!selectedCards.includes(info.code)) {
      setScore(score + 1);
      bestScore = bestScore < score + 1 ? bestScore + 1 : bestScore;
      setBestScore(bestScore);
      selectedCards.push(info.code);
      setSelectedCards(selectedCards.slice());
    }
    else {
      setScore(0);
      setSelectedCards([]);
    }
  }}>
    <img src={info.image} alt={info.code} />
    <p>{info.value} {info.suit}</p>
  </div>
  );
}

export default Card;