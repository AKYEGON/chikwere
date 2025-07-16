
import { useState, useEffect } from "react";
import { Heart, Star, Sparkles, Calendar, Cake, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

  // Calculate time until her birthday (tomorrow)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const birthday = new Date();
      birthday.setDate(birthday.getDate() + 1);
      birthday.setHours(0, 0, 0, 0);
      
      const difference = birthday.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 6 + 3
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const particleInterval = setInterval(generateParticles, 8000);
    
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Romantic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(/lovable-uploads/0aee5898-7305-42cc-a412-f053a277bc08.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/80 via-purple-900/70 to-rose-900/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Floating Hearts and Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-float opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + particle.delay}s`
            }}
          >
            {particle.id % 3 === 0 ? (
              <Heart className={`w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} text-pink-300`} fill="currentColor" />
            ) : particle.id % 3 === 1 ? (
              <Star className={`w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} text-yellow-300`} fill="currentColor" />
            ) : (
              <Sparkles className={`w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} text-purple-300`} />
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="relative z-20 p-6">
        <Link to="/love-story">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm">
            <Heart className="w-4 h-4 mr-2" fill="currentColor" />
            Explore Our Love Story
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 -mt-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Birthday Icon */}
          <div className="mb-8 animate-bounce">
            <div className="relative">
              <Cake className="w-24 h-24 mx-auto text-pink-300 drop-shadow-2xl" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 bg-clip-text text-transparent animate-pulse">
              Chikwere's
            </span>
            <br />
            <span className="text-white/90">
              19th Birthday
            </span>
          </h1>

          {/* Romantic Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed drop-shadow-lg">
            My Beautiful Mama Alpha, Moonlight, Chemu
            <br />
            <span className="text-pink-300 font-medium">The countdown to your special day begins...</span>
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold text-pink-300 mb-2 animate-pulse drop-shadow-lg">
                {timeLeft.days}
              </div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">
                Days
              </div>
            </div>
            
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold text-purple-300 mb-2 animate-pulse drop-shadow-lg">
                {timeLeft.hours}
              </div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">
                Hours
              </div>
            </div>
            
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2 animate-pulse drop-shadow-lg">
                {timeLeft.minutes}
              </div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">
                Minutes
              </div>
            </div>
            
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold text-rose-300 mb-2 animate-pulse drop-shadow-lg">
                {timeLeft.seconds}
              </div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">
                Seconds
              </div>
            </div>
          </div>

          {/* Romantic Message */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-pink-300 animate-pulse" />
            <p className="text-lg md:text-xl text-white/90 leading-relaxed italic font-light">
              "Every heartbeat brings us closer to celebrating another year of your beautiful existence, my love. 
              From the little girl I had a crush on in baby class to the incredible woman you've become - 
              you are my greatest blessing."
            </p>
            <div className="flex items-center justify-center mt-6 space-x-2">
              <Heart className="w-5 h-5 text-pink-300 animate-pulse" fill="currentColor" />
              <span className="text-pink-300 font-medium">4 Months of Love, A Decade of Knowing You</span>
              <Heart className="w-5 h-5 text-pink-300 animate-pulse" fill="currentColor" />
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-white/70 text-lg">
              Get ready for the most magical day, my beautiful Chikwere ✨
            </p>
            <Link to="/love-story">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 hover:from-pink-600 hover:via-purple-600 hover:to-rose-600 text-white px-8 py-4 text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-2xl font-semibold border-0"
              >
                <Heart className="w-5 h-5 mr-3" fill="currentColor" />
                Explore Our Love Story
                <Sparkles className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Romantic Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default CountdownPage;
