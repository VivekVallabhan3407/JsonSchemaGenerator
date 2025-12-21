import React from "react";
import JsonInput from "@/components/JsonInput/JsonInput";
import OutputPanel from "@/components/OutputPanel/OutputPanel";
import ThemeToggle from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">JSON Schema Generator</h1>
        <p className="subtitle">
          Convert JSON to JSON Schema & Typescript Type Instantly
        </p>

        <ThemeToggle />
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
