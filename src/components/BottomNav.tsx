import { Home, Calendar, BarChart3, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2 z-50">
      <Dock className="items-end pb-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <DockItem
              key={item.path}
              className={cn(
                "aspect-square rounded-full transition-colors cursor-pointer",
                isActive
                  ? "bg-primary/90"
                  : "bg-neutral-700"
              )}
              onClick={() => navigate(item.path)}
            >
              <DockLabel>{item.label}</DockLabel>
              <DockIcon>
                <Icon 
                  className={cn(
                    "h-full w-full transition-colors",
                    isActive 
                      ? "text-primary-foreground" 
                      : "text-neutral-300"
                  )}
                />
              </DockIcon>
            </DockItem>
          );
        })}
      </Dock>
    </div>
  );
};
