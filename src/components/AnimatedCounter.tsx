import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ end, duration = 2000, className = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof end === 'string') return;
    
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return (
    <span className={`font-bold transition-all duration-300 ${className}`}>
      {typeof end === 'string' ? end : count}
    </span>
  );
};

export default AnimatedCounter;