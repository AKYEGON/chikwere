
import { Heart, Star, Sparkles } from "lucide-react";

const OurLoveStory = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
        <Heart className="w-16 h-16 mx-auto mb-8 text-pink-500 animate-pulse" fill="currentColor" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
          Our Beautiful Love Story
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p className="heartfelt-highlight">
            From baby class to teenage love - nearly a decade of knowing you, beautiful Chikwere
          </p>
          <p>
            You were my childhood crush, the girl who captured my heart from the very beginning. 
            Now, after 4 magical months of dating, you've become my everything.
          </p>
          <p className="text-pink-600 font-medium">
            My beloved Mama Alpha, my moonlight, my precious Chemu - you are my world! ✨
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" fill="currentColor" />
            <Sparkles className="w-6 h-6 text-pink-400 animate-bounce" />
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLoveStory;
