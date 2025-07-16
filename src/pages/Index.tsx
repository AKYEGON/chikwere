
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
