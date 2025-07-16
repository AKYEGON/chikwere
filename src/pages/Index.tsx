
import { useState, useEffect } from "react";
import { 
  Heart, 
  Star, 
  Sparkles, 
  Calendar, 
  Camera, 
  BookOpen, 
  MapPin, 
  Coffee, 
  Clock,
  Gift,
  Crown,
  Gem,
  Mountain,
  Utensils,
  Users,
  Building,
  Quote,
  Timer,
  Trophy
} from "lucide-react";
import Header from "@/components/Header";
import MemoryGallery from "@/components/MemoryGallery";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Index = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Calculate time until her birthday (tomorrow)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const difference = tomorrow.getTime() - now.getTime();
      
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bucketListItems = [
    { icon: Mountain, title: "Taking a hike with Chikwere", mood: "adventurous" },
    { icon: Coffee, title: "Having a morning run with my beautiful Mama Alpha", mood: "energetic" },
    { icon: Star, title: "Having late night out with my winsome woman", mood: "romantic" },
    { icon: Heart, title: "Planning to have the awaited Alpha", mood: "dreamy" },
    { icon: Sparkles, title: "Accompanying my lovely wife to the salon and me to the barber shop", mood: "caring" },
    { icon: Building, title: "Having a serious business talk with my Mrs CEO", mood: "ambitious" },
    { icon: Utensils, title: "My chef to cook me her famous chapatis", mood: "loving" },
    { icon: Users, title: "Partying with her", mood: "joyful" }
  ];

  const getMoodGradient = (mood: string) => {
    switch (mood) {
      case "adventurous": return "from-green-400/20 to-blue-400/20";
      case "energetic": return "from-orange-400/20 to-yellow-400/20";
      case "romantic": return "from-pink-400/20 to-purple-400/20";
      case "dreamy": return "from-blue-400/20 to-indigo-400/20";
      case "caring": return "from-emerald-400/20 to-teal-400/20";
      case "ambitious": return "from-violet-400/20 to-purple-400/20";
      case "loving": return "from-red-400/20 to-pink-400/20";
      case "joyful": return "from-yellow-400/20 to-orange-400/20";
      default: return "from-primary/20 to-accent/20";
    }
  };

  return (
    <div className="min-h-screen bg-background love-particles">
      <Header />
      
      {/* Hero Section - Romantic Welcome */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-magic-gradient opacity-20"></div>
        <div className="absolute inset-0 floating-hearts opacity-5"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="animate-heartFloat mb-8">
              <Crown className="w-20 h-20 mx-auto text-primary animate-loveGlow" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
              My Beloved{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-sparkle">
                Chikwere
              </span>
            </h1>
            
            <div className="space-y-4 text-2xl md:text-3xl text-muted-foreground mb-12">
              <p className="font-light">My Beautiful Mama Alpha</p>
              <p className="font-light">My Radiant Moonlight</p>
              <p className="font-light">My Precious Chemu</p>
            </div>
            
            <div className="glass-morphism p-8 rounded-3xl max-w-4xl mx-auto mb-12">
              <Quote className="w-12 h-12 mx-auto mb-6 text-accent animate-gentlePulse" />
              <p className="text-xl md:text-2xl font-display font-medium leading-relaxed italic">
                "From baby class to this beautiful moment - you've been the girl of my dreams for nearly a decade. 
                My childhood crush who became my everything. Tomorrow you turn 19, and I can't wait to celebrate 
                the incredible woman you've become."
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Heart className="w-6 h-6 text-primary fill-primary animate-heartBeat" />
                <span className="text-lg font-semibold text-primary">4 Beautiful Months Together</span>
                <Heart className="w-6 h-6 text-primary fill-primary animate-heartBeat" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Countdown */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <Gift className="w-5 h-5 mr-2" />
              Birthday Countdown
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Your Special Day is{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Almost Here!
              </span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Counting every precious moment until we celebrate your 19th birthday, my beautiful Chikwere
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-morphism p-12 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2 animate-pulse">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Days</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-2 animate-pulse">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2 animate-pulse">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-2 animate-pulse">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Seconds</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-2xl font-display text-foreground">
                Until my queen turns <span className="text-primary font-bold">19</span>! 🎉
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Gallery */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <Camera className="w-5 h-5 mr-2" />
              Our Beautiful Memories
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Captured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Moments</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Every photograph tells the story of our love, every smile captures a universe of emotions
            </p>
          </div>

          <div className="max-w-6xl mx-auto love-card interactive-love-card">
            <MemoryGallery />
          </div>
        </div>
      </section>

      {/* Poetry Dedication Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              Poetry Corner
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Words from <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">My Heart</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="love-card interactive-love-card text-center p-16">
              <div className="animate-heartFloat mb-8">
                <Quote className="w-16 h-16 mx-auto text-primary animate-loveGlow" />
              </div>
              
              <h3 className="text-3xl font-display font-bold text-foreground mb-8">
                A Special Poem Awaits
              </h3>
              
              <div className="glass-morphism p-8 rounded-2xl mb-8">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  I've written something special just for you, my beloved Chikwere. 
                  Words that capture the depth of my love, the beauty of our journey, 
                  and the dreams we share for our future together.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Heart className="w-5 h-5 fill-primary animate-heartBeat" />
                  <span className="font-semibold">To be personally delivered with all my love</span>
                  <Heart className="w-5 h-5 fill-primary animate-heartBeat" />
                </div>
              </div>
              
              <p className="text-lg font-display italic text-muted-foreground">
                "Some words are too precious for screens - they deserve to be whispered, 
                shared in the warmth of your presence, where every syllable can dance 
                between us like the love we've nurtured for all these years."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bucket List Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 magical-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <MapPin className="w-5 h-5 mr-2" />
              Our Pending Adventures
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Dreams Waiting to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Come True</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Every adventure we'll share, every moment we'll create, every dream we'll make reality together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {bucketListItems.map((item, index) => (
              <div
                key={index}
                className={`love-card interactive-love-card bg-gradient-to-br ${getMoodGradient(item.mood)} stagger-love-animation`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="animate-heartFloat mb-6">
                    <item.icon className="w-10 h-10 mx-auto text-primary animate-loveGlow" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 leading-relaxed">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Achievement Section */}
      <section className="py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <Trophy className="w-5 h-5 mr-2" />
              Celebrating Your Growth
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              The Ugali <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Master</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="love-card interactive-love-card text-center p-12">
              <div className="animate-heartFloat mb-8">
                <Utensils className="w-16 h-16 mx-auto text-primary animate-loveGlow" />
              </div>
              
              <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                My Beautiful Chef Chikwere
              </h3>
              
              <div className="glass-morphism p-8 rounded-2xl">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Watching you learn to cook ugali filled my heart with so much pride and joy. 
                  Every stir, every careful moment, every determined look on your beautiful face - 
                  it all reminded me why I fell in love with your spirit.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-primary mb-4">
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="font-semibold text-lg">Achievement Unlocked: Ugali Mastery!</span>
                  <Star className="w-5 h-5 fill-primary" />
                </div>
                
                <p className="text-lg font-display italic text-muted-foreground">
                  "From learning to cook to conquering hearts - you're unstoppable, my love"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Love Declaration */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 floating-hearts"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto glass-morphism p-20 rounded-3xl love-card">
            <div className="animate-heartFloat mb-12">
              <Heart className="w-24 h-24 mx-auto text-primary animate-heartBeat fill-primary heart-glow" />
            </div>
            
            <h2 className="text-6xl md:text-7xl font-display font-bold text-foreground mb-10 leading-tight">
              Forever & Always,
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                My Chikwere
              </span>
            </h2>
            
            <p className="text-muted-foreground text-2xl md:text-3xl mb-16 leading-relaxed max-w-4xl mx-auto">
              From baby class dreams to this beautiful reality - you are my past, my present, 
              and my future. Happy early 19th birthday to the queen of my heart.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <Sparkles className="w-8 h-8 text-primary animate-sparkle" />
                <span className="text-xl font-display font-medium italic">
                  "Nearly a decade of loving you, and forever more to go"
                </span>
                <Sparkles className="w-8 h-8 text-primary animate-sparkle" />
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-primary">
                  Made with infinite love for my Chikwere 💙💚✨
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  My Mama Alpha, my Moonlight, my Chemu, my everything
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
