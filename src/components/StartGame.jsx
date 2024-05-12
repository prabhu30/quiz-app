import { useRef } from "react";
import QuizGif from "/quiz-time.gif";

export default function ({ onStart }) {
  const numOfQuestions = useRef();

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-center text-green-800 text-2xl font-bold font-serif">
        Welcome to Web Development <br />
        Quiz Application
      </h1>
      <img src={QuizGif} alt="Quiz GIF" className="w-48 mx-auto my-6" />
      <div className="flex gap-2 items-center font-sans">
        <p className="text-white font-bold">Select number of questions : </p>
        <select
          name="num-of-questions"
          id="num-of-questions"
          className="rounded-full text-center px-4 py-1 cursor-pointer focus:outline-none bg-white text-black appearance-none"
          ref={numOfQuestions}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <button
        className="bg-gray-100 text-black px-4 py-2 mt-6 rounded-lg"
        onClick={() => onStart(numOfQuestions.current.value)}
      >
        Get Started
      </button>
    </div>
  );
}
