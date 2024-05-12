import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import Quiz from "./components/Quiz";
import GameOver from "./components/GameOver";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  console.log("Correct Answers Count - ", correctAnswersCount);

  function handleSubmitQuiz() {
    setIsGameOver(true);
  }

  return (
    <div>
      {!isGameStarted && <StartGame onStart={setIsGameStarted} />}
      {isGameStarted && !isGameOver && (
        <Quiz
          onSelectAnswer={setCorrectAnswersCount}
          onSubmit={handleSubmitQuiz}
        />
      )}
      {isGameOver && <GameOver correctAnswersCount={correctAnswersCount} />}
    </div>
  );
}

export default App;
