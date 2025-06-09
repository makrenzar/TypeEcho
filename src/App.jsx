import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const getFontSize = () => {
    if (wordCount <= 1) return 'text-[155px]';
    if (wordCount === 2) return 'text-[150px]';
    if (wordCount === 3) return 'text-[145px]';
    if (wordCount === 4) return 'text-[130px]';
    if (wordCount === 5) return 'text-[120px]';
    if (wordCount === 6) return 'text-[100px]';
    return 'text-[50px]';
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-6 pt-6 pb-24 relative">
        {/* Displayed text */}
        <div className="flex justify-center w-full">
          <p className={`text-[#434343] text-justify ${getFontSize()} max-w-[700px] whitespace-pre-line leading-tight break-words`}>
            {text}
          </p>
        </div>

        {/* Fixed input at bottom */}
        <input
          type="text"
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-lg border-2 border-black rounded-lg px-4 py-2 w-full max-w-[400px] bg-white"
        />
      </div>
    </>
  );
}

export default App;
