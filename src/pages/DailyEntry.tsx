import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DailyEntry = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Entry saved successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <header className="mb-6 animate-fade-in">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 -ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Daily Entry</h1>
        <p className="text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up">
          <h2 className="text-lg font-bold mb-4">Sleep Tracker</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sleep-hours">Hours</Label>
              <Input 
                id="sleep-hours" 
                type="number" 
                placeholder="8" 
                className="rounded-2xl"
              />
            </div>
            <div>
              <Label htmlFor="sleep-minutes">Minutes</Label>
              <Input 
                id="sleep-minutes" 
                type="number" 
                placeholder="30" 
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "50ms" }}>
          <h2 className="text-lg font-bold mb-4">Fit & Strong</h2>
          <Textarea 
            placeholder="Describe your workout, exercises, and achievements..."
            className="rounded-2xl min-h-[100px]"
          />
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <h2 className="text-lg font-bold mb-4">Weight</h2>
          <div className="flex gap-2 items-end">
            <div className="flex-1">
              <Label htmlFor="weight">Current Weight</Label>
              <Input 
                id="weight" 
                type="number" 
                step="0.1"
                placeholder="70.5" 
                className="rounded-2xl"
              />
            </div>
            <div className="text-sm text-muted-foreground pb-2">kg</div>
          </div>
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "150ms" }}>
          <h2 className="text-lg font-bold mb-4">Eat Smart</h2>
          <div className="space-y-3">
            <Textarea 
              placeholder="List your meals and nutritional highlights..."
              className="rounded-2xl min-h-[80px]"
            />
            <div>
              <Label htmlFor="calories">Total Calories</Label>
              <Input 
                id="calories" 
                type="number" 
                placeholder="2000" 
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h2 className="text-lg font-bold mb-4">Mind Gym</h2>
          <Textarea 
            placeholder="Mental exercises, learning activities, problem-solving..."
            className="rounded-2xl min-h-[100px]"
          />
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "250ms" }}>
          <h2 className="text-lg font-bold mb-4">Real World Problems</h2>
          <Textarea 
            placeholder="Problems analyzed, solutions explored..."
            className="rounded-2xl min-h-[100px]"
          />
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "300ms" }}>
          <h2 className="text-lg font-bold mb-4">Power Circle</h2>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Name" className="rounded-2xl" />
              <Input placeholder="Designation" className="rounded-2xl" />
            </div>
            <Button type="button" variant="outline" size="sm" className="rounded-full w-full">
              Add Another Person
            </Button>
          </div>
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "350ms" }}>
          <h2 className="text-lg font-bold mb-4">Build Your Brand</h2>
          <div className="space-y-3">
            <Textarea 
              placeholder="Content created, brand activities..."
              className="rounded-2xl min-h-[80px]"
            />
            <Input 
              type="url"
              placeholder="Social media / content link" 
              className="rounded-2xl"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h2 className="text-lg font-bold mb-4">Growth Fuel</h2>
          <div className="space-y-3">
            <Textarea 
              placeholder="Learning resources, courses, content consumed..."
              className="rounded-2xl min-h-[80px]"
            />
            <Input 
              type="url"
              placeholder="Resource link" 
              className="rounded-2xl"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "450ms" }}>
          <h2 className="text-lg font-bold mb-4">Prayer / Meditation</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="prayer-hours">Hours</Label>
              <Input 
                id="prayer-hours" 
                type="number" 
                placeholder="0" 
                className="rounded-2xl"
              />
            </div>
            <div>
              <Label htmlFor="prayer-minutes">Minutes</Label>
              <Input 
                id="prayer-minutes" 
                type="number" 
                placeholder="20" 
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-card p-6 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: "500ms" }}>
          <h2 className="text-lg font-bold mb-4">Daily Feedback</h2>
          <Textarea 
            placeholder="Reflect on your day, achievements, learnings, and areas for improvement..."
            className="rounded-2xl min-h-[120px]"
          />
        </section>

        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/")}
            className="flex-1 rounded-full"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Entry
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DailyEntry;
