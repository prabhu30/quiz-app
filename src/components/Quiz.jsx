import { useState } from "react";
import { DATA } from "../data.js";
import Question from "./Question.jsx";

export default function Quiz({ numQuestions, onSelectAnswer, onSubmit }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);

  const requiredData = DATA.slice(0, numQuestions);
  const { id, question, options, answer } = requiredData[questionNumber];

  function checkAnswer(selectedAnswer) {
    setQuestionsAttempted((prevNum) => prevNum + 1);
    if (selectedAnswer === answer) {
      onSelectAnswer(selectedAnswer);
    }
  }

  return (
    <div className="w-3/5 bg-white p-6 text-left rounded-md mx-auto">
      <h1 className="text-2xl pb-3 mb-3 border-gray-600 border-b-2 font-serif">
        Quiz App
      </h1>

      <p className="text-xl mb-2">
        {id}. {question}
      </p>

      {options.map((option, index) => (
        <li key={option} className="list-none">
          <button
            className="w-full text-left border border-black p-3 font-mono rounded-lg my-2 hover:bg-blue-200 hover:border-blue-600 hover:text-black focus:bg-blue-200 focus:border-blue-600"
            onClick={(event) => checkAnswer(event.target.innerText)}
          >
            {option}
          </button>
        </li>
      ))}

      <button
        className="w-24 bg-purple-600 text-white rounded-lg p-2 my-2 disabled:bg-gray-600"
        disabled={
          questionNumber >= numQuestions - 1 ||
          questionNumber != questionsAttempted - 1
        }
        onClick={() =>
          setQuestionNumber((prevQuestionNum) => prevQuestionNum + 1)
        }
      >
        Next
      </button>

      {questionNumber == numQuestions - 1 && (
        <button
          className="bg-red-400 ml-2 rounded-lg p-2 w-24 my-2 text-white"
          onClick={onSubmit}
        >
          Submit
        </button>
      )}

      <p key={id}>
        {id} of {numQuestions} questions
      </p>
    </div>
  );
}
