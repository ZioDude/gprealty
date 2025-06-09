import React from "react";
import type { CSSProperties, ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "12px",
      background = "linear-gradient(135deg, #2563eb, #16a34a)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            background: background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/20 px-6 py-3 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out",
          "transform-gpu hover:scale-105 active:translate-y-px",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* spark */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div 
              className="absolute inset-0 animate-shimmer-slide"
              style={{
                background: `linear-gradient(90deg, transparent, ${shimmerColor}40, transparent)`,
                transform: 'translateX(-100%)',
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        <span className="relative z-10">{children}</span>

        {/* Highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton"; 