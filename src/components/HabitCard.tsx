import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HabitCardProps {
  title: string;
  icon: LucideIcon;
  status: "completed" | "pending" | "missed";
  description?: string;
  onClick?: () => void;
}

export const HabitCard = ({ 
  title, 
  icon: Icon, 
  status, 
  description,
  onClick 
}: HabitCardProps) => {
  const statusColors = {
    completed: "border-success/20 bg-success/5",
    pending: "border-pending/20 bg-pending/5",
    missed: "border-destructive/20 bg-destructive/5",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-3xl border-2 bg-card p-4 shadow-soft transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg",
        statusColors[status]
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl",
          status === "completed" && "bg-success/10",
          status === "pending" && "bg-pending/10",
          status === "missed" && "bg-destructive/10"
        )}>
          <Icon className={cn(
            "h-6 w-6",
            status === "completed" && "text-success",
            status === "pending" && "text-pending",
            status === "missed" && "text-destructive"
          )} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground truncate">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
