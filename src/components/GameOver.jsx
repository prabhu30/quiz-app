import Celebration from "/celebration.gif";
import { DATA } from "../data";

export default function GameOver({ score = 0, totalQuestions }) {
  return (
    <div className="w-2/5 bg-white rounded-md mx-auto p-4 px-8 font-serif mt-24">
      <h1 className="text-2xl font-bold text-blue-600 p-4">
        Thanks for Your Participation!
      </h1>
      <img
        src={Celebration}
        alt="Celebration GIF"
        className="w-96 mx-auto rounded"
      />
      <p className="text-xl font-bold p-4 font-sans">
        🎉 Quiz Score : {score}/{totalQuestions} 🎉
      </p>
    </div>
  );
}
