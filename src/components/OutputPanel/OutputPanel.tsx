import React, { useState, useEffect } from "react";
import { useStateJson } from "@/hooks/useStateJson";
import { convertJsonToSchema } from "@/utils/JsonToSchema";
import { convertJsonToTs } from "@/utils/jsonToTs";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { downloadFile } from "@/utils/download";
import "./OutputPanel.css";

const OutputPanel: React.FC = () => {
  const { jsonObject } = useStateJson();
  const [schema, setSchema] = useState<string | null>();
  const [tsType, setTsType] = useState<string | null>();

  useEffect(() => {
    if (!jsonObject) {
      setSchema(null);
      setTsType(null);
      return
    };

    // Generate schema
    const generatedSchema = convertJsonToSchema(jsonObject);
    setSchema(JSON.stringify(generatedSchema, null, 2));

    // Generate TypeScript
    const generatedTs = convertJsonToTs(jsonObject);
    setTsType(generatedTs);
  }, [jsonObject]);

  const handleDownloadSchema = () => {
    if (!schema) return;

    downloadFile(schema, "schema.json", "application/json");
  };

  const handleDownloadTs = () => {
    if (!tsType) return;

    downloadFile(tsType, "types.ts", "text/typescript");
  };

  return (
    <div className="outputContainer">
      <h2 className="heading">Output</h2>

      {/* JSON Schema Output */}
      <div className="outputBlock">
        <div className="outputHeader">
          <h3>JSON Schema</h3>
          <div className="actionBtns">
            <button onClick={() => copyToClipboard(schema ?? "", "JSON Schema")} className="copyBtn" disabled={!schema}>
              Copy
            </button>
            <button onClick={handleDownloadSchema} className="downloadBtn" disabled={!schema}>Download</button>
          </div>
        </div>

        <pre className="outputBox">{schema || ""}</pre>
      </div>

      {/* TypeScript Output */}
      <div className="outputBlock">
        <div className="outputHeader">
          <h3>TypeScript Type</h3>
          <div className="actionBtns">

            <button onClick={() => copyToClipboard(tsType ?? "", "TypeScript Type")} className="copyBtn" disabled={!tsType}>
              Copy
            </button>
            <button onClick={handleDownloadTs} className="downloadBtn" disabled={!tsType}>Download</button>
          </div>
        </div>

        <pre className="outputBox">{tsType || ""}</pre>
      </div>
    </div>
  );
};

export default OutputPanel;
