import { Button } from "@/components/ui/button";
import { Bell, Settings, LogOut, ChevronRight } from "lucide-react";

const Profile = () => {
  const menuItems = [
    { icon: Bell, label: "Notifications", badge: "3" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-8 px-4 md:px-12 pt-8 md:pt-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 md:mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
            Profile
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">Manage your account</p>
        </header>

        <section className="mb-8 animate-scale-in">
          <div className="rounded-3xl bg-card p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center text-3xl md:text-4xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                ES
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Edex Student</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-3">student@edexlife.school</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 text-sm font-semibold text-primary border border-primary/20">
                  ✨ Premium Member
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">156</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Total Entries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">24</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">This Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-success mb-1">7</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Day Streak</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full rounded-2xl bg-card p-5 shadow-lg border border-border/50 flex items-center justify-between hover:shadow-xl hover:border-primary/30 hover:bg-card/80 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${150 + index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-muted/50 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </button>
            );
          })}
          </div>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Button
            variant="outline"
            className="w-full rounded-2xl h-16 border-destructive/30 text-destructive hover:bg-destructive/10 hover:border-destructive/50 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Profile;
