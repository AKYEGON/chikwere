import { useState, useEffect } from "react";
import { Gift, Heart, Sparkles, Calendar, Cake, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const BirthdaySurprise = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [showSurprise, setShowSurprise] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

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

  // Generate floating hearts
  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 3
      }));
      setHearts(newHearts);
    };

    generateHearts();
    const heartInterval = setInterval(generateHearts, 8000);
    
    return () => clearInterval(heartInterval);
  }, []);

  const handleSurpriseClick = () => {
    setShowSurprise(true);
  };

  if (showSurprise) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {i % 3 === 0 ? (
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              ) : i % 3 === 1 ? (
                <Heart className="w-3 h-3 text-pink-400" fill="currentColor" />
              ) : (
                <Sparkles className="w-3 h-3 text-purple-400" />
              )}
            </div>
          ))}
        </div>

        {/* Main Birthday Message */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-pulse mb-8">
              <Cake className="w-24 h-24 mx-auto text-pink-500 mb-6" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              Happy 19th Birthday!
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light leading-relaxed">
              To the most beautiful soul who makes every day a{" "}
              <span className="waah-highlight animate-bounce inline-block">Waah</span> moment! 
              🎉✨
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" fill="currentColor" />
                <h3 className="font-bold text-lg mb-2">19 Years of Magic</h3>
                <p className="text-gray-600">Every year making you more amazing</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Endless Dreams</h3>
                <p className="text-gray-600">All our future adventures await</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <Gift className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Perfect Gift</h3>
                <p className="text-gray-600">You are my greatest blessing</p>
              </div>
            </div>

            <div className="text-xl text-gray-600 mb-8 italic">
              "On this special day, I celebrate not just your birth, but every moment you've filled my life with joy, laughter, and love. Here's to many more Waah moments together! 💕"
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              I Love You Beautiful! 💖
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute w-4 h-4 text-pink-400 animate-float opacity-60"
          style={{
            left: `${heart.x}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: '4s'
          }}
          fill="currentColor"
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-bounce mb-6">
            <Calendar className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Something Special is Coming...
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Tomorrow marks a very special day for someone incredibly precious to me 💕
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-pink-500">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-purple-500">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-yellow-500">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600">Seconds</div>
            </div>
          </div>

          <div className="text-lg text-gray-600 mb-8 italic">
            "Every second brings us closer to celebrating another year of your beautiful existence..."
          </div>

          <Button
            onClick={handleSurpriseClick}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Gift className="w-5 h-5 mr-2" />
            Reveal the Surprise! 🎁
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BirthdaySurprise;