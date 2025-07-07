"use client"

export default function FAQStyles() {
  return (
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideDown {
        from {
          max-height: 0;
          opacity: 0;
        }
        to {
          max-height: 400px;
          opacity: 1;
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-slide-down {
        animation: slideDown 0.5s ease-out forwards;
      }

      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Focus styles for better accessibility */
      button:focus-visible {
        outline: 2px solid #00D1FF;
        outline-offset: 2px;
      }

      /* Custom scrollbar for overflow content */
      .overflow-y-auto::-webkit-scrollbar {
        width: 4px;
      }
      
      .overflow-y-auto::-webkit-scrollbar-track {
        background: rgba(0, 209, 255, 0.1);
        border-radius: 2px;
      }
      
      .overflow-y-auto::-webkit-scrollbar-thumb {
        background: rgba(0, 209, 255, 0.5);
        border-radius: 2px;
      }
      
      .overflow-y-auto::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 209, 255, 0.7);
      }
    `}</style>
  )
}
