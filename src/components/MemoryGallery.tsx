import { useState, useEffect } from "react";
import { Heart, Camera, Sparkles, Star } from "lucide-react";

const MemoryGallery = () => {
  const [shuffledImages, setShuffledImages] = useState<Array<{
    src: string;
    caption: string;
    mood: string;
  }>>([]);

  const galleryImages = [
    {
      src: "/lovable-uploads/94875303-a69a-40d2-82c3-060e339b45cd.png",
      caption: "Beautiful smile that lights up my world",
      mood: "joyful"
    },
    {
      src: "/lovable-uploads/cab60456-4d70-4e38-b78e-df12ee804710.png", 
      caption: "That cute tongue-out moment",
      mood: "playful"
    },
    {
      src: "/lovable-uploads/044d94cd-c0af-4efd-a6b7-d6dd18c46914.png",
      caption: "Soft kiss vibes, so precious",
      mood: "sweet"
    },
    {
      src: "/lovable-uploads/b402f35c-5d5f-4b1a-9dcf-b0114f705f31.png",
      caption: "Peace and love, my beautiful mama",
      mood: "peaceful"
    },
    {
      src: "/lovable-uploads/7949a172-1020-4ca6-9901-c53187229feb.png",
      caption: "Artistic blue mood - so dreamy",
      mood: "artistic"
    },
    {
      src: "/lovable-uploads/758ab69f-264b-4db3-b81c-470cc97450df.png",
      caption: "Good times with friends",
      mood: "social"
    },
    {
      src: "/lovable-uploads/842cef08-3052-40e9-9ffd-b4b86f864a6b.png",
      caption: "Natural beauty under the sun",
      mood: "radiant"
    },
    {
      src: "/lovable-uploads/2c0b7b4e-63ac-489c-afad-98cc62e1e02b.png",
      caption: "Our happy moments together",
      mood: "together"
    },
    {
      src: "/lovable-uploads/d65b22ef-0101-4520-a09c-f10ea9b75b60.png",
      caption: "Cozy cuddle time - my heart melts",
      mood: "cozy"
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

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case "joyful": return <Sparkles className="w-4 h-4 text-primary" />;
      case "playful": return <Star className="w-4 h-4 text-accent" />;
      case "sweet": return <Heart className="w-4 h-4 text-primary" fill="currentColor" />;
      case "peaceful": return <Heart className="w-4 h-4 text-primary/70" />;
      case "artistic": return <Star className="w-4 h-4 text-primary" />;
      case "social": return <Sparkles className="w-4 h-4 text-accent" />;
      case "radiant": return <Star className="w-4 h-4 text-primary" fill="currentColor" />;
      case "together": return <Heart className="w-4 h-4 text-primary" fill="currentColor" />;
      case "cozy": return <Heart className="w-4 h-4 text-primary/80" fill="currentColor" />;
      default: return <Camera className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getMoodGradient = (mood: string) => {
    switch (mood) {
      case "joyful": return "from-primary/20 to-accent/20";
      case "playful": return "from-accent/20 to-primary/20";
      case "sweet": return "from-primary/15 to-primary/5";
      case "peaceful": return "from-primary/10 to-accent/10";
      case "artistic": return "from-accent/25 to-primary/15";
      case "social": return "from-primary/20 to-accent/15";
      case "radiant": return "from-accent/20 to-primary/25";
      case "together": return "from-primary/25 to-accent/20";
      case "cozy": return "from-primary/20 to-primary/10";
      default: return "from-muted/20 to-muted/10";
    }
  };

  const reshuffle = () => {
    setShuffledImages(shuffleArray(galleryImages));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-display font-semibold text-foreground">
          Our Memory Gallery
        </h3>
        <button
          onClick={reshuffle}
          className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200 text-primary font-medium"
        >
          ✨ Shuffle Memories
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shuffledImages.map((image, index) => (
          <div 
            key={`${image.src}-${index}`}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${getMoodGradient(image.mood)} p-1 hover-scale animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-lg bg-background">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating mood indicator */}
              <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                {getMoodIcon(image.mood)}
              </div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium leading-relaxed">
                  {image.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Waah moments counter */}
      <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-lg font-semibold text-foreground">
            {shuffledImages.length} Beautiful Waah Moments Captured
          </span>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">
          Each photo tells a story of our beautiful journey together
        </p>
      </div>
    </div>
  );
};

export default MemoryGallery;