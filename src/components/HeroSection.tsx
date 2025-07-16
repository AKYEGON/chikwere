
import { Heart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const heroImage = "/lovable-uploads/e4a19364-5d07-4efa-a090-43818c662e3a.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="w-6 h-6 text-primary/60" fill="currentColor" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="w-5 h-5 text-accent/60" fill="currentColor" />
      </div>
      <div className="absolute bottom-24 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-4 h-4 text-primary/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            For My Beloved{" "}
            <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Chikwere
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
            A digital love letter dedicated to my beautiful girlfriend, 
            my childhood crush who became my <span className="heartfelt-highlight">everything</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="romantic" size="lg" className="px-8">
              <Heart className="w-5 h-5" fill="currentColor" />
              Explore Our Love Story
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Sparkles className="w-5 h-5" />
                See Your Birthday Countdown
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
