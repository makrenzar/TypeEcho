import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const getFontSize = () => {
    if (wordCount <= 1) return 'text-[200px]';
    if (wordCount === 2) return 'text-[110px]';
    if (wordCount === 3) return 'text-[100px]';
    if (wordCount === 4) return 'text-[90px]';
    if (wordCount === 5) return 'text-[80px]';
    if (wordCount === 6) return 'text-[70px]';
    return 'text-[50px]';
  };

  const display = text.trim() === '' ? 'items-start pt-5' : 'items-center';

  return (
    <>
    <div className="min-h-screen flex flex-col justify-between bg-white p-6">

      {/* Displayed text */}
      <div className={`flex-grow flex justify-center ${display} transition-all duration-300`}>
        <p className={`text-[#434343] text-justify ${getFontSize()} max-w-[500px] whitespace-pre-line leading-tight break-words`}>
          {text}
        </p>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-lg border border-gray-300 rounded-lg px-4 py-2 w-full max-w-[500px] mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

    </div>

      

    </>
  );
}

export default App;
