

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
  Axe,
  Trophy,
  Clock,
  TrendingUp,
  MapPin,
  MessageCircle,
  Gift,
  Rocket,
  Star,
  Coffee,
  Moon,
  Sun,
  Quote,
  Calendar,
  Music,
  Flower2,
  Rainbow
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBirthdayComplete = () => {
    setShowMainApp(true);
  };

  // Show birthday surprise gate until completed
  if (!showMainApp) {
    return <BirthdaySurprise onComplete={handleBirthdayComplete} />;
  }

  return (
    <div className="min-h-screen bg-background particles">
      <Header />
      <HeroSection />
      
      {/* Heartfelt Welcome Message */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-3xl">
              <Quote className="w-12 h-12 mx-auto mb-6 text-primary animate-pulse" />
              <blockquote className="text-2xl md:text-3xl font-display font-medium text-foreground mb-8 leading-relaxed italic">
                "In this little corner of the universe, every heartbeat writes a love letter, 
                every smile paints a masterpiece, and every 
                <span className="waah-highlight mx-2">Waah</span> 
                moment becomes a treasure that we'll cherish forever."
              </blockquote>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-primary fill-primary animate-heart-beat" />
                <span className="font-medium">With all our love, from our little world to yours</span>
                <Heart className="w-5 h-5 text-primary fill-primary animate-heart-beat" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Stats Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-medium">
              <Rainbow className="w-4 h-4 mr-2" />
              Our Love Story in Numbers
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Every Moment 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Counted with Love</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Each number tells a story, each statistic holds a memory, and every count represents 
              another step in our beautiful journey together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stagger-animation" style={{ animationDelay: '0.1s' }}>
              <StatsCard 
                title="Waah Moments"
                value={waahCount}
                subtitle="Pure joy captured ✨"
                icon={Sparkles}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.2s' }}>
              <StatsCard 
                title="Precious Memories"
                value={memoriesCount}
                subtitle="Forever in our hearts 💫"
                icon={Camera}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.3s' }}>
              <StatsCard 
                title="Chapati Promise"
                value={chapatiDebt}
                subtitle="Worth the wait 🥰"
                icon={ChefHat}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.4s' }}>
              <StatsCard 
                title="Dreams Together"
                value="∞"
                subtitle="Including our baby Alpha 👶"
                icon={Baby}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Love Chronicles */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Our Daily Love Chronicles
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Where every day brings new reasons to fall in love, new moments to treasure, 
              and new stories to tell in our forever-growing book of love
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* Morning Rituals */}
            <DashboardCard
              title="Morning Love Notes"
              description="Starting each day with whispered promises and gentle kisses that set our hearts aglow for the adventures ahead."
              icon={Sun}
              actionText="Add Morning Memory"
              className="love-card interactive-card"
            >
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-sm italic text-foreground mb-3">
                    "Good morning, my love. Another day to create beautiful memories together..."
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-primary fill-primary" />
                      From your heart to mine
                    </span>
                    <span>Today</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>365 morning smiles shared</span>
                </div>
              </div>
            </DashboardCard>

            {/* Enhanced Memory Gallery */}
            <div className="xl:col-span-2 group">
              <DashboardCard
                title="Memory Gallery"
                description="Every photograph holds a universe of emotions, every image captures a fragment of our infinite love story."
                icon={Camera}
                actionText="Capture New Memory"
                className="love-card interactive-card h-full"
              >
                <MemoryGallery />
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    12 magical moments this month
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Heart className="w-3 h-3 mr-1" />
                    Each one more beautiful than the last
                  </Badge>
                </div>
              </DashboardCard>
            </div>

            {/* Evening Reflections */}
            <DashboardCard
              title="Evening Reflections"
              description="As the stars emerge, we count our blessings and whisper our dreams into the gentle night."
              icon={Moon}
              actionText="Share Tonight's Blessing"
              className="love-card interactive-card"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">"Tonight I'm grateful for your laugh"</p>
                    <p className="text-xs text-muted-foreground">It lit up my entire world ✨</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Moon className="w-5 h-5 text-accent-foreground" />
                  <div>
                    <p className="text-sm font-medium">"Dream of tomorrow's adventures"</p>
                    <p className="text-xs text-muted-foreground">More love to create together 🌙</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Learning Together */}
            <DashboardCard
              title="Growing Together"
              description="Every lesson learned hand in hand, every skill shared with love, makes us stronger as one beautiful soul."
              icon={GraduationCap}
              actionText="Discover Something New"
              className="love-card interactive-card"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Learning: "The Art of Love"</p>
                    <p className="text-xs text-muted-foreground">Perfecting it every day 💕</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Coffee className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Mastering: Perfect coffee mornings</p>
                    <p className="text-xs text-muted-foreground">With extra love ☕</p>
                  </div>
                </div>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  <Trophy className="w-3 h-3 mr-1" />
                  Hearts forever intertwined
                </Badge>
              </div>
            </DashboardCard>

            {/* Future Dreams */}
            <DashboardCard
              title="Our Beautiful Future"
              description="Dreams painted with hope, plans written with love, and a future that sparkles with endless possibilities."
              icon={Target}
              actionText="Dream Together"
              className="love-card interactive-card"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Baby className="w-5 h-5 text-accent-foreground" />
                  <div>
                    <p className="text-sm font-medium">Welcome baby Alpha</p>
                    <p className="text-xs text-muted-foreground">Our greatest blessing awaits 👶</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                  <div>
                    <p className="text-sm font-medium">Our forever home</p>
                    <p className="text-xs text-muted-foreground">Where love lives and dreams grow 🏡</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Special Moments */}
            <DashboardCard
              title="Special Celebrations"
              description="Marking life's precious milestones with joy, laughter, and hearts full of gratitude for this beautiful journey."
              icon={Gift}
              actionText="Create New Celebration"
              className="love-card interactive-card"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Anniversary countdown</p>
                    <p className="text-xs text-muted-foreground">Every day is worth celebrating 💝</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Music className="w-5 h-5 text-accent-foreground" />
                  <div>
                    <p className="text-sm font-medium">Our song playlist</p>
                    <p className="text-xs text-muted-foreground">Melodies of our hearts 🎵</p>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-6 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              Milestones of Love
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Love <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Every achievement is a testament to our love, every milestone a celebration of the beautiful 
              life we're building together, one precious moment at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="stagger-animation" style={{ animationDelay: '0.1s' }}>
              <AchievementCard
                title="Mastering Ugali with Love"
                description="She didn't just learn to cook ugali—she infused it with love, patience, and the magic that makes everything taste like home."
                icon={ChefHat}
                isCompleted={true}
                completedDate="With pride and joy"
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.2s' }}>
              <AchievementCard
                title="Nature's Embrace with Chikwere"
                description="Planning our soul-stirring adventure where we'll walk among trees, breathe in freedom, and let nature witness our love."
                icon={Target}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.3s' }}>
              <AchievementCard
                title="Sunrise Runs with My Heart"
                description="Chasing dawn together, our feet in rhythm, our hearts in sync, starting each day as partners in this beautiful race of life."
                icon={Heart}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.4s' }}>
              <AchievementCard
                title="Starlit Evening Adventures"
                description="Creating magical moments under the celestial blanket, where every star becomes a witness to our whispered dreams and gentle touches."
                icon={Sparkles}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.5s' }}>
              <AchievementCard
                title="Preparing for Baby Alpha"
                description="Our hearts expanding, our love multiplying, as we prepare to welcome the most beautiful embodiment of our love into this world."
                icon={Baby}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.6s' }}>
              <AchievementCard
                title="Self-Care & Beauty Rituals"
                description="Pampering sessions where we refresh not just our appearance, but our souls, emerging renewed and even more beautiful together."
                icon={Flower2}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.7s' }}>
              <AchievementCard
                title="Building Our Empire Together"
                description="Strategic heart-to-heart talks about our future ventures, dreaming big and planning the legacy we'll create as one unstoppable team."
                icon={Trophy}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.8s' }}>
              <AchievementCard
                title="The Legendary Chapati Experience"
                description="The most anticipated culinary masterpiece, prepared with love by my talented chef—a taste of heaven worth every moment of sweet anticipation."
                icon={ChefHat}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.9s' }}>
              <AchievementCard
                title="Joyful Celebration Moments"
                description="Dancing like nobody's watching, laughing until our cheeks hurt, and celebrating the simple miracle of being alive and in love."
                icon={Heart}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heartfelt Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-16 rounded-3xl">
            <div className="animate-float mb-8">
              <Heart className="w-20 h-20 mx-auto text-primary animate-heart-beat fill-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
              Forever & Always,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                In Our Little World
              </span>
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
              In this sacred space where love blooms eternal, where every 
              <span className="waah-highlight mx-2">Waah</span> 
              moment becomes a prayer of gratitude, and where two hearts beat as one beautiful symphony. 
              This is our sanctuary, our love letter to the universe, our promise to forever choose each other.
            </p>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-lg font-medium italic">
                "With endless love, until the stars forget to shine"
              </span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

