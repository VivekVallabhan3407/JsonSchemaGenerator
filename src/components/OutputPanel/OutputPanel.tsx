import React, { useState, useEffect } from "react";
import { useStateJson } from "@/hooks/useStateJson";
import { convertJsonToSchema } from "@/utils/JsonToSchema";
import { convertJsonToTs } from "@/utils/jsonToTs";
import "./OutputPanel.css";

const OutputPanel: React.FC = () => {
  const { jsonObject } = useStateJson();
  const [schema, setSchema] = useState("");
  const [tsType, setTsType] = useState("");

  useEffect(() => {
    if (!jsonObject) return;

    // Generate schema
    const generatedSchema = convertJsonToSchema(jsonObject);
    setSchema(JSON.stringify(generatedSchema, null, 2));

    // Generate TypeScript
    const generatedTs = convertJsonToTs(jsonObject);
    setTsType(generatedTs);
  }, [jsonObject]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div className="outputContainer">
      <h2 className="heading">Output</h2>

      {/* JSON Schema Output */}
      <div className="outputBlock">
        <div className="outputHeader">
          <h3>JSON Schema</h3>
          <button onClick={() => copyToClipboard(schema)} className="copyBtn">
            Copy
          </button>
        </div>

        <pre className="outputBox">{schema}</pre>
      </div>

      {/* TypeScript Output */}
      <div className="outputBlock">
        <div className="outputHeader">
          <h3>TypeScript Type</h3>
          <button onClick={() => copyToClipboard(tsType)} className="copyBtn">
            Copy
          </button>
        </div>

        <pre className="outputBox">{tsType}</pre>
      </div>
    </div>
  );
};

export default OutputPanel;
