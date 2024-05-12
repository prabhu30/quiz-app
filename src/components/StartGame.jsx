import QuizGif from "../../public/quiz-time.gif";

export default function ({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h1 className="text-center text-purple-700 text-2xl font-bold font-serif">
        Welcome to Web Development <br />
        Quiz Application
      </h1>
      <img src={QuizGif} alt="Quiz GIF" className="w-48 mx-auto my-6" />
      <button
        className="bg-gray-700 text-white px-4 py-2 mt-8 rounded-lg"
        onClick={() => onStart(true)}
      >
        Get Started
      </button>
    </div>
  );
}
