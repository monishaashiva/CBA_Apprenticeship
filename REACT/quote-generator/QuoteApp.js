import React, { useEffect, useState, useMemo, useCallback } from 'react';

const QuoteApp = () => {
  const [quotes, setQuotes] = useState([]);

  // Fetch quotes from JSON Server
  useEffect(() => {
    fetch('http://localhost:3001/quotes')
      .then(res => res.json())
      .then(data => setQuotes(data));
  }, []);

  // useMemo to compute the longest quote
  const longestQuote = useMemo(() => {
    console.log("Calculating longest quote...");
    if (quotes.length === 0) return null;
    return quotes.reduce((longest, current) =>
      current.text.length > longest.text.length ? current : longest
    );
  }, [quotes]);

  // useCallback for deleting a quote
  const deleteQuote = useCallback((id) => {
    fetch(`http://localhost:3001/quotes/${id}`, { method: 'DELETE' })
      .then(() => {
        setQuotes(prev => prev.filter(q => q.id !== id));
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quotes</h1>
      {quotes.map(q => (
        <div key={q.id} style={{ marginBottom: "10px" }}>
          <blockquote>
            "{q.text}" — <em>{q.author}</em>
          </blockquote>
          <button onClick={() => deleteQuote(q.id)}>Delete</button>
        </div>
      ))}

      <hr />
      {longestQuote && (
        <div>
          <h2>📌 Longest Quote</h2>
          <blockquote>
            "{longestQuote.text}" — <em>{longestQuote.author}</em>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default QuoteApp;
