import React from "react";
import JsonInput from "@/components/JsonInput/JsonInput";
import OutputPanel from "@/components/OutputPanel/OutputPanel";
import ThemeToggle from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-center">
          <h1 className="title">JSON Schema Generator</h1>
          <p className="subtitle">
            Convert JSON to JSON Schema & TypeScript Type Instantly
          </p>
        </div>
        <div className="header-toggle">
          <ThemeToggle />
        </div>
      </header>

      <main className="main">
        <section className="leftPane">
          <JsonInput />
        </section>

        <section className="rightPane">
          <OutputPanel />
        </section>
      </main>
    </div>
  );
};

export default Home;
