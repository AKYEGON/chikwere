import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurLoveStory from "@/components/OurLoveStory";
import MemoryGallery from "@/components/MemoryGallery";
import BucketList from "@/components/BucketList";
import PoetryCorner from "@/components/PoetryCorner";
import UgaliAchievement from "@/components/UgaliAchievement";
import CallToAction from "@/components/CallToAction";
import BirthdaySurprise from "@/components/BirthdaySurprise";
import { useState } from "react";
import { Cake, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  const [showBirthdaySurprise, setShowBirthdaySurprise] = useState(false);

  if (showBirthdaySurprise) {
    return <BirthdaySurprise onComplete={() => setShowBirthdaySurprise(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Birthday Countdown Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
            <Cake className="w-20 h-20 mx-auto mb-8 text-pink-500 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Your 19th Birthday Countdown
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              My beautiful Chikwere, tomorrow marks your special day! 
              <br />
              <span className="font-medium text-pink-600">Let's count down to the most magical moment together ✨</span>
            </p>
            <Link to="/countdown">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 hover:from-pink-600 hover:via-purple-600 hover:to-rose-600 text-white px-10 py-4 text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-2xl font-semibold"
              >
                <Clock className="w-6 h-6 mr-3" />
                See Birthday Countdown
                <Heart className="w-6 h-6 ml-3" fill="currentColor" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Love Story Section */}
      <section className="py-20 px-6">
        <OurLoveStory />
      </section>

      {/* Memory Gallery */}
      <MemoryGallery />

      {/* Bucket List Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
        <BucketList />
      </section>

      {/* Poetry Corner */}
      <section className="py-20 px-6">
        <PoetryCorner />
      </section>

      {/* Ugali Achievement */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100">
        <UgaliAchievement />
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-pink-200 via-purple-200 to-rose-200">
        <CallToAction />
      </section>
    </div>
  );
}
