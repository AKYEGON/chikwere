import { LucideIcon } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

interface StatsCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  icon: LucideIcon;
  className?: string;
}

const StatsCard = ({ title, value, subtitle, icon: Icon, className = "" }: StatsCardProps) => {
  return (
    <div className={`interactive-card p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover-glow border border-border/50 group ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 rounded-xl bg-primary/15 group-hover:bg-primary/25 transition-all duration-300 hover-bounce">
          <Icon className="w-8 h-8 text-primary animate-bounce-heart" />
        </div>
        <div className="text-right">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider glow-text">
          {title}
        </h3>
        <div className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          <AnimatedCounter 
            end={value} 
            className="animate-pulse-glow"
          />
        </div>
        <p className="text-base text-muted-foreground font-medium animate-fade-in-up">
          {subtitle} ✨
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-1 h-1 bg-accent rounded-full animate-sparkle"></div>
      </div>
    </div>
  );
};

export default StatsCard;