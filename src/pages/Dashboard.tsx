import { ProgressRing } from "@/components/ProgressRing";
import { HabitCard } from "@/components/HabitCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Moon, 
  Dumbbell,
  Utensils,
  Brain,
  Mic,
  BookOpen,
  Target,
  Coffee,
  Music,
  Share2,
  Globe,
  Laptop,
  Users,
  GraduationCap,
  Shirt,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Eye,
  Sparkles,
  Zap,
  MessageSquare,
  Clock,
  Rocket,
  Wind,
  Link as LinkIcon,
  ListPlus,
  Trash2,
  Bell,
  User,
  Save,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const navigate = useNavigate();
  const todayProgress = 68;
  const userName = "Shahid"; // User's name
  const [expandedTask, setExpandedTask] = useState<number | null>(null);
  const [taskPoints, setTaskPoints] = useState<{ [key: number]: string[] }>({});
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const progressCardRef = useRef(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const streakRef = useRef(null);
  const taskCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initial page load animations
  useEffect(() => {
    // Set initial state
    gsap.set([headerRef.current, progressCardRef.current, statsRef.current, streakRef.current, taskCardsRef.current], {
      opacity: 1
    });
    
    const ctx = gsap.context(() => {
      // Header animation with bounce
      gsap.fromTo(headerRef.current, 
        { y: -50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "elastic.out(1, 0.6)",
        }
      );
      
      // Progress card animation with rotation
      gsap.fromTo(progressCardRef.current,
        { scale: 0.9, opacity: 0, rotateY: -15 },
        { 
          scale: 1, 
          opacity: 1, 
          rotateY: 0,
          duration: 1, 
          delay: 0.2, 
          ease: "back.out(1.4)" 
        }
      );
      
      // Stats cards with advanced stagger and scale
      gsap.fromTo(statsRef.current,
        { y: 40, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8, 
          stagger: {
            each: 0.15,
            ease: "power2.out"
          },
          delay: 0.5, 
          ease: "back.out(1.5)" 
        }
      );
      
      // Animate stats numbers with counter effect
      statsRef.current.forEach((card, index) => {
        if (!card) return;
        const numberElement = card.querySelector('.stat-number') as HTMLElement;
        if (numberElement) {
          const targetValue = [12, 4, 13][index];
          gsap.fromTo(numberElement,
            { innerText: 0 },
            {
              innerText: targetValue,
              duration: 1.5,
              delay: 0.7 + (index * 0.15),
              snap: { innerText: 1 },
              ease: "power2.out",
              onUpdate: function() {
                (numberElement as any).innerText = Math.ceil((numberElement as any).innerText);
              }
            }
          );
        }
      });
      
      // Streak banner with slide and bounce
      gsap.fromTo(streakRef.current,
        { x: -50, opacity: 0, scale: 0.9 },
        { 
          x: 0, 
          opacity: 1,
          scale: 1, 
          duration: 0.8, 
          delay: 0.9, 
          ease: "back.out(1.3)" 
        }
      );
      
      // Task cards with 3D rotation effect
      gsap.fromTo(taskCardsRef.current,
        { x: -40, opacity: 0, rotateY: -10 },
        { 
          x: 0, 
          opacity: 1,
          rotateY: 0, 
          duration: 0.6, 
          stagger: {
            each: 0.1,
            ease: "power1.out"
          },
          delay: 1.1, 
          ease: "power3.out" 
        }
      );
    });
    
    return () => ctx.revert();
  }, []);
  
  // Task expansion animation
  useEffect(() => {
    if (expandedTask !== null) {
      const expandedElement = taskCardsRef.current[expandedTask]?.querySelector('.task-form');
      if (expandedElement) {
        gsap.from(expandedElement, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    }
  }, [expandedTask]);
  
  // Hover animations for stats cards
  const handleStatsHover = (index: number, isEntering: boolean) => {
    const card = statsRef.current[index];
    if (!card) return;
    
    const numberElement = card.querySelector('.stat-number');
    const dotElement = card.querySelector('.stat-dot');
    
    if (isEntering) {
      gsap.to(card, {
        y: -8,
        scale: 1.05,
        rotateZ: 2,
        duration: 0.4,
        ease: "back.out(1.5)"
      });
      
      // Pulse the number
      if (numberElement) {
        gsap.to(numberElement, {
          scale: 1.15,
          duration: 0.3,
          ease: "back.out(2)"
        });
      }
      
      // Bounce the indicator dot
      if (dotElement) {
        gsap.to(dotElement, {
          scale: 1.5,
          duration: 0.3,
          ease: "elastic.out(1, 0.4)"
        });
      }
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotateZ: 0,
        duration: 0.4,
        ease: "power2.out"
      });
      
      if (numberElement) {
        gsap.to(numberElement, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      
      if (dotElement) {
        gsap.to(dotElement, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.4)"
        });
      }
    }
  };
  
  // Hover animations for task cards
  const handleTaskHover = (index: number, isEntering: boolean) => {
    const card = taskCardsRef.current[index];
    if (!card) return;
    
    const innerCard = card.querySelector('.task-card-inner');
    const taskIcon = card.querySelector('.task-icon');
    const taskBadge = card.querySelector('.task-badge');
    const taskNumber = card.querySelector('.task-number');
    
    if (!innerCard) return;
    
    if (isEntering) {
      // Card lift with enhanced shadow
      gsap.to(innerCard, {
        y: -5,
        boxShadow: "0 15px 40px -15px rgba(0, 0, 0, 0.2)",
        duration: 0.4,
        ease: "power3.out"
      });
      
      // Icon bounce and rotate
      if (taskIcon) {
        gsap.to(taskIcon, {
          scale: 1.15,
          rotation: 8,
          duration: 0.4,
          ease: "back.out(2)"
        });
      }
      
      // Badge pulse
      if (taskBadge) {
        gsap.to(taskBadge, {
          scale: 1.08,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)"
        });
      }
      
      // Number scale
      if (taskNumber) {
        gsap.to(taskNumber, {
          scale: 1.1,
          duration: 0.3,
          ease: "back.out(1.5)"
        });
      }
    } else {
      gsap.to(innerCard, {
        y: 0,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: "power2.out"
      });
      
      if (taskIcon) {
        gsap.to(taskIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
      
      if (taskBadge) {
        gsap.to(taskBadge, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      
      if (taskNumber) {
        gsap.to(taskNumber, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  };

  const habitSections = [
    // Must complete TODAY
    { title: "Sleep", icon: Moon, status: "completed" as const, description: "Track your sleep hours", type: "numeric", dueDate: "today" },
    { title: "Fit & Strong", icon: Dumbbell, status: "pending" as const, description: "Workout & weight", type: "descriptive_numeric", dueDate: "today" },
    { title: "Eat Smart", icon: Utensils, status: "pending" as const, description: "Calories & meals", type: "numeric_list", dueDate: "today" },
    { title: "Prayer/Meditation", icon: Wind, status: "pending" as const, description: "Spiritual practice", type: "numeric", dueDate: "today" },
    { title: "Master the Mic", icon: Mic, status: "pending" as const, description: "Communication practice", type: "descriptive", dueDate: "today" },
    { title: "Mind Gym", icon: Brain, status: "pending" as const, description: "Mental exercises", type: "descriptive", dueDate: "today" },
    
    // Can complete TOMORROW
    { title: "Real-World Problems", icon: BookOpen, status: "pending" as const, description: "Problem solving", type: "descriptive", dueDate: "tomorrow" },
    { title: "World Watch", icon: Globe, status: "pending" as const, description: "Current affairs", type: "descriptive", dueDate: "tomorrow" },
    { title: "Smart Tools Mastery", icon: Laptop, status: "pending" as const, description: "Tech skills", type: "descriptive", dueDate: "tomorrow" },
    { title: "Power Circle", icon: Users, status: "pending" as const, description: "Networking", type: "contact_list", dueDate: "tomorrow" },
    { title: "Do & Learn", icon: GraduationCap, status: "pending" as const, description: "Practical learning", type: "descriptive", dueDate: "tomorrow" },
    { title: "Level Up Look", icon: Shirt, status: "pending" as const, description: "Personal grooming", type: "descriptive", dueDate: "tomorrow" },
    { title: "Build Your Brand", icon: Share2, status: "pending" as const, description: "Social media presence", type: "descriptive_link", dueDate: "tomorrow" },
    { title: "Life Hacks Lab", icon: Lightbulb, status: "pending" as const, description: "Life tips", type: "descriptive", dueDate: "tomorrow" },
    { title: "Do and Learn", icon: Eye, status: "pending" as const, description: "Learning activities", type: "descriptive", dueDate: "tomorrow" },
    { title: "Growth Fuel", icon: Sparkles, status: "pending" as const, description: "Content consumption", type: "descriptive_link", dueDate: "tomorrow" },
    { title: "Talk Like a Pro", icon: MessageSquare, status: "pending" as const, description: "Speaking skills", type: "descriptive", dueDate: "tomorrow" },
    { title: "Impact Hour", icon: Clock, status: "pending" as const, description: "Community service", type: "descriptive", dueDate: "tomorrow" },
    { title: "Startup Garage", icon: Rocket, status: "pending" as const, description: "Entrepreneurship", type: "descriptive", dueDate: "tomorrow" },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      {/* Navbar */}
      <nav ref={headerRef} className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/40 shadow-sm">
        <div className="px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-none">
                  Edex
                </div>
                <div className="text-[10px] md:text-xs font-semibold text-muted-foreground tracking-wide leading-none">
                  Life School
                </div>
              </div>
            </div>
            
            {/* Right side - Notification & Profile */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Notification Icon */}
              <button className="relative p-2 md:p-2.5 rounded-xl hover:bg-muted/80 transition-colors group">
                <Bell className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              
              {/* Profile Icon */}
              <button className="flex items-center gap-2 md:gap-3 p-1.5 md:p-2 pr-3 md:pr-4 rounded-xl hover:bg-muted/80 transition-all group">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow ring-2 ring-primary/20 group-hover:ring-primary/40">
                  <img 
                    src="/shah.jpg" 
                    alt={userName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="hidden md:block text-sm font-medium text-foreground group-hover:text-primary transition-colors">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Welcome Section */}
      <div className="px-4 md:px-8 lg:px-12 pt-6 md:pt-8 pb-4 md:pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Welcome back, {userName}!
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-1.5">Let's track your progress today</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-0 md:px-8 lg:px-12 space-y-6 md:space-y-8">
        {/* Stats & Progress Section */}
        <section className="mx-3 md:mx-0">
          {/* Main Progress Card */}
          <div ref={progressCardRef} className="rounded-3xl md:rounded-3xl bg-gradient-to-br from-primary/5 via-muted/30 to-blue-500/5 p-6 sm:p-7 md:p-10 shadow-md hover:shadow-lg border border-primary/20 overflow-hidden relative transition-all duration-300">
            {/* Pulsing Ambient Lights */}
            <div className="absolute -top-16 -left-16 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full blur-3xl animate-pulse-slow" 
                 style={{ background: 'radial-gradient(circle, rgba(197, 248, 0, 0.4), transparent)', zIndex: 0 }} />
            <div className="absolute -bottom-16 -right-16 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full blur-3xl animate-pulse-slower" 
                 style={{ background: 'radial-gradient(circle, rgba(197, 248, 0, 0.4), transparent)', zIndex: 0 }} />
            
            {/* Header with Date and Progress Ring */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 relative z-10">
              <div className="flex-1 text-center sm:text-left w-full sm:w-auto">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Today's Progress
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'short', 
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <ProgressRing progress={todayProgress} />
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 relative z-10">
              {/* Completed Card */}
              <div 
                ref={el => statsRef.current[0] = el} 
                onMouseEnter={() => handleStatsHover(0, true)}
                onMouseLeave={() => handleStatsHover(0, false)}
                className="group relative rounded-2xl md:rounded-2xl bg-success/10 hover:bg-success/10 p-3 sm:p-4 md:p-6 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-success/10 flex items-center justify-center">
                  <div className="stat-dot w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse" />
                </div>
                <div className="stat-number text-2xl sm:text-3xl md:text-5xl font-bold text-success mb-1 sm:mb-2 transition-transform">12</div>
                <div className="text-[9px] sm:text-xs md:text-sm text-success/80 font-semibold uppercase tracking-wide">Completed</div>
              </div>

              {/* Pending Card */}
              <div 
                ref={el => statsRef.current[1] = el}
                onMouseEnter={() => handleStatsHover(1, true)}
                onMouseLeave={() => handleStatsHover(1, false)}
                className="group relative rounded-2xl md:rounded-2xl bg-orange-500/10 hover:bg-orange-500/10 p-3 sm:p-4 md:p-6 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <div className="stat-dot w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
                <div className="stat-number text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600 mb-1 sm:mb-2 transition-transform">4</div>
                <div className="text-[9px] sm:text-xs md:text-sm text-orange-600/80 font-semibold uppercase tracking-wide">Due Today</div>
              </div>

              {/* Tomorrow Card */}
              <div 
                ref={el => statsRef.current[2] = el}
                onMouseEnter={() => handleStatsHover(2, true)}
                onMouseLeave={() => handleStatsHover(2, false)}
                className="group relative rounded-2xl md:rounded-2xl bg-blue-500/10 hover:bg-blue-500/10 p-3 sm:p-4 md:p-6 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <div className="stat-dot w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500" />
                </div>
                <div className="stat-number text-2xl sm:text-3xl md:text-5xl font-bold text-blue-600 mb-1 sm:mb-2 transition-transform">13</div>
                <div className="text-[9px] sm:text-xs md:text-sm text-blue-600/80 font-semibold uppercase tracking-wide">Tomorrow</div>
              </div>
            </div>

            {/* Streak Banner */}
            <div ref={streakRef} className="mt-4 sm:mt-6 rounded-2xl md:rounded-2xl bg-gradient-to-r from-primary/45 via-primary/20 to-primary/5 p-4 sm:p-5 md:p-6 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1 flex items-center gap-1.5 sm:gap-2">
                    7-Day Streak! 
                    <span className="text-base sm:text-xl">🔥</span>
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                    Keep up the amazing work!
                  </p>
                </div>
                <div className="hidden xs:flex flex-col items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg md:rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                  <div className="text-xl sm:text-2xl font-bold text-primary">7</div>
                  <div className="text-[10px] sm:text-xs text-primary/70 font-medium">Days</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tasks Section */}
        <div className="space-y-6 mx-3 md:mx-0">
          {/* Due Today Tasks */}
          <section className="rounded-3xl md:rounded-3xl bg-muted/30 p-3 sm:p-6 md:p-8 shadow-md hover:shadow-lg border border-border/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl md:text-2xl font-bold">Due Today</h2>
              <span className="text-sm text-muted-foreground">
                {habitSections.filter(h => h.dueDate === "today").length} tasks
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-3 md:gap-4 w-full">
              {habitSections.filter(h => h.dueDate === "today").map((habit, originalIndex) => {
                const index = habitSections.indexOf(habit);
                const isExpanded = expandedTask === index;
                const Icon = habit.icon;
                
                // Color based on due date and status
                const getTaskColors = () => {
                  if (habit.status === "completed") {
                    return {
                      bg: "bg-success/5",
                      iconBg: "bg-success/10",
                      iconColor: "text-success",
                      badge: "bg-success/15 text-success",
                      badgeText: "Completed"
                    };
                  }
                  
                  if (habit.dueDate === "today") {
                    return {
                      bg: "bg-card",
                      iconBg: "bg-orange-500/10",
                      iconColor: "text-orange-500",
                      badge: "bg-orange-500/15 text-orange-600",
                      badgeText: "Due Today"
                    };
                  }
                  
                  return {
                    bg: "bg-card",
                    iconBg: "bg-blue-500/10",
                    iconColor: "text-blue-500",
                    badge: "bg-blue-500/15 text-blue-600",
                    badgeText: "Tomorrow"
                  };
                };
                
                const colors = getTaskColors();

                return (
                  <div
                    key={habit.title}
                    ref={el => taskCardsRef.current[index] = el}
                    onMouseEnter={() => handleTaskHover(index, true)}
                    onMouseLeave={() => handleTaskHover(index, false)}
                  >
                    <div className={cn(
                      "task-card-inner rounded-3xl md:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden",
                      colors.bg
                    )}>
                      {/* Task Header */}
                      <div 
                        onClick={() => setExpandedTask(isExpanded ? null : index)}
                        className="p-4 sm:p-5 md:p-6 cursor-pointer"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="task-number flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/20 text-foreground font-bold text-xs sm:text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className={cn(
                            "task-icon flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl flex-shrink-0",
                            colors.iconBg
                          )}>
                            <Icon className={cn("h-5 w-5 sm:h-6 sm:w-6", colors.iconColor)} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                              <h3 className="font-bold text-base sm:text-lg">{habit.title}</h3>
                              
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1 sm:line-clamp-none">{habit.description}</p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </div>

                      {/* Expandable Form - keep existing form code */}
                      {isExpanded && (
                        <div className="task-form border-t border-border/50 p-5 md:p-6 bg-card/30">
                          <form onSubmit={(e) => {
                            e.preventDefault();
                            toast.success(`${habit.title} updated!`);
                            setExpandedTask(null);
                          }}>
                            <div className="space-y-4">
                              {/* Form content will be preserved */}
                              {habit.type === "numeric" && habit.title === "Sleep" && (
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Hours</Label>
                                    <Input type="number" placeholder="8" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Minutes</Label>
                                    <Input type="number" placeholder="30" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                </div>
                              )}

                              {habit.type === "descriptive_numeric" && (
                                <>
                                  <div>
                                    <Label>Weight (kg)</Label>
                                    <Input type="number" step="0.1" placeholder="70.5" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Workout Points</Label>
                                    {(taskPoints[index] || ['']).map((point, idx) => (
                                      <div key={idx}>
                                        <div className="flex gap-2 mt-2">
                                          <Textarea 
                                            value={point}
                                            onChange={(e) => {
                                              const current = taskPoints[index] || [''];
                                              const updated = [...current];
                                              updated[idx] = e.target.value;
                                              setTaskPoints({...taskPoints, [index]: updated});
                                            }}
                                            placeholder={`Point ${idx + 1}`}
                                            className="rounded-xl resize-none bg-muted/30"
                                            rows={1}
                                            onInput={(e) => {
                                              e.currentTarget.style.height = 'auto';
                                              e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                            }}
                                          />
                                          {(taskPoints[index] || ['']).length > 1 && (
                                            <Button
                                              type="button"
                                              size="icon"
                                              variant="outline"
                                              onClick={() => {
                                                const current = taskPoints[index] || [''];
                                                const updated = current.filter((_, i) => i !== idx);
                                                setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                              }}
                                              className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                            >
                                              <Trash2 className="w-4 h-4" />
                                            </Button>
                                          )}
                                        </div>
                                        {idx === (taskPoints[index] || ['']).length - 1 && (
                                          <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [];
                                              setTaskPoints({...taskPoints, [index]: [...current, '']});
                                            }}
                                            className="rounded-xl mt-2"
                                          >
                                            <ListPlus className="w-4 h-4 mr-2" />
                                            Add Point
                                          </Button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}

                              {habit.type === "numeric_list" && (
                                <>
                                  <div>
                                    <Label>Total Calories</Label>
                                    <Input type="number" placeholder="2000" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Breakfast</Label>
                                    <Input placeholder="Oats with milk, fruits" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Lunch</Label>
                                    <Input placeholder="Rice, chicken curry, salad" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Dinner</Label>
                                    <Input placeholder="Grilled fish, vegetables" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                </>
                              )}

                              {habit.type === "numeric" && habit.title === "Prayer/Meditation" && (
                                <div>
                                  <Label>Minutes</Label>
                                  <Input type="number" placeholder="15" className="rounded-xl mt-1 bg-muted/30" />
                                </div>
                              )}

                              {habit.type === "contact_list" && (
                                <div>
                                  <Label>Contacts</Label>
                                  {(taskPoints[index] || ['']).map((_, idx) => (
                                    <div key={idx}>
                                      <div className="flex gap-2 mt-2">
                                        <Input placeholder="Name" className="rounded-xl flex-1 bg-muted/30" />
                                        <Input placeholder="Designation" className="rounded-xl flex-1 bg-muted/30" />
                                        {(taskPoints[index] || ['']).length > 1 && (
                                          <Button
                                            type="button"
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [''];
                                              const updated = current.filter((_, i) => i !== idx);
                                              setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                            }}
                                            className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </Button>
                                        )}
                                      </div>
                                      {idx === (taskPoints[index] || ['']).length - 1 && (
                                        <Button
                                          type="button"
                                          size="sm"
                                          variant="outline"
                                          onClick={() => {
                                            const current = taskPoints[index] || [];
                                            setTaskPoints({...taskPoints, [index]: [...current, '']});
                                          }}
                                          className="rounded-xl mt-2"
                                        >
                                          <ListPlus className="w-4 h-4 mr-2" />
                                          Add Contact
                                        </Button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {habit.type === "descriptive_link" && (
                                <>
                                  <div>
                                    <Label>Points</Label>
                                    {(taskPoints[index] || ['']).map((point, idx) => (
                                      <div key={idx}>
                                        <div className="flex gap-2 mt-2">
                                          <Textarea 
                                            value={point}
                                            onChange={(e) => {
                                              const current = taskPoints[index] || [''];
                                              const updated = [...current];
                                              updated[idx] = e.target.value;
                                              setTaskPoints({...taskPoints, [index]: updated});
                                            }}
                                            placeholder={`Point ${idx + 1}`}
                                            className="rounded-xl resize-none bg-muted/30"
                                            rows={1}
                                            onInput={(e) => {
                                              e.currentTarget.style.height = 'auto';
                                              e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                            }}
                                          />
                                          {(taskPoints[index] || ['']).length > 1 && (
                                            <Button
                                              type="button"
                                              size="icon"
                                              variant="outline"
                                              onClick={() => {
                                                const current = taskPoints[index] || [''];
                                                const updated = current.filter((_, i) => i !== idx);
                                                setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                              }}
                                              className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                            >
                                              <Trash2 className="w-4 h-4" />
                                            </Button>
                                          )}
                                        </div>
                                        {idx === (taskPoints[index] || ['']).length - 1 && (
                                          <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [];
                                              setTaskPoints({...taskPoints, [index]: [...current, '']});
                                            }}
                                            className="rounded-xl mt-2"
                                          >
                                            <ListPlus className="w-4 h-4 mr-2" />
                                            Add Point
                                          </Button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  <div>
                                    <Label>Content Link (optional)</Label>
                                    <div className="relative mt-1">
                                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                      <Input placeholder="https://..." className="rounded-xl pl-10 bg-muted/30" />
                                    </div>
                                  </div>
                                </>
                              )}

                              {habit.type === "descriptive" && (
                                <div>
                                  <Label>Points</Label>
                                  {(taskPoints[index] || ['']).map((point, idx) => (
                                    <div key={idx}>
                                      <div className="flex gap-2 mt-2">
                                        <Textarea 
                                          value={point}
                                          onChange={(e) => {
                                            const current = taskPoints[index] || [''];
                                            const updated = [...current];
                                            updated[idx] = e.target.value;
                                            setTaskPoints({...taskPoints, [index]: updated});
                                          }}
                                          placeholder={`Point ${idx + 1}`}
                                          className="rounded-xl resize-none bg-muted/30"
                                          rows={1}
                                          onInput={(e) => {
                                            e.currentTarget.style.height = 'auto';
                                            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                          }}
                                        />
                                        {(taskPoints[index] || ['']).length > 1 && (
                                          <Button
                                            type="button"
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [''];
                                              const updated = current.filter((_, i) => i !== idx);
                                              setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                            }}
                                            className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </Button>
                                        )}
                                      </div>
                                      {idx === (taskPoints[index] || ['']).length - 1 && (
                                        <Button
                                          type="button"
                                          size="sm"
                                          variant="outline"
                                          onClick={() => {
                                            const current = taskPoints[index] || [];
                                            setTaskPoints({...taskPoints, [index]: [...current, '']});
                                          }}
                                          className="rounded-xl mt-2"
                                        >
                                          <ListPlus className="w-4 h-4 mr-2" />
                                          Add Point
                                        </Button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {/* Action Buttons */}
                              <div className="flex gap-3 pt-2">
                                <Button
                                  type="submit"
                                  className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                                >
                                  <Save className="w-4 h-4 mr-2" />
                                  Save
                                </Button>
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => {
                                    setExpandedTask(null);
                                    setTaskPoints({...taskPoints, [index]: []});
                                  }}
                                  className="rounded-full"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tomorrow Tasks */}
          <section className="rounded-3xl md:rounded-3xl bg-muted/30 p-3 sm:p-6 md:p-8 shadow-md hover:shadow-lg border border-border/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl md:text-2xl font-bold">Tomorrow</h2>
              <span className="text-sm text-muted-foreground">
                {habitSections.filter(h => h.dueDate === "tomorrow").length} tasks
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-3 md:gap-4 w-full">
              {habitSections.filter(h => h.dueDate === "tomorrow").map((habit, originalIndex) => {
                const index = habitSections.indexOf(habit);
                const isExpanded = expandedTask === index;
                const Icon = habit.icon;
                
                // Color based on due date and status
                const getTaskColors = () => {
                  if (habit.status === "completed") {
                    return {
                      bg: "bg-success/5",
                      iconBg: "bg-success/10",
                      iconColor: "text-success",
                      badge: "bg-success/15 text-success",
                      badgeText: "Completed"
                    };
                  }
                  
                  if (habit.dueDate === "today") {
                    return {
                      bg: "bg-card",
                      iconBg: "bg-orange-500/10",
                      iconColor: "text-orange-500",
                      badge: "bg-orange-500/15 text-orange-600",
                      badgeText: "Due Today"
                    };
                  }
                  
                  return {
                    bg: "bg-card",
                    iconBg: "bg-blue-500/10",
                    iconColor: "text-blue-500",
                    badge: "bg-blue-500/15 text-blue-600",
                    badgeText: "Tomorrow"
                  };
                };
                
                const colors = getTaskColors();

                return (
                  <div
                    key={habit.title}
                    ref={el => taskCardsRef.current[index] = el}
                    onMouseEnter={() => handleTaskHover(index, true)}
                    onMouseLeave={() => handleTaskHover(index, false)}
                  >
                    <div className={cn(
                      "task-card-inner rounded-3xl md:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300",
                      colors.bg
                    )}>
                      {/* Task Header */}
                      <div 
                        onClick={() => setExpandedTask(isExpanded ? null : index)}
                        className="p-4 sm:p-5 md:p-6 cursor-pointer"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="task-number flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/20 text-foreground font-bold text-xs sm:text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className={cn(
                            "task-icon flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl flex-shrink-0",
                            colors.iconBg
                          )}>
                            <Icon className={cn("h-5 w-5 sm:h-6 sm:w-6", colors.iconColor)} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                              <h3 className="font-bold text-base sm:text-lg">{habit.title}</h3>
                              
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1 sm:line-clamp-none">{habit.description}</p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </div>

                      {/* Expandable Form */}
                      {isExpanded && (
                        <div className="task-form border-t border-border/50 p-5 md:p-6 bg-card/30">
                          <form onSubmit={(e) => {
                            e.preventDefault();
                            toast.success(`${habit.title} updated!`);
                            setExpandedTask(null);
                          }}>
                            <div className="space-y-4">
                              {/* 1. Sleep - numeric (hours and minutes) */}
                              {habit.type === "numeric" && habit.title === "Sleep" && (
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Hours</Label>
                                    <Input type="number" placeholder="8" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Minutes</Label>
                                    <Input type="number" placeholder="30" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                </div>
                              )}

                              {/* 2. Fit & Strong - descriptive + weight */}
                              {habit.type === "descriptive_numeric" && (
                                <>
                                  <div>
                                    <Label>Weight (kg)</Label>
                                    <Input type="number" step="0.1" placeholder="70.5" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Workout Points</Label>
                                    {(taskPoints[index] || ['']).map((point, idx) => (
                                      <div key={idx}>
                                        <div className="flex gap-2 mt-2">
                                          <Textarea 
                                            value={point}
                                            onChange={(e) => {
                                              const current = taskPoints[index] || [''];
                                              const updated = [...current];
                                              updated[idx] = e.target.value;
                                              setTaskPoints({...taskPoints, [index]: updated});
                                            }}
                                            placeholder={`Point ${idx + 1}`}
                                            className="rounded-xl resize-none bg-muted/30"
                                            rows={1}
                                            onInput={(e) => {
                                              e.currentTarget.style.height = 'auto';
                                              e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                            }}
                                          />
                                          {(taskPoints[index] || ['']).length > 1 && (
                                            <Button
                                              type="button"
                                              size="icon"
                                              variant="outline"
                                              onClick={() => {
                                                const current = taskPoints[index] || [''];
                                                const updated = current.filter((_, i) => i !== idx);
                                                setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                              }}
                                              className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                            >
                                              <Trash2 className="w-4 h-4" />
                                            </Button>
                                          )}
                                        </div>
                                        {idx === (taskPoints[index] || ['']).length - 1 && (
                                          <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [];
                                              setTaskPoints({...taskPoints, [index]: [...current, '']});
                                            }}
                                            className="rounded-xl mt-2"
                                          >
                                            <ListPlus className="w-4 h-4 mr-2" />
                                            Add Point
                                          </Button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}

                              {/* 3. Eat Smart - numeric + list */}
                              {habit.type === "numeric_list" && (
                                <>
                                  <div>
                                    <Label>Total Calories</Label>
                                    <Input type="number" placeholder="2000" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Breakfast</Label>
                                    <Input placeholder="Oats with milk, fruits" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Lunch</Label>
                                    <Input placeholder="Rice, chicken curry, salad" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                  <div>
                                    <Label>Dinner</Label>
                                    <Input placeholder="Grilled fish, vegetables" className="rounded-xl mt-1 bg-muted/30" />
                                  </div>
                                </>
                              )}

                              {/* 9. Power Circle - contact list */}
                              {habit.type === "contact_list" && (
                                <div>
                                  <Label>Contacts</Label>
                                  {(taskPoints[index] || ['']).map((_, idx) => (
                                    <div key={idx}>
                                      <div className="flex gap-2 mt-2">
                                        <Input placeholder="Name" className="rounded-xl flex-1 bg-muted/30" />
                                        <Input placeholder="Designation" className="rounded-xl flex-1 bg-muted/30" />
                                        {(taskPoints[index] || ['']).length > 1 && (
                                          <Button
                                            type="button"
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [''];
                                              const updated = current.filter((_, i) => i !== idx);
                                              setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                            }}
                                            className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </Button>
                                        )}
                                      </div>
                                      {idx === (taskPoints[index] || ['']).length - 1 && (
                                        <Button
                                          type="button"
                                          size="sm"
                                          variant="outline"
                                          onClick={() => {
                                            const current = taskPoints[index] || [];
                                            setTaskPoints({...taskPoints, [index]: [...current, '']});
                                          }}
                                          className="rounded-xl mt-2"
                                        >
                                          <ListPlus className="w-4 h-4 mr-2" />
                                          Add Contact
                                        </Button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* 12 & 15. Descriptive + Link */}
                              {habit.type === "descriptive_link" && (
                                <>
                                  <div>
                                    <Label>Points</Label>
                                    {(taskPoints[index] || ['']).map((point, idx) => (
                                      <div key={idx}>
                                        <div className="flex gap-2 mt-2">
                                          <Textarea 
                                            value={point}
                                            onChange={(e) => {
                                              const current = taskPoints[index] || [''];
                                              const updated = [...current];
                                              updated[idx] = e.target.value;
                                              setTaskPoints({...taskPoints, [index]: updated});
                                            }}
                                            placeholder={`Point ${idx + 1}`}
                                            className="rounded-xl resize-none bg-muted/30"
                                            rows={1}
                                            onInput={(e) => {
                                              e.currentTarget.style.height = 'auto';
                                              e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                            }}
                                          />
                                          {(taskPoints[index] || ['']).length > 1 && (
                                            <Button
                                              type="button"
                                              size="icon"
                                              variant="outline"
                                              onClick={() => {
                                                const current = taskPoints[index] || [''];
                                                const updated = current.filter((_, i) => i !== idx);
                                                setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                              }}
                                              className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                            >
                                              <Trash2 className="w-4 h-4" />
                                            </Button>
                                          )}
                                        </div>
                                        {idx === (taskPoints[index] || ['']).length - 1 && (
                                          <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [];
                                              setTaskPoints({...taskPoints, [index]: [...current, '']});
                                            }}
                                            className="rounded-xl mt-2"
                                          >
                                            <ListPlus className="w-4 h-4 mr-2" />
                                            Add Point
                                          </Button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  <div>
                                    <Label>Content Link (optional)</Label>
                                    <div className="relative mt-1">
                                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                      <Input placeholder="https://..." className="rounded-xl pl-10 bg-muted/30" />
                                    </div>
                                  </div>
                                </>
                              )}

                              {/* 19. Prayer/Meditation - numeric */}
                              {habit.type === "numeric" && habit.title === "Prayer/Meditation" && (
                                <div>
                                  <Label>Minutes</Label>
                                  <Input type="number" placeholder="15" className="rounded-xl mt-1 bg-muted/30" />
                                </div>
                              )}

                              {/* All other descriptive tasks */}
                              {habit.type === "descriptive" && (
                                <div>
                                  <Label>Points</Label>
                                  {(taskPoints[index] || ['']).map((point, idx) => (
                                    <div key={idx}>
                                      <div className="flex gap-2 mt-2">
                                        <Textarea 
                                          value={point}
                                          onChange={(e) => {
                                            const current = taskPoints[index] || [''];
                                            const updated = [...current];
                                            updated[idx] = e.target.value;
                                            setTaskPoints({...taskPoints, [index]: updated});
                                          }}
                                          placeholder={`Point ${idx + 1}`}
                                          className="rounded-xl resize-none bg-muted/30"
                                          rows={1}
                                          onInput={(e) => {
                                            e.currentTarget.style.height = 'auto';
                                            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                          }}
                                        />
                                        {(taskPoints[index] || ['']).length > 1 && (
                                          <Button
                                            type="button"
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                              const current = taskPoints[index] || [''];
                                              const updated = current.filter((_, i) => i !== idx);
                                              setTaskPoints({...taskPoints, [index]: updated.length > 0 ? updated : ['']});
                                            }}
                                            className="rounded-xl h-10 w-10 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </Button>
                                        )}
                                      </div>
                                      {idx === (taskPoints[index] || ['']).length - 1 && (
                                        <Button
                                          type="button"
                                          size="sm"
                                          variant="outline"
                                          onClick={() => {
                                            const current = taskPoints[index] || [];
                                            setTaskPoints({...taskPoints, [index]: [...current, '']});
                                          }}
                                          className="rounded-xl mt-2"
                                        >
                                          <ListPlus className="w-4 h-4 mr-2" />
                                          Add Point
                                        </Button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {/* Action Buttons */}
                              <div className="flex gap-3 pt-2">
                                <Button
                                  type="submit"
                                  className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                                >
                                  <Save className="w-4 h-4 mr-2" />
                                  Save
                                </Button>
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => {
                                    setExpandedTask(null);
                                    setTaskPoints({...taskPoints, [index]: []});
                                  }}
                                  className="rounded-full"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Daily Feedback Section */}
          <section className="rounded-3xl md:rounded-3xl bg-muted/30 p-3 sm:p-6 md:p-8 shadow-md hover:shadow-lg border border-border/40 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-5 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Daily Feedback
            </h3>
            <Textarea 
              placeholder="How was your day? What did you learn? Any challenges or wins to share..."
              className="rounded-xl min-h-[120px] bg-muted/30 border-primary/10"
            />
            <Button 
              className="mt-4 rounded-full bg-primary hover:bg-primary/90 w-full md:w-auto"
            >
              <Save className="w-4 h-4 mr-2" />
              Submit Feedback
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
