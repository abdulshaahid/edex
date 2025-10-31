import { Home, Calendar, BarChart3, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const DesktopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">ES</span>
            </div>
            <span className="text-lg font-bold">Edex Life</span>
          </div>
          
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate(item.path)}
                  className={cn(
                    "rounded-full gap-2",
                    isActive && "bg-primary text-primary-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
