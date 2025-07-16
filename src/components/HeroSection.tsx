import { useState, useEffect } from "react";
import { Heart, Star, Sparkles, Crown, Diamond, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "/lovable-uploads/e4a19364-5d07-4efa-a090-43818c662e3a.png";

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    icon: React.ReactNode;
    left: string;
    delay: string;
    duration: string;
  }>>([]);

  useEffect(() => {
    const icons = [
      <Heart className="w-4 h-4" fill="currentColor" />,
      <Star className="w-3 h-3" fill="currentColor" />,
      <Sparkles className="w-3 h-3" />,
      <Crown className="w-4 h-4" />,
      <Diamond className="w-3 h-3" />,
      <Zap className="w-3 h-3" />
    ];

    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100 + '%',
      delay: Math.random() * 6 + 's',
      duration: (4 + Math.random() * 4) + 's'
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="floating-hearts">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-heart"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            color: `hsl(${Math.random() * 60 + 320} 75% 65%)`
          }}
        >
          {particle.icon}
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [textEffect, setTextEffect] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextEffect(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85 animate-pulse-glow"></div>
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-16 left-8 animate-float hover-bounce">
        <Heart className="w-8 h-8 text-primary animate-bounce-heart" fill="currentColor" />
      </div>
      <div className="absolute top-24 right-12 animate-float animate-sparkle" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6 text-accent glow-text" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-16 animate-float animate-rotate-colors" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute top-40 right-24 animate-float animate-bounce-heart" style={{ animationDelay: '0.5s' }}>
        <Crown className="w-5 h-5 text-primary/70" />
      </div>
      <div className="absolute bottom-32 right-8 animate-float animate-sparkle" style={{ animationDelay: '3s' }}>
        <Diamond className="w-4 h-4 text-accent/80" />
      </div>
      
      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className={`text-6xl md:text-8xl font-display font-bold text-white mb-8 transition-all duration-1000 ${
            textEffect === 0 ? 'animate-pulse-glow' : 
            textEffect === 1 ? 'animate-bounce-heart' : 
            'animate-shimmer'
          }`}>
            Welcome to{" "}
            <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent waah-highlight">
              Our Little World
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/95 mb-10 font-light leading-relaxed animate-slide-in-left glow-text">
            A magical space where every <span className="waah-highlight text-2xl md:text-4xl animate-bounce-heart inline-block">Waah</span> moment,
            every dream, and every piece of our love story lives forever ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right">
            <Button variant="romantic" size="lg" className="px-10 py-4 text-lg hover-glow animate-pulse-glow">
              <Heart className="w-6 h-6 animate-bounce-heart" fill="currentColor" />
              Explore Our Memories
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-4 text-lg bg-white/15 border-white/40 text-white hover:bg-white/25 hover-scale backdrop-blur-sm">
              <Sparkles className="w-6 h-6 animate-sparkle" />
              Add a Waah Moment
            </Button>
          </div>
          
          {/* Love Counter */}
          <div className="mt-8 inline-block">
            <div className="interactive-card px-6 py-3 rounded-full backdrop-blur-md bg-white/10">
              <span className="text-white/90 text-sm">💕 Love Level: </span>
              <span className="text-primary text-lg font-bold animate-rotate-colors">∞ Infinite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;