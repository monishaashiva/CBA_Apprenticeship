import React, { useState } from "react";
import "./App.css";

const quotes = [
  "Believe in yourself!",
  "Keep going, you're doing great!",
  "Every day is a second chance.",
  "Stay positive, work hard, make it happen.",
  "Dream it. Wish it. Do it.",
];

function App() {
  const [quote, setQuote] = useState("Click the button to get a quote!");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>✨ Quote Generator ✨</h1>
      <p>{quote}</p>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default App;
