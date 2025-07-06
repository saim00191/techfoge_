"use client"

import type { CustomStylesProps } from "@/types/Privacy"

export const CustomStyles = ({}: CustomStylesProps) => {
  return (
    <style jsx global>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-15px);
        }
      }
      @keyframes neon-pulse {
        0%, 100% {
          opacity: 0.3;
        }
        50% {
          opacity: 0.8;
        }
      }
      @keyframes neon-pulse-slow {
        0%, 100% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.6;
        }
      }
      @keyframes pulse-glow {
        0%, 100% {
          opacity: 0.3;
          transform: scale(1);
        }
        50% {
          opacity: 0.6;
          transform: scale(1.1);
        }
      }
      @keyframes pulse-glow-delayed {
        0%, 100% {
          opacity: 0.4;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.15);
        }
      }
      @keyframes pulse-glow-slow {
        0%, 100% {
          opacity: 0.2;
          transform: scale(1);
        }
        50% {
          opacity: 0.5;
          transform: scale(1.05);
        }
      }
      @keyframes pulse-badge {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      .animate-neon-pulse {
        animation: neon-pulse 3s ease-in-out infinite;
      }
      .animate-neon-pulse-slow {
        animation: neon-pulse-slow 4s ease-in-out infinite;
      }
      .animate-pulse-glow {
        animation: pulse-glow 4s ease-in-out infinite;
      }
      .animate-pulse-glow-delayed {
        animation: pulse-glow-delayed 5s ease-in-out infinite 1s;
      }
      .animate-pulse-glow-slow {
        animation: pulse-glow-slow 6s ease-in-out infinite;
      }
      .animate-pulse-badge {
        animation: pulse-badge 2s ease-in-out infinite;
      }
    `}</style>
  )
}
