// components/AnimatedBlobs.tsx
import React from "react";

const AnimatedBlobs: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <style jsx>{`
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.7;
        }

        .blob1 {
          top: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: #ff00ff;
          animation: move1 25s infinite alternate;
        }

        .blob2 {
          bottom: -100px;
          right: -100px;
          width: 350px;
          height: 350px;
          background: #00ffff;
          animation: move2 30s infinite alternate;
        }

        .blob3 {
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: #ffff00;
          animation: move3 35s infinite alternate;
        }

        @keyframes move1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(100px, 100px) rotate(360deg);
          }
        }

        @keyframes move2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-100px, -100px) rotate(-360deg);
          }
        }

        @keyframes move3 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-40%, -60%) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default AnimatedBlobs;
