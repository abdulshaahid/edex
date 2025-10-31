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
    <div className="min-h-screen pb-24 md:pb-8 px-4 md:px-12 pt-8 md:pt-12">
      <header className="mb-10 md:mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
          Analytics
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">Your progress insights</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Overall Progress & Achievements */}
        <div className="space-y-8">
          <section className="animate-scale-in">
            <div className="rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 p-8 md:p-10 border border-primary/30 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Overall Progress</h2>
                  <p className="text-sm md:text-base text-muted-foreground">Last 30 days</p>
                </div>
                <ProgressRing progress={82} size={90} strokeWidth={7} />
              </div>
            
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">24</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-success mb-1">18</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-warning mb-1">4</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Partial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-destructive mb-1">2</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Missed</div>
                </div>
              </div>
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card p-5 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/30">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-xs text-muted-foreground font-medium">Day Streak</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-5 shadow-lg border border-border/50 hover:shadow-xl hover:border-success/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-success to-success/80 flex items-center justify-center shadow-md shadow-success/30">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">89%</div>
                    <div className="text-xs text-muted-foreground font-medium">Avg Score</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-5 shadow-lg border border-border/50 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-500/80 flex items-center justify-center shadow-md shadow-orange-500/30">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+12%</div>
                    <div className="text-xs text-muted-foreground font-medium">vs Last Week</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-5 shadow-lg border border-border/50 hover:shadow-xl hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-500/80 flex items-center justify-center shadow-md shadow-purple-500/30">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-xs text-muted-foreground font-medium">Badges</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Category Breakdown */}
        <div>
          <section className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Category Breakdown</h2>
            <div className="grid gap-4">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  className="rounded-2xl bg-card p-5 md:p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-base md:text-lg">{category.name}</span>
                    <span className={`font-bold text-xl ${category.color}`}>{category.progress}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
