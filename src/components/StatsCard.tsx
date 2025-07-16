import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  className?: string;
  animated?: boolean;
}

const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  className = "",
  animated = true 
}: StatsCardProps) => {
  return (
    <div className={`love-card text-center ${className} ${animated ? 'hover:scale-110' : ''}`}>
      <div className="flex flex-col items-center">
        <div className="p-4 rounded-full bg-primary/10 mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        <div className="text-3xl font-display font-bold text-foreground mb-2">
          {value}
        </div>
        
        <h4 className="text-sm font-medium text-muted-foreground mb-1">
          {title}
        </h4>
        
        {subtitle && (
          <p className="text-xs text-muted-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;