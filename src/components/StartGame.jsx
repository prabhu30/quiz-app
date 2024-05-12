export default function ({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h1 className="text-center text-purple-700 text-2xl font-bold">
        Welcome to Web Development <br />
        Quiz Application
      </h1>
      <button
        className="bg-gray-700 text-white px-4 py-2 mt-8 rounded-lg"
        onClick={() => onStart(true)}
      >
        Get Started
      </button>
    </div>
  );
}
