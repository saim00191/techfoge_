"use client"

export const CustomStyles = () => {
  return (
    <style jsx global>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-12px);
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
      /* Modal Animations */
      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes modal-enter {
        from {
          opacity: 0;
          transform: scale(0.9) translateY(-20px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      @keyframes circle-draw {
        from {
          stroke-dashoffset: 226;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
      @keyframes check-draw {
        from {
          stroke-dashoffset: 50;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
      @keyframes tick-draw {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes neonGlow {
        0%, 100% {
          text-shadow: 0 0 10px #00D1FF, 0 0 20px #00D1FF, 0 0 30px #00D1FF;
        }
        50% {
          text-shadow: 0 0 20px #00D1FF, 0 0 30px #00D1FF, 0 0 40px #00D1FF;
        }
      }
      /* Modal Animation Classes */
      .animate-circle-draw {
        stroke-dasharray: 226;
        stroke-dashoffset: 226;
        animation: circle-draw 1.5s ease-out 0.2s forwards;
      }
      .animate-check-draw {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        animation: check-draw 1s ease-out 2s forwards;
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      .animate-neonGlow {
        animation: neonGlow 2s ease-in-out infinite;
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
      /* Modal Animation Classes */
      .animate-fade-in {
        animation: fade-in 0.3s ease-out;
      }
      .animate-modal-enter {
        animation: modal-enter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .animate-slide-up {
        animation: slide-up 0.6s ease-out 0.3s both;
      }
      .animate-slide-up-delayed {
        animation: slide-up 0.6s ease-out 0.5s both;
      }
      .animate-slide-up-delayed-2 {
        animation: slide-up 0.6s ease-out 0.7s both;
      }
    `}</style>
  )
}
