import React, { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex((prevIndex) =>
          prevIndex === text.length ? 0 : prevIndex + 1
        );
        setShowCursor((prevShow) => !prevShow); // 커서를 깜빡이도록 설정합니다.
      }
    }, 200); // 글자가 나타나는 간격 조절
    return () => clearInterval(typingInterval);
  }, [text, currentIndex]);

  return (
    <div className="typing-effect-container typing__effect">
      <h1 className="intro__title">{displayText}</h1>
      {showCursor && <span className="cursor"> | </span>}
    </div>
  );
};

export default TypingEffect;
