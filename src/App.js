import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,        // random horizontal position
        size: 20 + Math.random() * 40,    // random size
        duration: 6 + Math.random() * 10   // random speed
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.slice(1));
      }, newHeart.duration * 1000);
    };

    const interval = setInterval(createHeart, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`
          }}
        >
          💕
        </div>
      ))}

      <div
        className={`envelope-wrapper ${open ? "open" : ""}`}
        onClick={() => setOpen(true)}
      >
        <div className="envelope">
          <div className="flap"></div>
          <div className="body">
            <div className="seal">💖</div>
          </div>
        </div>

        <div className="letter">
          <h2>💌 A Special Letter</h2>
          <p>
            Hello Yana,
            <br /><br />
            I couldn’t write this by hand because my handwriting is really bad hahaha,
            so I made you a digital letter instead.
            <br /><br />
            I just want you to know that you’re truly a great person, and I’m really glad I got to know you.
            <br /><br />
            Stay strong and keep thriving. One step at a time, like they say, “malayo pa pero malayo na.”
            Enjoy life and don’t let yourself feel too pressured.
            <br /><br />
            I’ll be one of your supporters.
            <br /><br />
            Fighting!
            <br />
            – Jeb
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
