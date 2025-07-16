
import { Trophy, Star, ChefHat, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const UgaliAchievement = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
        <Trophy className="w-20 h-20 mx-auto mb-8 text-yellow-500 animate-bounce" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Achievement Unlocked! 🎉
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-2xl p-8 border border-yellow-200/30">
            <ChefHat className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Master Chef: Ugali Edition
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              My beautiful Chikwere learned to cook the perfect ugali! 👩‍🍳
            </p>
            <p className="text-lg text-orange-600 mt-4 font-medium">
              From my heart to yours - I'm so proud of you, my talented chef! ✨
            </p>
          </div>
          
          <div className="flex justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 animate-pulse" fill="currentColor" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="romantic" size="lg" className="px-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Celebrate Our Chef!
            </Button>
          </div>
          
          <p className="text-gray-600 text-lg italic mt-6">
            "The way to a man's heart is through his stomach" - and you've mastered it perfectly! 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default UgaliAchievement;
