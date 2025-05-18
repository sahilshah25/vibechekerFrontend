import { useEffect, useState } from 'react';
import api from '../api';

const Quiz = ({ onSubmit }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    api.get('/quiz').then(res => {
      setQuestions(res.data);
      setAnswers(Array(res.data.length).fill(null));
    });
  }, []);

  const handleChange = (qIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const submitQuiz = async () => {
    const res = await api.post('/quiz/submit', { answers });
    onSubmit(res.data.vibe);
  };

  return (
    <div>
      {questions.map((q, i) => (
        <div key={q.id} className="mb-8">
          <p className="font-semibold text-lg mb-2">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, j) => (
              <label
                key={j}
                className="block bg-gray-100 p-3 rounded-xl hover:bg-purple-100 transition cursor-pointer"
              >
                <input
                  type="radio"
                  name={`q${i}`}
                  value={j}
                  checked={answers[i] === j}
                  onChange={() => handleChange(i, j)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={submitQuiz}
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition"
      >
        Submit Vibe
      </button>
    </div>
  );
};

export default Quiz;

