import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./JsonInput.css";
import { useStateJson } from "@/hooks/useStateJson";
import { validateJson } from "@/utils/validateJson";

const JsonInput: React.FC = () => {
  const { setJsonObject, clearJsonObject } = useStateJson();
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleProcess = () => {
    const result = validateJson(input);

    if (!result.valid) {
      toast.error("Invalid JSON: ");
      return;
    }

    setJsonObject(result.parsedJson);
    toast.success("JSON processed successfully!");
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setInput(pretty);
      toast.success("JSON formatted successfully!");
    } catch {
      toast.error("Cannot format invalid JSON");
    }
  };

  const handleClear = () => {
    setInput("");
    clearJsonObject();
    toast.info("Input cleared");
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


      <div className="buttons">
        <button onClick={handleProcess} className="jsonInput-btn generateBtn">
          Generate
        </button>
        <button onClick={handleFormat} className="jsonInput-btn formatBtn">
          Format JSON
        </button>
        <button
          onClick={handleClear}
          className="jsonInput-btn clearBtn"
          disabled={!input.trim()}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default JsonInput;
