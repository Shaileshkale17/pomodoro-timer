import React ,{ useState, useEffect } from "react";
import "./PomodoroTime.css";



function PomodoroTime() {
  const [seconds, setSeconds] = useState(25 * 60); // Initial time: 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [isTitle, setisTitle] = useState('workings Time');
  const radius = 200; // Radius of the progress circle
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);

      if (!isBreakTime) {
        setSeconds(5 * 60); // Set break time to 5 minutes
        setIsBreakTime(true);

        setisTitle('Break Time');
        // You can add notifications or alerts here for break time
      } else {
        setSeconds(25 * 60); // Set work time back to 25 minutes
        setIsBreakTime(false);
        setisTitle('workings Time'); 
        // You can add notifications or alerts here for work time
      }
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, isBreakTime]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(25 * 60); // Reset back to 25 minutes
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const progress = (1 - seconds / (25 * 60)) * circumference;

  return (
    <section className="This_card">
      <div>
        <div className="card">
          <h2>{isTitle}</h2>
          <div className="Timerpop">

          <svg width={radius * 2} height={radius * 2}>
        <circle
          className="progress-ring"
          stroke="#ffff"
          strokeWidth="8"
          fill="transparent"
          r={radius-5}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-indicator"
          stroke="#00ff00"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          r={radius-5}
          cx={radius}
          cy={radius}
          style={{
              strokeDasharray: circumference,
              strokeDashoffset: progress,
            }}

        />
            <text x="50%" y="50%" textAnchor="middle" fill="#ffff" fontSize="2rem">
           {formatTime(seconds)}
          </text>
            
      </svg>
            <di className="button">
              <button
                className={`px-4 py-2 ${
                  isActive ? "bg-red-500" : "bg-green-500"
                } text-white rounded`}
                onClick={toggleTimer}>
                {isActive ? "Pause" : "Start"}
              </button>
              <button onClick={resetTimer}>Reset</button>
            </di>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PomodoroTime;
