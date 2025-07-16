
import { BookOpen, Heart, Feather } from "lucide-react";

const PoetryCorner = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
        <BookOpen className="w-16 h-16 mx-auto mb-8 text-purple-500 animate-pulse" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
          Poetry Corner
        </h2>
        
        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Feather className="w-8 h-8 text-pink-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-grow"></div>
            <Heart className="w-6 h-6 text-red-400 animate-heartbeat" fill="currentColor" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-grow"></div>
            <Feather className="w-8 h-8 text-pink-400" />
          </div>
          
          <div className="bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-2xl p-8 border border-pink-200/30">
            <p className="text-2xl text-gray-700 font-medium leading-relaxed italic">
              "A special poem dedicated to my beloved Chikwere will be personally given to you, my love."
            </p>
            <p className="text-lg text-pink-600 mt-4 font-medium">
              Words from the heart, written just for you ✨
            </p>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Some feelings are too precious for the digital world...<br />
              <span className="heartfelt-highlight">They deserve to be whispered in person 💕</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetryCorner;
