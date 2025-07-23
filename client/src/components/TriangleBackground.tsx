import React, { useEffect } from "react";

const CIRCLE_COUNT = 200;
const ANIMATION_TIME = 10; // seconds

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const CircleBackground: React.FC = () => {
  useEffect(() => {
    // Dynamically inject keyframes for each circle
    const styleSheet = document.createElement('style');
    let styles = '';
    for (let i = 0; i < CIRCLE_COUNT; i++) {
      const rotate = randomBetween(0, 360);
      styles += `@keyframes circle-anim-${i} {\n` +
        `  0% {\n` +
        `    opacity: 1;\n` +
        `    transform: rotate(${rotate * 1.5}deg) translate3d(${randomBetween(-500, 500)}px, ${randomBetween(-500, 500)}px, 1000px) scale(1);\n` +
        `  }\n` +
        `  100% {\n` +
        `    opacity: 0;\n` +
        `    transform: rotate(${rotate}deg) translate3d(0,0,-1500px) scale(0);\n` +
        `  }\n` +
        `}\n`;
    }
    styleSheet.innerHTML = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="tri-wrap">
      {Array.from({ length: CIRCLE_COUNT }).map((_, i) => {
        const size = randomBetween(10, 60);
        const hue = Math.floor(randomBetween(0, 360));
        const delay = (i * -(ANIMATION_TIME / CIRCLE_COUNT)).toFixed(2);
        return (
          <div
            key={i}
            className="circle-bg-anim"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              background: `hsla(${hue}, 100%, 50%, 0.8)`,
              filter: "grayscale(1)",
              WebkitFilter: "grayscale(1)",
              animation: `circle-anim-${i} ${ANIMATION_TIME}s infinite linear`,
              animationDelay: `${delay}s`,
              opacity: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: `-${size / 2}px`,
              marginTop: `-${size / 2}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CircleBackground; 