import React from 'react';
import CircaleLevel1 from "../../assets/CircaleLevel1.svg"
import CircaleLevel2 from "../../assets/CircaleLevel2.svg"

const CircaleAnimation = () => {
  return (
    <div className='relative inline-flex items-center justify-center'>
      {/* Outer circle - slow continuous spin */}
      <img
        src={CircaleLevel1}
        alt="CircaleLevel1"
        style={{
          animation: 'spin 25s linear infinite',
        }}
      />

      {/* Inner circle - gentle pulse/breathe */}
      <img
        src={CircaleLevel2}
        alt="CircaleLevel2"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          animation: 'breathe 3s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 1; }
          50%       { transform: translate(-50%, -50%) scale(0.96); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export default CircaleAnimation;