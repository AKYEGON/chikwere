
import { CheckCircle, Heart, MapPin, Coffee, Utensils, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const bucketListItems = [
  { icon: MapPin, text: "Taking a hike with Chikwere", completed: false },
  { icon: Users, text: "Having a morning run with my beautiful mama alpha", completed: false },
  { icon: Coffee, text: "Having late night out with my winsome woman", completed: false },
  { icon: Heart, text: "Planning to have the awaited alpha", completed: false },
  { icon: Users, text: "Accompanying my lovely wife to the salon and me to the barber shop", completed: false },
  { icon: Briefcase, text: "Having a serious business talk with my Mrs CEO", completed: false },
  { icon: Utensils, text: "My chef to cook me her famous chapatis", completed: false },
  { icon: Users, text: "Partying with her", completed: false },
];

const BucketList = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Our Pending Adventures
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          Beautiful moments we're going to create together, my love! 💕
        </p>
      </div>

      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl">
        <div className="grid gap-4">
          {bucketListItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300 border border-white/20"
            >
              <item.icon className="w-6 h-6 text-pink-500 flex-shrink-0" />
              <span className="text-gray-800 font-medium flex-grow">{item.text}</span>
              <div className="w-6 h-6 rounded-full border-2 border-pink-300 bg-white/50"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="romantic" size="lg" className="px-8">
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            Let's Start Creating Memories!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BucketList;
