import { useState, useEffect } from 'react';
import './styles/App.css';
import CardGrid from './components/CardGrid';
import Header from './components/Header';

let firstRender = false;

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const fetchData = async () => {
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=15";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      // console.log(json.cards);
      setCards(json.cards);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
    firstRender = true;
  }, []);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    
    const shuffle = (array) => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };
    
    // console.log("shuffle");
    setCards(shuffle(cards).slice());
  }, [selectedCards]);

  return (
    <>
      <Header score={score} bestScore={bestScore}/>
      <CardGrid setCards={setCards} cards={cards} score={score} bestScore={bestScore} setScore={setScore} setBestScore={setBestScore} selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>
    </>
  )
}

export default App
