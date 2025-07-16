
import { useEffect, useState } from 'react';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

interface FireworksAnimationProps {
  onComplete: () => void;
}

const FireworksAnimation = ({ onComplete }: FireworksAnimationProps) => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Generate multiple fireworks
    const colors = ['text-pink-400', 'text-purple-400', 'text-yellow-400', 'text-rose-400', 'text-fuchsia-400'];
    const newFireworks: Firework[] = [];

    for (let i = 0; i < 12; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90%
        y: Math.random() * 60 + 20, // 20% to 80%
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 2,
        delay: Math.random() * 3000 + 500 // 500ms to 3.5s delay
      });
    }

    setFireworks(newFireworks);

    // Show celebration message after initial fireworks
    const celebrationTimer = setTimeout(() => {
      setShowCelebration(true);
    }, 2000);

    // Complete animation after 6 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(celebrationTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Fireworks */}
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            animationDelay: `${firework.delay}ms`
          }}
        >
          {/* Main firework burst */}
          <div className={`relative animate-firework-burst ${firework.color}`}>
            <div className="w-4 h-4 rounded-full bg-current animate-pulse" />
            
            {/* Sparkle particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 ${firework.color} rounded-full bg-current animate-sparkle-out`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 30}deg) translateY(-20px)`,
                  animationDelay: `${firework.delay + 200}ms`
                }}
              />
            ))}
            
            {/* Outer ring particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`outer-${i}`}
                className={`absolute w-1 h-1 ${firework.color} rounded-full bg-current animate-sparkle-far`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-35px)`,
                  animationDelay: `${firework.delay + 400}ms`
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Celebration Message */}
      {showCelebration && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-scale-in">
            <h1 className="text-8xl md:text-9xl font-display font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              🎉 Happy Birthday! 🎉
            </h1>
            <p className="text-3xl text-white/90 mb-4 animate-fade-in">
              Welcome to your special day, beautiful Chikwere! 💕
            </p>
            <p className="text-xl text-white/70 animate-fade-in">
              The magical world awaits you... ✨
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FireworksAnimation;
