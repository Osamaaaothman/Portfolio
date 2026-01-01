import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2026-01-25T00:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      
      <div className="countdown-section">
        <div className="countdown-container">
          <div className="time-unit">
            <div className="time-value" key={timeLeft.days}>
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="time-label">Days</div>
          </div>
          
          <div className="separator">:</div>
          
          <div className="time-unit">
            <div className="time-value" key={timeLeft.hours}>
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="time-label">Hours</div>
          </div>
          
          <div className="separator">:</div>
          
          <div className="time-unit">
            <div className="time-value" key={timeLeft.minutes}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="time-label">Minutes</div>
          </div>
          
          <div className="separator">:</div>
          
          <div className="time-unit">
            <div className="time-value" key={timeLeft.seconds}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}
