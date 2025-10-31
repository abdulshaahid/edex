import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressRing = ({ 
  progress, 
  size = 120, 
  strokeWidth = 8 
}: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  
  const circleRef = useRef<SVGCircleElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayProgress, setDisplayProgress] = useState(0);
  const hasAnimated = useRef(false);

  // Initial load animation
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    
    const ctx = gsap.context(() => {
      // Animate the progress circle drawing
      if (circleRef.current) {
        const fullOffset = circumference;
        gsap.fromTo(
          circleRef.current,
          { 
            strokeDashoffset: fullOffset,
            opacity: 0
          },
          {
            strokeDashoffset: offset,
            opacity: 1,
            duration: 1.5,
            delay: 0.5,
            ease: "power2.inOut"
          }
        );
      }
      
      // Animate the number counter
      const counterObj = { value: 0 };
      gsap.to(counterObj, {
        value: progress,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
        onUpdate: function() {
          setDisplayProgress(Math.round(counterObj.value));
        }
      });
      
      // Pulse animation for the container
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.3,
            ease: "back.out(1.5)"
          }
        );
      }
    });
    
    return () => ctx.revert();
  }, [circumference, offset, progress]);
  
  // Hover animations
  const handleMouseEnter = () => {
    if (containerRef.current && circleRef.current && numberRef.current) {
      gsap.to(containerRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "back.out(1.5)"
      });
      
      gsap.to(circleRef.current, {
        strokeWidth: strokeWidth + 2,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(numberRef.current, {
        scale: 1.15,
        duration: 0.3,
        ease: "back.out(2)"
      });
    }
  };
  
  const handleMouseLeave = () => {
    if (containerRef.current && circleRef.current && numberRef.current) {
      gsap.to(containerRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(circleRef.current, {
        strokeWidth: strokeWidth,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(numberRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative inline-flex items-center justify-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--primary))"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span ref={numberRef} className="text-2xl font-bold text-foreground">
          {displayProgress}%
        </span>
      </div>
    </div>
  );
};
