import "../styles/Header.css";
import { FaGithub } from "react-icons/fa";

function Header({score, bestScore, newGameEvent}) {
  return (
    <header>
      <a href="https://github.com/hilu03/odin-memory-card" target="_blank" className="credit-link">
        <FaGithub className="github-icon"/>
        <div><i>&copy; hilu03</i></div>
      </a>
      <h1>Memory Card Game</h1>
      <div>
        <h3>Score: {score}</h3>
        <h3>Best score: {bestScore}</h3>
      </div>
      <button onClick={newGameEvent}>New Game</button>
    </header>
  );
}

export default Header;