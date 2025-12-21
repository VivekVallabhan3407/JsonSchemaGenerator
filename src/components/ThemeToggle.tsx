import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./theme.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    toast.info(`Switched to ${next} mode`, { autoClose: 1000 });
  };

  return (
    <div
      className={`theme-switch ${theme === "dark" ? "dark" : ""}`}
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
    >
      <span className="icon sun">☀️</span>
      <span className="icon moon">🌙</span>
      <div className="switch-knob" />
    </div>
  );
};

export default ThemeToggle;
