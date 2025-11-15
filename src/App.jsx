import React, { useState, useEffect } from "react";
import "./App.css";
import StudentCard from "./component/StudentCard";
import StudentManager from "./component/StudentForm";

function App() {
  const fullTitle = "🎓 Smart Student ID Manager";
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedTitle(fullTitle.slice(0, index + 1));
      index++;
      if (index === fullTitle.length) clearInterval(interval);
    }, 120); // smooth typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex flex-col items-center justify-start p-6 space-y-8">

      {/* Typing Project Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-400 animate-title-glow drop-shadow-lg">
        {displayedTitle}
        <span className="animate-blink">|</span>
      </h1>
      <p className="text-white/80 text-center text-lg md:text-xl">
        Add, Search, Update & Delete Student Records Easily
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Form Section */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-6 transition hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
            🎓 Add Student
          </h2>
          <StudentManager />
        </div>

        {/* Card Section */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-6 flex justify-center items-center transition hover:scale-105 duration-300">
          <StudentCard />
        </div>

      </div>
    </div>
  );
}

export default App;
