import { useState } from "react";
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
  Star
} from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardCard from "@/components/DashboardCard";
import StatsCard from "@/components/StatsCard";
import AchievementCard from "@/components/AchievementCard";
import MemoryGallery from "@/components/MemoryGallery";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import cookingImage from "@/assets/cooking-illustration.jpg";

const Index = () => {
  const [waahCount] = useState(47); // This could be dynamic
  const [chapatiDebt] = useState(3);
  const [memoriesCount] = useState(12);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Stats Overview */}
      <section className="py-20 bg-gradient-to-br from-secondary/40 via-primary/5 to-accent/20 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-10 left-10 w-8 h-8 text-primary/20 animate-float" />
          <Sparkles className="absolute top-20 right-20 w-6 h-6 text-accent/20 animate-sparkle" />
          <Star className="absolute bottom-20 left-20 w-5 h-5 text-primary/20 animate-bounce-heart" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 glow-text animate-pulse-glow">
              Our Love in Numbers ✨
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl animate-fade-in-up">
              Every moment, every achievement, every dream counted with infinite love 💕
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard 
              title="Waah Moments"
              value={waahCount}
              subtitle="And counting every day"
              icon={Sparkles}
              className="bg-gradient-to-br from-primary/15 to-accent/15 animate-slide-in-left"
            />
            <StatsCard 
              title="Precious Memories"
              value={memoriesCount}
              subtitle="Captured forever in our hearts"
              icon={Camera}
              className="bg-gradient-to-br from-accent/15 to-primary/15 animate-slide-in-right"
            />
            <StatsCard 
              title="Chapati Debt"
              value={chapatiDebt}
              subtitle="Still owed to me 😉"
              icon={ChefHat}
              className="bg-gradient-to-br from-primary/15 to-accent/15 animate-slide-in-left"
            />
            <StatsCard 
              title="Dreams Shared"
              value="∞"
              subtitle="Including our baby Alpha"
              icon={Baby}
              className="bg-gradient-to-br from-accent/15 to-primary/15 animate-slide-in-right"
            />
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* Memory Gallery */}
            <DashboardCard
              title="Memory Gallery"
              description="Our most precious moments captured in time. Each photo is a Waah moment worth treasuring forever."
              icon={Camera}
              actionText="Add New Memory"
              className="xl:col-span-2"
            >
              <MemoryGallery />
            </DashboardCard>

            {/* Daily Love Notes */}
            <DashboardCard
              title="Daily Love Notes"
              description="Sweet messages and Waah moments that make our hearts flutter every single day."
              icon={Mail}
              actionText="Write a Love Note"
            >
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm italic text-foreground">
                  "Today was another beautiful Waah moment when..."
                </p>
                <p className="text-xs text-muted-foreground mt-2">- Your loving partner</p>
              </div>
            </DashboardCard>

            {/* Learning Adventures */}
            <DashboardCard
              title="Learning Adventures"
              description="Our journey of growing together, from new vocabulary to life skills."
              icon={GraduationCap}
              actionText="Explore Learning"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>Word: "Catechism" ✓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Axe className="w-4 h-4 text-muted-foreground" />
                  <span>How to use an axe (In Progress)</span>
                </div>
              </div>
            </DashboardCard>

            {/* Future Dreams */}
            <DashboardCard
              title="Future Dreams"
              description="Our vision board for the beautiful life we're building together, including our future son Alpha."
              icon={Target}
              actionText="Plan Our Future"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Baby className="w-4 h-4 text-primary" />
                  <span>Welcome baby Alpha</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Our dream home</span>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-muted-foreground text-lg">
              Celebrating every milestone in our beautiful journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AchievementCard
              title="Learning to Cook Ugali"
              description="She learned to cook ugali and I truly appreciate her effort and success!"
              icon={ChefHat}
              isCompleted={true}
              completedDate="Recently"
            />
            
            <AchievementCard
              title="Taking a Hike with Chikwere"
              description="Planning our adventure hike together in nature"
              icon={Target}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
            
            <AchievementCard
              title="Morning Run with Beautiful Mama Alpha"
              description="Having energizing morning runs together"
              icon={Heart}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
            
            <AchievementCard
              title="Late Night Out with My Winsome Woman"
              description="Planning romantic late night adventures together"
              icon={Sparkles}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
            
            <AchievementCard
              title="Planning for the Awaited Alpha"
              description="Our future baby Alpha - planning and preparing for this blessing"
              icon={Baby}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
            
            <AchievementCard
              title="Salon & Barber Shop Date"
              description="Accompanying my lovely wife to the salon while I go to the barber shop"
              icon={Camera}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
            
            <AchievementCard
              title="Serious Business Talk with Mrs CEO"
              description="Having important business discussions with my entrepreneurial partner"
              icon={Trophy}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
            
            <AchievementCard
              title="Famous Chapatis from My Chef"
              description="Waiting for my chef to cook me her famous chapatis"
              icon={ChefHat}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
            
            <AchievementCard
              title="Parting with Her"
              description="Special moments of celebration and joy together"
              icon={Heart}
              isCompleted={false}
              progress={0}
              maxProgress={1}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 romantic-gradient relative overflow-hidden">
        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-16 left-16 w-12 h-12 text-white/30 animate-float" fill="currentColor" />
          <Sparkles className="absolute top-32 right-24 w-8 h-8 text-white/30 animate-sparkle" />
          <Star className="absolute bottom-24 left-32 w-6 h-6 text-white/30 animate-bounce-heart" fill="currentColor" />
          <Heart className="absolute bottom-40 right-16 w-10 h-10 text-white/20 animate-float" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-8 glow-text animate-pulse-glow">
              Ready for Another Waah Moment? ✨
            </h2>
            <p className="text-primary-foreground/95 text-xl md:text-2xl mb-12 font-light leading-relaxed animate-fade-in-up">
              Every day with you brings new joys, new memories, and infinite reasons to say "Waah!" 💕
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg bg-white/20 border-white/40 text-white hover:bg-white/30 hover-glow backdrop-blur-sm animate-slide-in-left">
                <Calendar className="w-6 h-6 animate-bounce-heart" />
                Plan a Romantic Date
              </Button>
              <Button variant="waah" size="lg" className="px-10 py-4 text-lg animate-pulse-glow hover-glow animate-slide-in-right">
                <Sparkles className="w-6 h-6 animate-sparkle" />
                Share a Waah Moment
              </Button>
            </div>
            
            {/* Love meter */}
            <div className="mt-12 inline-block">
              <div className="interactive-card px-8 py-4 rounded-full backdrop-blur-md bg-white/15 border border-white/30">
                <div className="flex items-center gap-3">
                  <span className="text-white/90 text-lg">💖 Love Meter:</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart 
                        key={i} 
                        className="w-5 h-5 text-red-400 animate-bounce-heart" 
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold text-lg animate-rotate-colors">OVERFLOWING!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;