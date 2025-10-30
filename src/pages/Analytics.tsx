import { ProgressRing } from "@/components/ProgressRing";
import { TrendingUp, Target, Zap, Award } from "lucide-react";

const Analytics = () => {
  const categories = [
    { name: "Sleep", progress: 92, color: "text-blue-500" },
    { name: "Fitness", progress: 85, color: "text-orange-500" },
    { name: "Mind Gym", progress: 78, color: "text-purple-500" },
    { name: "Growth Fuel", progress: 88, color: "text-primary" },
    { name: "Power Circle", progress: 65, color: "text-pink-500" },
    { name: "Brand Building", progress: 72, color: "text-cyan-500" },
  ];

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Your progress insights</p>
      </header>

      <section className="mb-6 animate-scale-in">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 border border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold">Overall Progress</h2>
              <p className="text-sm text-muted-foreground">Last 30 days</p>
            </div>
            <ProgressRing progress={82} size={80} strokeWidth={6} />
          </div>
          
          <div className="grid grid-cols-4 gap-3 pt-4 border-t border-primary/10">
            <div className="text-center">
              <div className="text-xl font-bold">24</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-success">18</div>
              <div className="text-xs text-muted-foreground">Complete</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-warning">4</div>
              <div className="text-xs text-muted-foreground">Partial</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-destructive">2</div>
              <div className="text-xs text-muted-foreground">Missed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
        <h2 className="text-xl font-bold mb-4">Category Breakdown</h2>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="rounded-2xl bg-card p-4 shadow-soft border border-border/50 animate-slide-up"
              style={{ animationDelay: `${150 + index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{category.name}</span>
                <span className={`font-bold ${category.color}`}>{category.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${category.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-card p-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold">7</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-success/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-xl font-bold">89%</div>
                <div className="text-xs text-muted-foreground">Avg Score</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-xl font-bold">+12%</div>
                <div className="text-xs text-muted-foreground">vs Last Week</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <div className="text-xl font-bold">24</div>
                <div className="text-xs text-muted-foreground">Badges</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
