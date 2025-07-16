
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
  Mail,
  Calendar,
  Star,
  Zap,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  MessageCircle,
  Gift,
  Rocket
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
      
      {/* Enhanced Stats Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Live Stats
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Our Love in 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Numbers</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Every moment, every achievement, every dream counted with love and documented with care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stagger-animation" style={{ animationDelay: '0.1s' }}>
              <StatsCard 
                title="Waah Moments"
                value={waahCount}
                subtitle="And counting..."
                icon={Sparkles}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.2s' }}>
              <StatsCard 
                title="Precious Memories"
                value={memoriesCount}
                subtitle="Captured forever"
                icon={Camera}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.3s' }}>
              <StatsCard 
                title="Chapati Debt"
                value={chapatiDebt}
                subtitle="Payment pending 😉"
                icon={ChefHat}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.4s' }}>
              <StatsCard 
                title="Dreams Shared"
                value="∞"
                subtitle="Including baby Alpha"
                icon={Baby}
                className="love-card group hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Dashboard */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Our Digital Love Space
            </h2>
            <p className="text-muted-foreground text-lg">
              Where memories, dreams, and moments come together beautifully
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* Enhanced Memory Gallery */}
            <div className="xl:col-span-2 group">
              <DashboardCard
                title="Memory Gallery"
                description="Our most precious moments captured in time. Each photo tells a story of love, laughter, and Waah moments."
                icon={Camera}
                actionText="Add New Memory"
                className="love-card interactive-card h-full"
              >
                <MemoryGallery />
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    12 new this month
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Heart className="w-3 h-3 mr-1" />
                    Most loved
                  </Badge>
                </div>
              </DashboardCard>
            </div>

            {/* Enhanced Love Notes */}
            <DashboardCard
              title="Daily Love Notes"
              description="Sweet messages and Waah moments that make our hearts flutter."
              icon={MessageCircle}
              actionText="Write a Love Note"
              className="love-card interactive-card"
            >
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-sm italic text-foreground mb-2">
                    "Today was another beautiful Waah moment when you smiled at me across the room..."
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>- Your loving partner</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      2 hours ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>47 love notes shared</span>
                </div>
              </div>
            </DashboardCard>

            {/* Learning Adventures */}
            <DashboardCard
              title="Learning Together"
              description="Our journey of growing together, from new vocabulary to life skills."
              icon={GraduationCap}
              actionText="Explore Learning"
              className="love-card interactive-card"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Word: "Catechism"</p>
                    <p className="text-xs text-muted-foreground">Completed ✓</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Axe className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">How to use an axe</p>
                    <p className="text-xs text-muted-foreground">In Progress</p>
                  </div>
                </div>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  <Trophy className="w-3 h-3 mr-1" />
                  5 skills mastered
                </Badge>
              </div>
            </DashboardCard>

            {/* Future Dreams */}
            <DashboardCard
              title="Future Dreams"
              description="Our vision board for the beautiful life we're building together."
              icon={Target}
              actionText="Plan Our Future"
              className="love-card interactive-card"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Baby className="w-5 h-5 text-accent-foreground" />
                  <div>
                    <p className="text-sm font-medium">Welcome baby Alpha</p>
                    <p className="text-xs text-muted-foreground">Our future blessing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Heart className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Our dream home</p>
                    <p className="text-xs text-muted-foreground">Love-filled sanctuary</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Quick Actions */}
            <DashboardCard
              title="Quick Actions"
              description="Fast access to your most-used features and recent activities."
              icon={Rocket}
              actionText="View All"
              className="love-card interactive-card"
            >
              <div className="grid grid-cols-2 gap-2">
                <Button variant="glass" size="sm" className="h-12 flex-col gap-1">
                  <Gift className="w-4 h-4" />
                  <span className="text-xs">Surprise</span>
                </Button>
                <Button variant="glass" size="sm" className="h-12 flex-col gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">Date</span>
                </Button>
                <Button variant="glass" size="sm" className="h-12 flex-col gap-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Together</span>
                </Button>
                <Button variant="glass" size="sm" className="h-12 flex-col gap-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs">Waah</span>
                </Button>
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
              Our Journey
            </Badge>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Love <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Celebrating every milestone in our beautiful journey together, from small victories to grand adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="stagger-animation" style={{ animationDelay: '0.1s' }}>
              <AchievementCard
                title="Mastering Ugali Together"
                description="She conquered the art of cooking ugali and I'm genuinely impressed by her dedication and skill!"
                icon={ChefHat}
                isCompleted={true}
                completedDate="Recently"
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.2s' }}>
              <AchievementCard
                title="Nature Adventure with Chikwere"
                description="Planning our epic hiking adventure to explore nature's beauty together"
                icon={Target}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.3s' }}>
              <AchievementCard
                title="Morning Runs with Mama Alpha"
                description="Energizing sunrise runs to start our days with love and endorphins"
                icon={Heart}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.4s' }}>
              <AchievementCard
                title="Romantic Night Adventures"
                description="Creating magical late-night moments under the stars together"
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
                description="Our most precious future blessing - planning every detail with love"
                icon={Baby}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.6s' }}>
              <AchievementCard
                title="Beauty & Grooming Date"
                description="Pampering sessions where we both get refreshed and renewed together"
                icon={Camera}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.7s' }}>
              <AchievementCard
                title="Business Talks with CEO"
                description="Strategic discussions about our future ventures and entrepreneurial dreams"
                icon={Trophy}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.8s' }}>
              <AchievementCard
                title="The Famous Chapati Experience"
                description="Eagerly awaiting my chef's legendary chapatis - the anticipation is real!"
                icon={ChefHat}
                isCompleted={false}
                progress={0}
                maxProgress={1}
                className="love-card"
              />
            </div>
            
            <div className="stagger-animation" style={{ animationDelay: '0.9s' }}>
              <AchievementCard
                title="Celebration Moments"
                description="Special occasions where we dance, laugh, and create unforgettable memories"
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

      {/* Modern Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-3xl">
            <div className="animate-float mb-8">
              <Sparkles className="w-16 h-16 mx-auto text-primary animate-glow" />
            </div>
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Ready for Another 
              <span className="waah-highlight mx-2">Waah</span>
              Moment?
            </h2>
            <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
              Every day with you brings new joys, new memories, and countless reasons to say "Waah!" 
              Let's create another beautiful chapter in our love story.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="glass" size="lg" className="group">
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Plan a Romantic Date
              </Button>
              <Button variant="waah" size="lg" className="group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Share a Waah Moment
              </Button>
              <Button variant="floating" size="lg" className="group">
                <Heart className="w-5 h-5 mr-2 group-hover:animate-heart-beat" />
                Send Love
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
