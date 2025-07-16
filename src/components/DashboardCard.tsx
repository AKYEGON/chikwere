import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const DashboardCard = ({ 
  title, 
  description, 
  icon: Icon, 
  actionText, 
  onClick,
  className = "",
  children 
}: DashboardCardProps) => {
  return (
    <div className={`love-card ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {children && (
        <div className="mb-4">
          {children}
        </div>
      )}
      
      <Button 
        variant="romantic" 
        className="w-full" 
        onClick={onClick}
      >
        {actionText}
      </Button>
    </div>
  );
};

export default DashboardCard;