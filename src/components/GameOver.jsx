export default function GameOver({ correctAnswersCount = 0 }) {
  return (
    <div className="w-2/5 bg-white rounded-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-green-600 p-2">
        Thanks for Your Participation!
      </h1>
      <p className="text-xl font-bold p-2">
        🎉 Quiz Score : {correctAnswersCount} 🎉
      </p>
    </div>
  );
}
