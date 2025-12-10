import React, { useState } from "react";
import "./JsonInput.css";
import { useStateJson } from "@/hooks/useStateJson";
import { validateJson } from "@/utils/validateJson";

const JsonInput: React.FC = () => {
  const { setJsonObject } = useStateJson();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleProcess = () => {
    const result = validateJson(input);

    if (!result.valid) {
      setError(result.error || "Invalid JSON");
      return;
    }

    setError("");
    setJsonObject(result.parsedJson);
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setInput(pretty);
      setError("");
    } catch {
      setError("Cannot format invalid JSON");
    }
  };

  return (
    <div className="jsonInputContainer">
      <h2 className="heading">Input JSON</h2>

      <textarea
        value={input}
        onChange={handleInput}
        placeholder="Paste your JSON here..."
        className="textarea"
      />

      {error && <p className="error">{error}</p>}

      <div className="buttons">
        <button onClick={handleProcess} className="generateBtn">
          Generate
        </button>
        <button onClick={handleFormat} className="formatBtn">
          Format JSON
        </button>
      </div>
    </div>
  );
};

export default JsonInput;
