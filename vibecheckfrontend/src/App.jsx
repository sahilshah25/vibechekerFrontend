import Quiz from './components/Quiz';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [vibe, setVibe] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white text-gray-800 shadow-xl rounded-2xl w-full max-w-3xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-700">
          🎯 Vibe Check Quiz
        </h1>
        {!vibe ? <Quiz onSubmit={setVibe} /> : <Results vibe={vibe} />}
      </div>
    </div>
  );
}

export default App;


