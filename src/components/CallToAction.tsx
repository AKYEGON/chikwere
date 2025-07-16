
import { Heart, Gift, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Gift className="w-20 h-20 text-pink-500 animate-bounce" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
          Happy 19th Birthday!
        </h2>
        
        <div className="space-y-6 mb-10">
          <p className="text-2xl text-gray-800 font-medium leading-relaxed">
            My beautiful Chikwere, Mama Alpha, my moonlight, my precious Chemu...
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Tomorrow marks your special day, and I can't wait to celebrate the amazing woman you've become! 
            From our baby class days to this beautiful moment - you've always been and will always be my everything.
          </p>
          <p className="heartfelt-highlight text-xl">
            Here's to another year of your beautiful life and to many more adventures together! 🎉💕
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/countdown">
            <Button variant="romantic" size="lg" className="px-8 py-4 text-xl">
              <Calendar className="w-6 h-6 mr-3" />
              See Birthday Countdown
            </Button>
          </Link>
          
          <Button variant="glass" size="lg" className="px-8 py-4 text-xl">
            <Heart className="w-6 h-6 mr-3" fill="currentColor" />
            Send Love Message
          </Button>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-600 italic">
            "With all my love and endless devotion" 💝
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
