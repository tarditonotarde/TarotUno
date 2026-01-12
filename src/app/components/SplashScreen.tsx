import Surface1 from '../../imports/Surface1';
import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // Wait for animation to complete (4.4s + 0.6s)

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      style={{
        animation: 'fadeOut 0.6s 4.4s ease-out both',
      }}
    >
      {/* Logo UNO */}
      <div 
        className="w-[200px] sm:w-[280px] mb-12"
        style={{
          animation: 'scaleInLogo 0.8s ease-out both',
        }}
      >
        <Surface1 />
      </div>

      {/* Animated colored circles */}
      <div 
        className="flex gap-4"
        style={{
          animation: 'fadeIn 0.6s 0.4s ease-out both',
        }}
      >
        <div 
          className="w-3 h-3 rounded-full bg-[#ED1C24]"
          style={{
            animation: 'smoothBounce 1.2s ease-in-out infinite',
          }}
        />
        <div 
          className="w-3 h-3 rounded-full bg-[#0062A8]"
          style={{
            animation: 'smoothBounce 1.2s ease-in-out infinite',
            animationDelay: '0.2s',
          }}
        />
        <div 
          className="w-3 h-3 rounded-full bg-[#179E4D]"
          style={{
            animation: 'smoothBounce 1.2s ease-in-out infinite',
            animationDelay: '0.4s',
          }}
        />
        <div 
          className="w-3 h-3 rounded-full bg-[#FED116]"
          style={{
            animation: 'smoothBounce 1.2s ease-in-out infinite',
            animationDelay: '0.6s',
          }}
        />
      </div>

      <style>{`
        @keyframes scaleInLogo {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes smoothBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}