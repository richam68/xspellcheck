import React, { useState } from "react";

const SpellCheck = () => {
  // Define a custom dictionary of words and their corrections
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    let text = e.target.value
    setInputText(text);

    // Implement a basic spelling check and correction
    const words = text.split(" "); //this split make words into an array 
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");
    const firstCorrection = correctedWords.find((word, i) => word !== words[i]);
    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        value={inputText}
        name="inputText"
        onChange={handleInputChange}
        rows={5}
        cols={40}
      ></textarea>

      {suggestedText && (
        <p>Did you mean: <strong>{suggestedText}</strong>?</p>
      )}
    </div>
  );
};

export default SpellCheck;
