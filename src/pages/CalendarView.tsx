import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayStatuses: Record<number, "completed" | "missed" | "pending"> = {
    1: "completed", 2: "completed", 3: "missed", 5: "completed",
    7: "completed", 8: "pending", 10: "completed", 12: "completed",
    14: "missed", 15: "completed", 17: "pending",
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="min-h-screen pb-24 md:pb-8 px-4 md:px-12 pt-8 md:pt-12">
      <header className="mb-10 md:mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
          Calendar
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">Track your daily progress</p>
      </header>

      <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 md:gap-12">
        {/* Calendar Section */}
        <div className="rounded-3xl bg-card p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 animate-scale-in">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={previousMonth}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h2 className="text-2xl md:text-3xl font-bold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextMonth}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2 md:gap-3 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 md:gap-3">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square" />
          ))}
          
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const status = dayStatuses[day];
            const isToday = day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();

            return (
              <button
                key={day}
                className={cn(
                  "aspect-square rounded-2xl flex items-center justify-center text-sm font-medium transition-all duration-200 hover:scale-105",
                  !status && "bg-muted/30 text-muted-foreground",
                  status === "completed" && "bg-success/10 text-success border-2 border-success/30",
                  status === "missed" && "bg-destructive/10 text-destructive border-2 border-destructive/30",
                  status === "pending" && "bg-warning/10 text-warning border-2 border-warning/30",
                  isToday && "ring-2 ring-primary ring-offset-2"
                )}
              >
                {day}
              </button>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-lg bg-success/20 border-2 border-success/40" />
              <span className="text-xs text-muted-foreground">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-lg bg-warning/20 border-2 border-warning/40" />
              <span className="text-xs text-muted-foreground">Pending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-lg bg-destructive/20 border-2 border-destructive/40" />
              <span className="text-xs text-muted-foreground">Missed</span>
            </div>
          </div>
        </div>
        </div>

        {/* Summary Section */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h3 className="font-bold text-2xl md:text-3xl">This Month's Summary</h3>
          <div className="space-y-4">
            <div className="rounded-2xl bg-card p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-success/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">12</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Days Completed</div>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
