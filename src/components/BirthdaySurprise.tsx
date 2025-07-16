
import { useState, useEffect } from "react";
import { Gift, Heart, Sparkles, Calendar, Cake, Star, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const BirthdaySurprise = ({ onComplete }: { onComplete: () => void }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [showSurprise, setShowSurprise] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

  // Calculate time until tomorrow (her birthday)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const difference = tomorrow.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setShowSurprise(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 4 + 2
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const particleInterval = setInterval(generateParticles, 10000);
    
    return () => clearInterval(particleInterval);
  }, []);

  const handleSurpriseClick = () => {
    setShowSurprise(true);
  };

  const handleEnterApp = () => {
    onComplete();
  };

  if (showSurprise) {
    return (
      <div className="fixed inset-0 z-[100] bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute animate-float opacity-30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${3 + particle.delay}s`
              }}
            >
              {particle.id % 4 === 0 ? (
                <Heart className={`w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} text-pink-400`} fill="currentColor" />
              ) : particle.id % 4 === 1 ? (
                <Star className={`w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} text-yellow-400`} fill="currentColor" />
              ) : particle.id % 4 === 2 ? (
                <Sparkles className={`w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} text-purple-400`} />
              ) : (
                <Cake className={`w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} text-pink-500`} />
              )}
            </div>
          ))}
        </div>

        {/* Glassmorphism Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl text-center max-w-4xl mx-auto transform scale-95 animate-scale-in">
            <div className="animate-bounce mb-8">
              <Cake className="w-32 h-32 mx-auto text-pink-500 drop-shadow-lg" />
            </div>
            
            <h1 className="text-7xl md:text-9xl font-display font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              Happy 19th Birthday!
            </h1>
            
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 mb-8 border border-white/30">
              <p className="text-2xl md:text-3xl text-gray-800 mb-6 font-light leading-relaxed">
                To the most beautiful soul who makes every day a{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold animate-pulse">
                  Waah
                </span>{" "}
                moment! 🎉✨
              </p>
              
              <p className="text-lg text-gray-700 italic">
                "On this special day, I celebrate not just your birth, but every moment you've filled my life with joy, laughter, and love. Here's to many more Waah moments together! 💕"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30 transform hover:scale-105 transition-all duration-300">
                <Heart className="w-10 h-10 text-pink-500 mx-auto mb-4 animate-heart-beat" fill="currentColor" />
                <h3 className="font-bold text-xl mb-2 text-gray-800">19 Years of Magic</h3>
                <p className="text-gray-700">Every year making you more amazing</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30 transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-10 h-10 text-purple-500 mx-auto mb-4 animate-pulse" />
                <h3 className="font-bold text-xl mb-2 text-gray-800">Endless Dreams</h3>
                <p className="text-gray-700">All our future adventures await</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30 transform hover:scale-105 transition-all duration-300">
                <Gift className="w-10 h-10 text-yellow-500 mx-auto mb-4 animate-bounce" />
                <h3 className="font-bold text-xl mb-2 text-gray-800">Perfect Gift</h3>
                <p className="text-gray-700">You are my greatest blessing</p>
              </div>
            </div>

            <Button
              onClick={handleEnterApp}
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600 text-white px-12 py-4 text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-2xl font-semibold"
            >
              <Heart className="w-6 h-6 mr-3" fill="currentColor" />
              Enter Our Little World
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Modern Particle System */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-float opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + particle.delay}s`
            }}
          >
            <div 
              className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl text-center max-w-2xl mx-auto">
          <div className="animate-pulse mb-8">
            <Calendar className="w-24 h-24 mx-auto text-pink-400 drop-shadow-lg" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Something Magical
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Tomorrow marks the most special day for the most precious person in my life 💕
          </p>

          {/* Modern Countdown Timer */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-pink-400 mb-2 animate-pulse">{timeLeft.hours}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Hours</div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-purple-400 mb-2 animate-pulse">{timeLeft.minutes}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Minutes</div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-yellow-400 mb-2 animate-pulse">{timeLeft.seconds}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Seconds</div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
            <p className="text-lg text-white/70 italic">
              "Every second brings us closer to celebrating another year of your beautiful existence..."
            </p>
          </div>

          <Button
            onClick={handleSurpriseClick}
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600 text-white px-10 py-4 text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-2xl font-semibold"
          >
            <Gift className="w-5 h-5 mr-3" />
            Reveal the Magic
            <Sparkles className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default BirthdaySurprise;
