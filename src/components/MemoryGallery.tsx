import { useState, useEffect } from "react";
import { Heart, Camera, Sparkles, Star, Crown, Diamond, Zap, Gift, Smile, Sun } from "lucide-react";

const MemoryGallery = () => {
  const [shuffledImages, setShuffledImages] = useState<Array<{
    src: string;
    caption: string;
    mood: string;
    loves: number;
  }>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const galleryImages = [
    {
      src: "/lovable-uploads/94875303-a69a-40d2-82c3-060e339b45cd.png",
      caption: "Beautiful smile that lights up my world ✨",
      mood: "joyful",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/cab60456-4d70-4e38-b78e-df12ee804710.png", 
      caption: "That cute tongue-out moment 😛",
      mood: "playful",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/044d94cd-c0af-4efd-a6b7-d6dd18c46914.png",
      caption: "Soft kiss vibes, so precious 💋",
      mood: "sweet",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/b402f35c-5d5f-4b1a-9dcf-b0114f705f31.png",
      caption: "Peace and love, my beautiful mama 🕊️",
      mood: "peaceful",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/7949a172-1020-4ca6-9901-c53187229feb.png",
      caption: "Artistic blue mood - so dreamy 🎨",
      mood: "artistic",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/758ab69f-264b-4db3-b81c-470cc97450df.png",
      caption: "Good times with friends 👫",
      mood: "social",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/842cef08-3052-40e9-9ffd-b4b86f864a6b.png",
      caption: "Natural beauty under the sun ☀️",
      mood: "radiant",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/2c0b7b4e-63ac-489c-afad-98cc62e1e02b.png",
      caption: "Our happy moments together 💑",
      mood: "together",
      loves: Math.floor(Math.random() * 100) + 50
    },
    {
      src: "/lovable-uploads/d65b22ef-0101-4520-a09c-f10ea9b75b60.png",
      caption: "Cozy cuddle time - my heart melts 🤗",
      mood: "cozy",
      loves: Math.floor(Math.random() * 100) + 50
    }
  ];

  const shuffleArray = (array: typeof galleryImages) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setShuffledImages(shuffleArray(galleryImages));
  }, []);

  const getMoodIcon = (mood: string, animated = false) => {
    const baseClass = `w-5 h-5 ${animated ? 'animate-bounce-heart' : ''}`;
    switch (mood) {
      case "joyful": return <Sparkles className={`${baseClass} text-primary animate-sparkle`} />;
      case "playful": return <Star className={`${baseClass} text-accent animate-rotate-colors`} />;
      case "sweet": return <Heart className={`${baseClass} text-primary animate-bounce-heart`} fill="currentColor" />;
      case "peaceful": return <Crown className={`${baseClass} text-primary/70 animate-float`} />;
      case "artistic": return <Diamond className={`${baseClass} text-primary animate-sparkle`} />;
      case "social": return <Gift className={`${baseClass} text-accent animate-bounce-heart`} />;
      case "radiant": return <Sun className={`${baseClass} text-primary animate-rotate-colors`} fill="currentColor" />;
      case "together": return <Heart className={`${baseClass} text-primary animate-pulse-glow`} fill="currentColor" />;
      case "cozy": return <Smile className={`${baseClass} text-primary/80 animate-bounce-heart`} />;
      default: return <Camera className={`${baseClass} text-muted-foreground`} />;
    }
  };

  const getMoodGradient = (mood: string) => {
    switch (mood) {
      case "joyful": return "from-primary/30 to-accent/30";
      case "playful": return "from-accent/30 to-primary/30";
      case "sweet": return "from-primary/25 to-pink-300/25";
      case "peaceful": return "from-primary/20 to-blue-300/20";
      case "artistic": return "from-purple-400/25 to-primary/25";
      case "social": return "from-green-400/25 to-accent/25";
      case "radiant": return "from-yellow-400/25 to-orange-400/25";
      case "together": return "from-primary/30 to-accent/30";
      case "cozy": return "from-primary/25 to-primary/15";
      default: return "from-muted/20 to-muted/10";
    }
  };

  const reshuffle = () => {
    setShuffledImages(shuffleArray(galleryImages));
    setAnimationKey(prev => prev + 1);
  };

  const handleLove = (index: number) => {
    setShuffledImages(prev => prev.map((img, i) => 
      i === index ? { ...img, loves: img.loves + 1 } : img
    ));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-display font-bold text-foreground glow-text animate-pulse-glow">
          Our Memory Galaxy ✨
        </h3>
        <button
          onClick={reshuffle}
          className="interactive-card px-6 py-3 text-sm bg-primary/15 hover:bg-primary/25 rounded-xl transition-all duration-300 text-primary font-semibold hover-glow animate-pulse-glow"
        >
          🎲 Shuffle Memories
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" key={animationKey}>
        {shuffledImages.map((image, index) => (
          <div 
            key={`${image.src}-${index}-${animationKey}`}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${getMoodGradient(image.mood)} p-2 hover-glow animate-fade-in interactive-card`}
            style={{ animationDelay: `${index * 0.15}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden rounded-xl bg-background shadow-lg">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Floating mood indicator */}
              <div className="absolute top-4 right-4 p-3 bg-white/95 backdrop-blur-lg rounded-full shadow-lg hover-bounce border border-white/50">
                {getMoodIcon(image.mood, hoveredIndex === index)}
              </div>
              
              {/* Love counter */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full">
                <button 
                  onClick={() => handleLove(index)}
                  className="hover-bounce"
                >
                  <Heart className="w-4 h-4 text-red-400 animate-bounce-heart" fill="currentColor" />
                </button>
                <span className="text-white font-semibold text-sm animate-rotate-colors">
                  {image.loves}
                </span>
              </div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <p className="text-base font-medium leading-relaxed mb-2 glow-text">
                  {image.caption}
                </p>
                <div className="flex items-center gap-2 text-xs opacity-80">
                  <span className="px-2 py-1 bg-white/20 rounded-full capitalize">
                    {image.mood}
                  </span>
                  <span className="animate-sparkle">✨</span>
                </div>
              </div>
              
              {/* Hover sparkles */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <Sparkles className="absolute top-6 left-6 w-4 h-4 text-white animate-sparkle" />
                  <Star className="absolute bottom-8 right-8 w-3 h-3 text-white animate-bounce-heart" />
                  <Diamond className="absolute top-12 right-12 w-3 h-3 text-white animate-float" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced Waah moments counter */}
      <div className="text-center mt-10">
        <div className="interactive-card p-8 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 rounded-2xl hover-glow">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
            <span className="text-2xl font-bold text-foreground glow-text animate-pulse-glow">
              {shuffledImages.length} Magical Waah Moments Captured
            </span>
            <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
          </div>
          <p className="text-lg text-muted-foreground mb-4 animate-fade-in-up">
            Each photo tells a story of our beautiful journey together 💕
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-400 animate-bounce-heart" fill="currentColor" />
              <span className="font-semibold animate-rotate-colors">
                {shuffledImages.reduce((sum, img) => sum + img.loves, 0)} Total Loves
              </span>
            </div>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse-glow"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent animate-sparkle" />
              <span className="font-semibold">Infinite Memories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGallery;