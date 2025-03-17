function Header({score, bestScore}) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <div>
        <h3>Score: {score}</h3>
        <h3>Best score: {bestScore}</h3>
      </div>
    </header>
  );
}

export default Header;