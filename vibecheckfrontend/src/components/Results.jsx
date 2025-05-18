import { useEffect, useState } from 'react';
import api from '../api';

const Results = ({ vibe }) => {
  const [results, setResults] = useState({});

  useEffect(() => {
    fetchResults();
    const interval = setInterval(fetchResults, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchResults = () => {
    api.get('/results').then(res => setResults(res.data));
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">
        🧠 Your Vibe: <span className="text-pink-600">{vibe}</span>
      </h2>
      <h3 className="text-xl mb-3">📊 Live Vibe Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(results).map(([key, value]) => (
          <div
            key={key}
            className="bg-purple-100 text-purple-800 p-4 rounded-xl shadow"
          >
            <p className="font-semibold">{key}</p>
            <p className="text-2xl">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;

