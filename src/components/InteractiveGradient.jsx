"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGradient() {
  const interactiveRef = useRef(null);

  useEffect(() => {
    const el = interactiveRef.current;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (el) el.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (e) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add animations to global stylesheet instead of using styled-jsx
  useEffect(() => {
    // Check if styles already exist
    if (document.getElementById('gradient-animations')) return;

    const styleSheet = document.createElement("style");
    styleSheet.id = 'gradient-animations';
    styleSheet.textContent = `
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes moveVertical {
        0%, 100% { transform: translateY(-50%); }
        50% { transform: translateY(50%); }
      }
      @keyframes moveHorizontal {
        0%, 100% { transform: translateX(-50%) translateY(-10%); }
        50% { transform: translateX(50%) translateY(10%); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      const style = document.getElementById('gradient-animations');
      if (style) style.remove();
    };
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden">
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="relative w-full h-full" style={{ filter: 'url(#goo) blur(40px)' }}>
        {/* g1 */}
        <div 
          className="absolute rounded-full mix-blend-hard-light"
          style={{
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle at center, rgba(220,20,20,0.8) 0, rgba(220,20,20,0) 50%)',
            animation: 'moveVertical 30s ease infinite',
          }}
        />
        
        {/* g2 */}
        <div 
          className="absolute rounded-full mix-blend-hard-light"
          style={{
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle at center, rgba(180,0,0,0.8) 0, rgba(180,0,0,0) 50%)',
            transformOrigin: 'calc(50% - 400px)',
            animation: 'rotate 20s linear infinite',
          }}
        />
        
        {/* g3 */}
        <div 
          className="absolute rounded-full mix-blend-hard-light"
          style={{
            width: '80%',
            height: '80%',
            top: 'calc(10% + 100px)',
            left: 'calc(10% - 200px)',
            background: 'radial-gradient(circle at center, rgba(255,40,40,0.8) 0, rgba(255,40,40,0) 50%)',
            transformOrigin: 'calc(50% + 400px)',
            animation: 'rotate 40s linear infinite',
          }}
        />
        
        {/* g4 */}
        <div 
          className="absolute rounded-full mix-blend-hard-light"
          style={{
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle at center, rgba(150,0,0,0.8) 0, rgba(150,0,0,0) 50%)',
            animation: 'moveHorizontal 40s ease infinite',
          }}
        />
        
        {/* g5 */}
        <div 
          className="absolute rounded-full mix-blend-hard-light"
          style={{
            width: '160%',
            height: '160%',
            top: '-30%',
            left: '-30%',
            background: 'radial-gradient(circle at center, rgba(200,0,0,0.8) 0, rgba(200,0,0,0) 50%)',
            animation: 'rotate 25s linear infinite',
          }}
        />
        
        {/* Interactive */}
        <div 
          ref={interactiveRef}
          className="absolute pointer-events-none mix-blend-hard-light"
          style={{
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%',
            background: 'radial-gradient(circle at center, rgba(255,60,60,0.8) 0, rgba(255,60,60,0) 50%)',
            opacity: 0.7,
          }}
        />
      </div>
    </div>
  );
}