import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
            <Sparkles className="w-4 h-4 text-accent absolute -top-1 -right-1 animate-pulse-glow" />
          </div>
          <div>
            <h1 className="text-xl font-display font-semibold text-foreground">Our Little World</h1>
            <p className="text-xs text-muted-foreground">Where love lives</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="romantic" size="sm">
            <Sparkles className="w-4 h-4" />
            Add Memory
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;