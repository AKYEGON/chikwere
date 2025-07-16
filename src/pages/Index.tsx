
import { useState, useEffect } from "react";
import { 
  Camera, 
  Heart, 
  BookOpen, 
  Target, 
  Sparkles, 
  ChefHat, 
  Baby, 
  GraduationCap,
  Trophy,
  Clock,
  TrendingUp,
  MapPin,
  MessageCircle,
  Gift,
  Star,
  Coffee,
  Moon,
  Sun,
  Quote,
  Calendar,
  Music,
  Flower2,
  Rainbow,
  Crown,
  Gem,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BirthdaySurprise from "@/components/BirthdaySurprise";
import DashboardCard from "@/components/DashboardCard";
import StatsCard from "@/components/StatsCard";
import AchievementCard from "@/components/AchievementCard";
import MemoryGallery from "@/components/MemoryGallery";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [waahCount] = useState(47);
  const [chapatiDebt] = useState(3);
  const [memoriesCount] = useState(12);
  const [showMainApp, setShowMainApp] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentLoveMessage, setCurrentLoveMessage] = useState(0);

  // Heartfelt daily love messages that auto-generate
  const dailyLoveMessages = [
    {
      message: "You make my world brighter just by existing, my beautiful Chikwere 💫",
      day: "Day 1",
      mood: "radiant"
    },
    {
      message: "I love how you say 'waah' - it's become our special language of love 💕",
      day: "Day 2", 
      mood: "playful"
    },
    {
      message: "Your ugali was perfect, but you're infinitely more perfect than any meal 🥰",
      day: "Day 3",
      mood: "proud"
    },
    {
      message: "I can't wait to teach baby Alpha to say 'waah' just like mama 👶✨",
      day: "Day 4",
      mood: "dreamy"
    },
    {
      message: "Every moment with you feels like I'm living in a beautiful dream 🌙💙",
      day: "Day 5",
      mood: "romantic"
    },
    {
      message: "Your smile is my favorite work of art, painted fresh every morning 🎨💚",
      day: "Day 6",
      mood: "artistic"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through love messages every 5 seconds
    const messageInterval = setInterval(() => {
      setCurrentLoveMessage(prev => (prev + 1) % dailyLoveMessages.length);
    }, 5000);

    return () => clearInterval(messageInterval);
  }, []);

  const handleBirthdayComplete = () => {
    setShowMainApp(true);
  };

  // Show birthday surprise gate until completed
  if (!showMainApp) {
    return <BirthdaySurprise onComplete={handleBirthdayComplete} />;
  }

  const getMoodGradient = (mood: string) => {
    switch (mood) {
      case "radiant": return "from-primary/25 to-accent/20";
      case "playful": return "from-accent/20 to-primary/15";
      case "proud": return "from-primary/20 to-secondary/20";
      case "dreamy": return "from-accent/15 to-primary/20";
      case "romantic": return "from-primary/30 to-accent/25";
      case "artistic": return "from-secondary/20 to-primary/15";
      default: return "from-primary/20 to-accent/15";
    }
  };

  return (
    <div className="min-h-screen bg-background love-particles">
      <Header />
      <HeroSection />
      
      {/* Magical Welcome Message - The Love Letter Comes Alive */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-magic-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="glass-morphism p-16 rounded-3xl love-card interactive-love-card">
              <div className="animate-heartFloat mb-8">
                <Crown className="w-16 h-16 mx-auto text-primary animate-loveGlow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 leading-relaxed">
                My Dearest Chikwere, Future Mama Alpha 👑
              </h2>
              <Quote className="w-12 h-12 mx-auto mb-8 text-accent animate-gentlePulse" />
              <blockquote className="text-xl md:text-2xl font-display font-medium text-foreground mb-10 leading-relaxed italic">
                "This digital sanctuary is dedicated to YOU - the woman who transforms ordinary moments into extraordinary memories.
                From your triumphant ugali mastery that filled my heart with pride, to every sweet 
                <span className="heartfelt-highlight mx-2 animate-sparkle">Waah</span> 
                that escapes your lips like music, you are my everything.
                <br /><br />
                Welcome to our story, my beloved future wife.
                <br />
                Welcome to our dreams, future mother of Alpha.
                <br />
                Welcome to forever, my heart's home."
              </blockquote>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Heart className="w-6 h-6 text-primary fill-primary animate-heartBeat" />
                <span className="font-display text-lg italic">With endless love, until the stars forget to shine</span>
                <Heart className="w-6 h-6 text-primary fill-primary animate-heartBeat" />
              </div>
              <div className="mt-8">
                <p className="text-primary font-semibold text-lg">- Your Forever Mr. Yegon 💙</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Generating Daily Love Letters */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-8 py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              Daily Love Letters
            </Badge>
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Messages From My Heart to Yours
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every day brings a new reason to fall deeper in love with you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`love-card interactive-love-card bg-gradient-to-br ${getMoodGradient(dailyLoveMessages[currentLoveMessage].mood)} transition-all duration-1000`}>
              <div className="text-center p-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Gem className="w-6 h-6 text-primary animate-sparkle" />
                  <span className="text-primary font-semibold text-lg">
                    {dailyLoveMessages[currentLoveMessage].day}
                  </span>
                  <Gem className="w-6 h-6 text-primary animate-sparkle" />
                </div>
                <p className="text-2xl font-display font-medium text-foreground leading-relaxed mb-6">
                  {dailyLoveMessages[currentLoveMessage].message}
                </p>
                <div className="flex justify-center gap-2">
                  {dailyLoveMessages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentLoveMessage 
                          ? 'bg-primary scale-125' 
                          : 'bg-primary/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Stats Overview with Emotional Impact */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 floating-hearts opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-base font-medium">
              <Rainbow className="w-5 h-5 mr-2" />
              Our Love Story in Sacred Numbers
            </Badge>
            <h2 className="text-6xl font-display font-bold text-foreground mb-8 leading-tight">
              Every Heartbeat 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Tells Our Story</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Each number holds the weight of our love, each statistic carries the warmth of a thousand embraces, 
              and every count represents another beautiful chapter in our eternal romance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="stagger-love-animation" style={{ animationDelay: '0.1s' }}>
              <StatsCard 
                title="Waah Moments"
                value={waahCount}
                subtitle="Pure magic captured ✨💫"
                icon={Sparkles}
                className="love-card interactive-love-card shadow-romantic-glow"
              />
            </div>
            <div className="stagger-love-animation" style={{ animationDelay: '0.2s' }}>
              <StatsCard 
                title="Precious Memories"
                value={memoriesCount}
                subtitle="Treasured in our hearts 💎💕"
                icon={Camera}
                className="love-card interactive-love-card shadow-gentle-lift"
              />
            </div>
            <div className="stagger-love-animation" style={{ animationDelay: '0.3s' }}>
              <StatsCard 
                title="Chapati Promise"
                value={chapatiDebt}
                subtitle="Worth every sweet wait 🥰🍽️"
                icon={ChefHat}
                className="love-card interactive-love-card shadow-romantic-glow"
              />
            </div>
            <div className="stagger-love-animation" style={{ animationDelay: '0.4s' }}>
              <StatsCard 
                title="Dreams Together"
                value="∞"
                subtitle="Including our baby Alpha 👶💙"
                icon={Baby}
                className="love-card interactive-love-card shadow-gentle-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery - Moments That Matter */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <Camera className="w-5 h-5 mr-2" />
              Moments That Matter
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Memory Palace</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Each photograph captures a universe of emotions, every smile tells a story of our infinite love, 
              and every moment preserved here is a treasure beyond measure
            </p>
          </div>

          <div className="max-w-6xl mx-auto love-card interactive-love-card">
            <MemoryGallery />
          </div>
        </div>
      </section>

      {/* Learning Together Game Zone */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <GraduationCap className="w-5 h-5 mr-2" />
              Growing Together
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Learning & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Loving Together</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Every skill learned hand in hand, every challenge overcome together, 
              makes our bond stronger and our love deeper
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Word Challenge Game */}
            <DashboardCard
              title="Word Challenge Adventure"
              description="Master beautiful words like 'catechism' together, turning learning into a loving game filled with laughter and discovery."
              icon={BookOpen}
              actionText="Start Learning Together"
              className="love-card interactive-love-card shadow-romantic-glow"
            >
              <div className="space-y-4">
                <div className="glass-morphism p-4 rounded-xl">
                  <p className="text-lg font-semibold text-primary mb-2">Today's Word: "Catechism"</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Learning this beautiful word together, just like we learn life together 💕"
                  </p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm">Pronunciation mastered with love!</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-full justify-center py-2">
                  <Trophy className="w-4 h-4 mr-2" />
                  Learning Level: Advanced Lover 💙
                </Badge>
              </div>
            </DashboardCard>

            {/* Cooking Achievements */}
            <DashboardCard
              title="Culinary Love Journey"
              description="From that triumphant ugali victory to future chapati mastery - every dish is seasoned with love and pride."
              icon={ChefHat}
              actionText="Unlock New Recipes"
              className="love-card interactive-love-card shadow-gentle-lift"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Trophy className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Ugali Master Achievement</p>
                    <p className="text-xs text-muted-foreground">Unlocked with pride and joy! 🏆</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                  <div>
                    <p className="text-sm font-medium">Chapati Challenge: Coming Soon</p>
                    <p className="text-xs text-muted-foreground">The most anticipated masterpiece 🥞</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Life Skills Adventure */}
            <DashboardCard
              title="Life Skills Adventure"
              description="From axe-wielding confidence to daily life mastery - we're building an unstoppable team of love and capability."
              icon={Target}
              actionText="Explore New Skills"
              className="love-card interactive-love-card shadow-romantic-glow"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Confidence Building</p>
                    <p className="text-xs text-muted-foreground">Growing stronger every day 💪</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                  <div>
                    <p className="text-sm font-medium">Love & Life Balance</p>
                    <p className="text-xs text-muted-foreground">Perfect harmony achieved 💕</p>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Our Future Dreams Vision Board */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 magical-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-8 py-3">
              <Target className="w-5 h-5 mr-2" />
              Our Beautiful Future
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Dreams Painted with 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Hope & Love</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Every dream we share becomes a star in our constellation of love, 
              guiding us toward a future brighter than we ever imagined possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Baby Alpha Dreams */}
            <div className="stagger-love-animation" style={{ animationDelay: '0.1s' }}>
              <AchievementCard
                title="Welcome Baby Alpha 👶"
                description="Our hearts expanding, our love multiplying, as we prepare to welcome the most beautiful embodiment of our love into this world."
                icon={Baby}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card interactive-love-card shadow-gentle-lift"
              />
            </div>
            
            {/* Dream Home */}
            <div className="stagger-love-animation" style={{ animationDelay: '0.2s' }}>
              <AchievementCard
                title="Our Forever Home 🏡"
                description="Building a sanctuary where love lives, dreams grow, and every room echoes with laughter and joy."
                icon={Heart}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card interactive-love-card shadow-romantic-glow"
              />
            </div>
            
            {/* Adventure Together */}
            <div className="stagger-love-animation" style={{ animationDelay: '0.3s' }}>
              <AchievementCard
                title="Chikwere Nature Adventure 🌲"
                description="Walking among trees, breathing in freedom, letting nature witness our love in its purest form."
                icon={MapPin}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card interactive-love-card shadow-gentle-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Closing - The Promise */}
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
                In Our Little World
              </span>
            </h2>
            <p className="text-muted-foreground text-2xl md:text-3xl mb-16 leading-relaxed max-w-4xl mx-auto">
              In this sacred digital space where love blooms eternal, where every 
              <span className="heartfelt-highlight mx-2">Waah</span> 
              moment becomes a prayer of gratitude, and where two hearts beat as one beautiful symphony. 
              This is our sanctuary, our love letter to the universe, our promise to forever choose each other.
            </p>
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <Sparkles className="w-8 h-8 text-primary animate-sparkle" />
                <span className="text-xl font-display font-medium italic">
                  "With endless love, until the stars forget to shine"
                </span>
                <Sparkles className="w-8 h-8 text-primary animate-sparkle" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-primary">
                  Made with infinite love for my Chikwere 💙💚✨
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  Future mama of Alpha, queen of my heart, waah-moment creator
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
