import { Button } from "@/components/ui/button";
import { Bell, Settings, LogOut, ChevronRight } from "lucide-react";

const Profile = () => {
  const menuItems = [
    { icon: Bell, label: "Notifications", badge: "3" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your account</p>
      </header>

      <section className="mb-6 animate-scale-in">
        <div className="rounded-3xl bg-card p-6 shadow-soft border border-border/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold text-primary-foreground">
              ES
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Edex Student</h2>
              <p className="text-sm text-muted-foreground">student@edexlife.school</p>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                Premium Member
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold">156</div>
              <div className="text-xs text-muted-foreground">Total Entries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24</div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">7</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full rounded-2xl bg-card p-4 shadow-soft border border-border/50 flex items-center justify-between hover:bg-card/80 transition-colors animate-slide-up"
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
          className="w-full rounded-2xl h-14 border-destructive/20 text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </Button>
      </section>
    </div>
  );
};

export default Profile;
