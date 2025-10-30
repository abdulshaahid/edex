import { ProgressRing } from "@/components/ProgressRing";
import { HabitCard } from "@/components/HabitCard";
import { Button } from "@/components/ui/button";
import { 
  Moon, 
  Dumbbell, 
  Brain, 
  BookOpen, 
  Users, 
  Sparkles,
  TrendingUp,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const todayProgress = 68;

  const habitSections = [
    { title: "Sleep Tracker", icon: Moon, status: "completed" as const, description: "8h 30m logged" },
    { title: "Fit & Strong", icon: Dumbbell, status: "completed" as const, description: "Workout completed" },
    { title: "Mind Gym", icon: Brain, status: "pending" as const, description: "Pending completion" },
    { title: "Real World Problems", icon: BookOpen, status: "pending" as const, description: "Not started" },
    { title: "Power Circle", icon: Users, status: "missed" as const, description: "Overdue" },
    { title: "Growth Fuel", icon: Sparkles, status: "completed" as const, description: "Content shared" },
  ];

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <header className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-muted-foreground">Let's track your progress today</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">ES</span>
          </div>
        </div>
      </header>

      <section className="mb-8 animate-scale-in" style={{ animationDelay: "100ms" }}>
        <div className="rounded-3xl bg-card p-6 shadow-soft border border-border/50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold mb-1">Today's Progress</h2>
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <ProgressRing progress={todayProgress} />
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">12</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">4</div>
              <div className="text-xs text-muted-foreground">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive">2</div>
              <div className="text-xs text-muted-foreground">Missed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Your Tasks</h2>
          <Button 
            onClick={() => navigate("/entry")}
            size="sm"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Entry
          </Button>
        </div>
        
        <div className="grid gap-3">
          {habitSections.map((habit, index) => (
            <div
              key={habit.title}
              className="animate-slide-up"
              style={{ animationDelay: `${300 + index * 50}ms` }}
            >
              <HabitCard
                {...habit}
                onClick={() => navigate("/entry")}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">7-Day Streak! 🔥</h3>
              <p className="text-sm text-muted-foreground">
                You're on fire! Keep up the amazing work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
