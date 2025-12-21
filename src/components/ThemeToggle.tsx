import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    toast.info(`Switched to ${next} mode`, { autoClose: 1200 });
  };

  return (
    <button onClick={toggleTheme} className="themeToggleBtn">
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
