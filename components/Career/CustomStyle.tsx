"use client"

export const CustomStyles = () => {
  return (
    <style jsx>{`
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
      @keyframes text-flicker {
        0%, 100% {
          opacity: 1;
          text-shadow: 0 0 10px #00d1ff, 0 0 20px #00d1ff, 0 0 30px #00d1ff;
        }
        2% {
          opacity: 0.8;
        }
        4% {
          opacity: 1;
        }
        8% {
          opacity: 0.9;
        }
        10% {
          opacity: 1;
        }
        50% {
          opacity: 1;
          text-shadow: 0 0 15px #00d1ff, 0 0 25px #00d1ff, 0 0 35px #00d1ff;
        }
        52% {
          opacity: 0.85;
        }
        54% {
          opacity: 1;
        }
      }
      @keyframes coming-soon-glow {
        0%, 100% {
          text-shadow: 0 0 15px #00d1ff, 0 0 25px #00d1ff, 0 0 35px #00d1ff;
          opacity: 0.9;
        }
        50% {
          text-shadow: 0 0 20px #00d1ff, 0 0 35px #00d1ff, 0 0 50px #00d1ff;
          opacity: 1;
        }
      }
      @keyframes glow-pulse {
        0%, 100% {
          opacity: 0.3;
        }
        50% {
          opacity: 0.6;
        }
      }
      @keyframes glow-pulse-slow {
        0%, 100% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.4;
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
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes border-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(0, 209, 255, 0.2);
        }
        50% {
          box-shadow: 0 0 20px rgba(0, 209, 255, 0.4);
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes modalSlideIn {
        0% {
          opacity: 0;
          transform: translateY(-20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes borderGlow {
        0% {
          border-color: rgba(34, 197, 94, 0);
          box-shadow: 0 0 0 rgba(34, 197, 94, 0);
        }
        50% {
          border-color: rgba(34, 197, 94, 0.6);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }
        100% {
          border-color: rgba(34, 197, 94, 0);
          box-shadow: 0 0 0 rgba(34, 197, 94, 0);
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
      .animate-text-flicker {
        animation: text-flicker 4s ease-in-out infinite;
      }
      .animate-coming-soon-glow {
        animation: coming-soon-glow 2.5s ease-in-out infinite;
      }
      .animate-glow-pulse {
        animation: glow-pulse 3s ease-in-out infinite;
      }
      .animate-glow-pulse-slow {
        animation: glow-pulse-slow 4s ease-in-out infinite;
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
      .animate-fade-in {
        animation: fade-in 2s ease-out;
      }
      .animate-border-glow {
        animation: border-glow 2s ease-in-out infinite;
      }
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
    `}</style>
  )
}
