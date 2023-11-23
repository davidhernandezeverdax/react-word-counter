import React, { useState } from 'react';
import './style.css';

export const App = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  return (
    <article>
      <textarea
        className="word-counter-textarea"
        placeholder="Escribe algo aquí..."
        onChange={handleChange}
      ></textarea>
      <div className="word-counter-info">Palabras: {wordCount}</div>
    </article>
  );
};
