import { LucideIcon, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AchievementCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isCompleted: boolean;
  progress?: number;
  maxProgress?: number;
  completedDate?: string;
  className?: string;
}

const AchievementCard = ({
  title,
  description,
  icon: Icon,
  isCompleted,
  progress = 0,
  maxProgress = 100,
  completedDate,
  className = ""
}: AchievementCardProps) => {
  const progressPercentage = maxProgress > 0 ? (progress / maxProgress) * 100 : 0;

  return (
    <div className={`love-card ${isCompleted ? 'bg-primary/5 border-primary/20' : ''} ${className}`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full ${isCompleted ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
          {isCompleted ? (
            <Check className="w-6 h-6" />
          ) : (
            <Icon className="w-6 h-6" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h4 className="text-lg font-display font-semibold text-foreground">
              {title}
            </h4>
            {isCompleted && (
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Completed!
              </Badge>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm mb-3">
            {description}
          </p>
          
          {!isCompleted && maxProgress > 0 && (
            <div className="mb-3">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Progress</span>
                <span>{progress}/{maxProgress}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}
          
          {isCompleted && completedDate && (
            <p className="text-xs text-muted-foreground">
              Completed on {completedDate}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;