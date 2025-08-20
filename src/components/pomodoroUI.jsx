import React, { useState, useEffect } from 'react';
import '../styles/appstylesheet.css';
import { motion, scale } from "motion/react";
const { ipcRenderer } = window.require("electron");





const PomodoroUI = () => {
 const [minutesLeft, setMinutesLeft] = useState(null);

  const testit = () => {
    alert("Button works!");
  };

  const handleClick = (type) => {
    if (type === 1) {
      ipcRenderer.send("run-python", "start_25m");
    } else if (type === 2) {
      ipcRenderer.send("run-python", "start_45m");
    } else if (type === 3) {
      ipcRenderer.send("run-python", "pause");
    }
  };

  const stopTimer = () => {
    ipcRenderer.send("run-python", "stop");
    setMinutesLeft(null); // reset display when stopping
  };

  useEffect(() => {
    ipcRenderer.on("python-response", (_, msg) => {
      console.log("Python says:", msg);
      const mins = msg;
      if (!((mins) == "")) setMinutesLeft(mins);
    });

    return () => {
      ipcRenderer.removeAllListeners("python-response");
    };
  }, []);
  return (
    <div className="mop">
      {/* Menu Button */}
        <motion.div className="menu" initial={{scale: 1}}
          whileHover={{
            scale: 1.05, // 5% larger on hover
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }
          }}
          whileTap={{
            scale: 0.98 // Slight press effect
          }}
          onClick={testit}>
          <svg className="IamErect">
            <rect className="IamErect-shape" rx="0" ry="0" x="0" y="0" width="32" height="8" />
          </svg>
          <svg className="Rect1">
            <rect className="Rect1-shape" rx="0" ry="0" x="0" y="0" width="32" height="8" />
          </svg>
          <svg className="Rect">
            <rect className="Rect-shape" rx="0" ry="0" x="0" y="0" width="32" height="8" />
          </svg>
        </motion.div>

      {/* Background Elements */}
      <div className="Back">
        <svg className="back1">
          <ellipse className="back1-shape" rx="305.5" ry="136" cx="305.5" cy="136" />
        </svg>
        <svg className="pause">
          <motion.ellipse className="pause-shape" rx="110" ry="108.5" cx="110" cy="108.5" initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 200]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ 
            transformOrigin: 'center',
            willChange: 'transform'
          }}
        />
        </svg>

        {/* Cloud Elements */}
        <svg className="Ellipse13">
          <ellipse className="Ellipse13-shape" rx="35" ry="22.5" cx="35" cy="22.5" />
        </svg>
        <svg className="Ellipse12">
          <ellipse className="Ellipse12-shape" rx="39" ry="23.5" cx="39" cy="23.5" />
        </svg>
        <svg className="Ellipse11">
          <ellipse className="Ellipse11-shape" rx="36.5" ry="24" cx="36.5" cy="24" />
        </svg>
        <svg className="Ellipse23">
          <ellipse className="Ellipse23-shape" rx="35" ry="28" cx="35" cy="28" />
        </svg>
        <svg className="Ellipse22">
          <ellipse className="Ellipse22-shape" rx="39" ry="23.5" cx="39" cy="23.5" />
        </svg>
        <svg className="cloud21">
          <ellipse className="cloud21-shape" rx="36.5" ry="25" cx="36.5" cy="25" />
        </svg>
      </div>

      {/* Main Button */}
      <button className='MainButton'>
        <motion.svg className="MainBut" initial={{scale: 1}}
          whileHover={{
            scale: 1.05, // 5% larger on hover
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }
          }}
          whileTap={{
            scale: 0.98 // Slight press effect
          }}
          onClick={() => handleClick(3)}
          
          >
          


              
          <ellipse className="MainBut-shape" rx="92" ry="88" cx="92" cy="88" />
          {/* Display remaining minutes on top */}
          {minutesLeft !== null && (
            <text className="MainButText" x="92" y="92" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="24">
              {minutesLeft}
            </text>
          )}
        </motion.svg>
      </button>

      {/* Control Buttons */}
      <motion.div className="n_5_button"  initial={{scale: 1}}
          whileHover={{
            scale: 1.05, // 5% larger on hover
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }
          }}
          whileTap={{
            scale: 0.98 // Slight press effect
          }}
          onClick={() => handleClick(2)}
          >
        <svg className="Rectangle865">
          <rect className="Rectangle865-shape" rx="18" ry="18" x="0" y="0" width="95" height="63" />
        </svg>
        <div className="n_5m">
          <span>45m</span>
        </div>
      </motion.div>

      <motion.div className="stop_button"   initial={{scale: 1}}
          whileHover={{
            scale: 1.05, // 5% larger on hover
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }
          }}
          whileTap={{
            scale: 0.98 // Slight press effect
          }}
          onClick={stopTimer}>
        <svg className="Rectangle32">
          <rect className="Rectangle32-shape" rx="18" ry="18" x="0" y="0" width="95" height="63" />
        </svg>
        <div className="STOP">
          <span>STOP</span>
        </div>
      </motion.div>

      <motion.div className="n_0_button"   initial={{scale: 1}}
          whileHover={{
            scale: 1.05, // 5% larger on hover
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }
          }}
          whileTap={{
            scale: 0.98 // Slight press effect
          }}
          onClick={() => handleClick(3)}>
        <svg className="Rectangle123">
          <rect className="Rectangle123-shape" rx="18" ry="18" x="0" y="0" width="95" height="63" />
        </svg>
        <div className="n_0m">
          <span>20m</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PomodoroUI;