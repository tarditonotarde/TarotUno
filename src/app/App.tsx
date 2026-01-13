import { useState, useEffect } from 'react';
import { UnoCard } from './components/UnoCard';
import { shuffleDeck, getTarotReading, type Card } from './utils/tarotReadings';
import { SplashScreen } from './components/SplashScreen';

type Phase = 'pile-past' | 'reveal-past' | 'pile-present' | 'reveal-present' | 'pile-future' | 'reveal-future' | 'all-revealed';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [phase, setPhase] = useState<Phase>('pile-past');
  const [cards, setCards] = useState<Card[]>([]);
  const [isFlippingBack, setIsFlippingBack] = useState(false);

  // Initialize cards on mount
  useEffect(() => {
    const shuffled = shuffleDeck();
    setCards([shuffled[0], shuffled[1], shuffled[2]]);
  }, []);

  const handlePileTap = () => {
    if (phase === 'pile-past') {
      setPhase('reveal-past');
      setTimeout(() => {
        setIsFlippingBack(true);
        setTimeout(() => {
          setPhase('pile-present');
          setIsFlippingBack(false);
        }, 800);
      }, 3000);
    } else if (phase === 'pile-present') {
      setPhase('reveal-present');
      setTimeout(() => {
        setIsFlippingBack(true);
        setTimeout(() => {
          setPhase('pile-future');
          setIsFlippingBack(false);
        }, 800);
      }, 3000);
    } else if (phase === 'pile-future') {
      setPhase('reveal-future');
      setTimeout(() => {
        setIsFlippingBack(true);
        setTimeout(() => {
          setPhase('all-revealed');
          setIsFlippingBack(false);
        }, 800);
      }, 3000);
    }
  };

  const handleReset = () => {
    setPhase('pile-past');
    const shuffled = shuffleDeck();
    setCards([shuffled[0], shuffled[1], shuffled[2]]);
  };

  const getButtonText = () => {
    if (phase === 'pile-past' || phase === 'reveal-past') return 'TAP YOUR PAST';
    if (phase === 'pile-present' || phase === 'reveal-present') return 'TAP YOUR PRESENT';
    if (phase === 'pile-future' || phase === 'reveal-future') return 'TAP YOUR FUTURE';
    return 'DRAW YOUR DOOM';
  };

  const getButtonColor = () => {
    if (phase === 'pile-past' || phase === 'reveal-past') return '#FED116';
    if (phase === 'pile-present' || phase === 'reveal-present') return '#179E4D';
    if (phase === 'pile-future' || phase === 'reveal-future') return '#0062A8';
    return '#ED1C24';
  };

  const isButtonClickable = phase === 'all-revealed';
  const isPileVisible = phase === 'pile-past' || phase === 'pile-present' || phase === 'pile-future';
  const isSingleReveal = phase === 'reveal-past' || phase === 'reveal-present' || phase === 'reveal-future';

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="bg-black flex flex-col items-center justify-between px-[16px] py-[60px] sm:px-6 sm:py-[60px] overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-md mt-4 sm:mt-4 mb-8 sm:mb-6 text-center px-4">
        <h1 className="font-['Poppins',sans-serif] font-bold mb-2 text-[36px] sm:text-[48px]" style={{ lineHeight: '1', color: getButtonColor() }}>
          UNO TAROT
        </h1>
        <p className="text-white/60 font-['Poppins',sans-serif] text-[12px] sm:text-[14px]">
          Where your future is as unpredictable as the game
        </p>
      </div>

      {/* Main content */}
      <div className={`flex-1 flex flex-col items-center ${phase === 'all-revealed' ? 'justify-center' : 'justify-start'} w-full max-w-6xl px-[16px] pt-0 py-[0px] overflow-visible`}>
        {isPileVisible ? (
          // Card pile - CLICKABLE
          <div 
            className="flex flex-col items-center justify-start gap-5 max-w-xs w-full cursor-pointer pt-4 sm:pt-4 p-[0px]"
            onClick={handlePileTap}
            onTouchEnd={(e) => {
              e.preventDefault();
              handlePileTap();
            }}
          >
            <div className="flex justify-center items-center mb-0 min-h-[240px] sm:min-h-[180px] relative overflow-visible">
              <div className="relative w-[85px] h-[140px] scale-[2] sm:scale-[1.5] origin-center">
                {/* Stack of 3 cards */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    transform: 'translate(-6px, -6px)',
                    zIndex: 1
                  }}
                >
                  <UnoCard type="green" value="0" isBack={true} scale={1} />
                </div>
                <div 
                  className="absolute inset-0"
                  style={{ 
                    transform: 'translate(-3px, -3px)',
                    zIndex: 2
                  }}
                >
                  <UnoCard type="green" value="0" isBack={true} scale={1} />
                </div>
                <div 
                  className="absolute inset-0"
                  style={{ 
                    zIndex: 3,
                    animation: 'pulse 2s ease-in-out infinite',
                    filter: 'drop-shadow(0 0 20px rgba(254, 209, 22, 0.3))'
                  }}
                >
                  <UnoCard type="green" value="0" isBack={true} scale={1} />
                </div>
              </div>
            </div>

            {/* Invisible spacer to maintain vertical alignment */}
            <div className="text-center w-full flex flex-col items-center invisible" aria-hidden="true">
              <h3 className="font-['Poppins',sans-serif] font-bold mb-2 text-[18px] sm:text-[20px]">
                PLACEHOLDER
              </h3>
              <div className="bg-white/5 border-2 border-white/10 rounded-lg p-3 sm:p-4 max-w-xs mx-auto">
                <p className="font-['Poppins',sans-serif] leading-relaxed text-[13px] sm:text-[14px]">
                  Placeholder text to maintain vertical spacing consistency with revealed cards
                </p>
              </div>
            </div>
          </div>
        ) : isSingleReveal ? (
          // Single card reveal
          <div 
            className="flex flex-col items-center justify-center gap-5 max-w-xs w-full pt-4 sm:pt-4 p-[0px]"
          >
            <div className="flex justify-center items-center mb-0 min-h-[240px] sm:min-h-[180px] relative overflow-visible">
              {/* Card back pile underneath (always visible) */}
              <div className="absolute inset-0 flex justify-center items-center" style={{ zIndex: 1 }}>
                <div className="relative w-[85px] h-[140px] scale-[2] sm:scale-[1.5] origin-center">
                  {/* Stack of 3 cards - static */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      transform: 'translate(-6px, -6px)',
                      zIndex: 1
                    }}
                  >
                    <UnoCard type="green" value="0" isBack={true} scale={1} />
                  </div>
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      transform: 'translate(-3px, -3px)',
                      zIndex: 2
                    }}
                  >
                    <UnoCard type="green" value="0" isBack={true} scale={1} />
                  </div>
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      zIndex: 3
                    }}
                  >
                    <UnoCard type="green" value="0" isBack={true} scale={1} />
                  </div>
                </div>
              </div>
              
              {/* Revealed card on top */}
              <div
                className="relative scale-[2] sm:scale-[1.5]"
                style={{
                  animation: isFlippingBack ? 'flipBack 0.6s ease-out both' : 'flipReveal 0.6s ease-out both',
                  zIndex: 2
                }}
              >
                <UnoCard
                  type={
                    phase === 'reveal-past' ? cards[0].type :
                    phase === 'reveal-present' ? cards[1].type :
                    cards[2].type
                  }
                  value={
                    phase === 'reveal-past' ? cards[0].value :
                    phase === 'reveal-present' ? cards[1].value :
                    cards[2].value
                  }
                  isBack={false}
                  scale={1}
                />
              </div>
            </div>

            <div className="text-center w-full flex flex-col items-center mt-16 sm:mt-8">
              <h3 className={`font-['Poppins',sans-serif] font-bold mb-2 text-[24px] ${
                phase === 'reveal-past' ? 'text-[#FED116]' : 
                phase === 'reveal-present' ? 'text-[#179E4D]' : 
                'text-[#0062A8]'
              }`}
                style={{
                  animation: isFlippingBack ? 'fadeOut 0.4s ease-out both' : 'fadeIn 0.8s 0.3s ease-out both',
                }}
              >
                {phase === 'reveal-past' ? 'PAST' : phase === 'reveal-present' ? 'PRESENT' : 'FUTURE'}
              </h3>
              <div
                className="bg-white/5 border-2 border-white/10 rounded-lg p-3 sm:p-4 max-w-xs mx-auto"
                style={{
                  animation: isFlippingBack ? 'fadeOut 0.4s ease-out both' : 'fadeIn 0.8s 0.3s ease-out both',
                }}
              >
                <p className="text-white/90 font-['Poppins',sans-serif] leading-relaxed text-[13px] sm:text-[14px]">
                  {getTarotReading(
                    phase === 'reveal-past' ? cards[0] :
                    phase === 'reveal-present' ? cards[1] :
                    cards[2]
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // All three cards revealed
          <div 
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-stretch justify-center gap-6 sm:gap-3 lg:gap-3 w-full overflow-visible"
            style={{
              animation: 'fadeIn 0.6s ease-out both',
            }}
          >
            {/* PAST card */}
            <div
              className="flex flex-col items-center justify-center gap-5 sm:flex-1 sm:min-w-0 sm:max-w-xs"
              style={{
                animation: 'slideIn 0.6s ease-out both',
              }}
            >
              <div
                className="bg-white/5 border-2 border-white/10 rounded-lg p-4 sm:p-5 max-w-xs mx-auto w-full h-full"
                style={{
                  animation: 'fadeIn 0.5s 0.2s ease-out both',
                }}
              >
                <div className="flex flex-row gap-4 items-start mt-[0px] mr-[0px] mb-[12px] ml-[0px]">
                  <div className="flex-shrink-0 flex items-center justify-center w-[50px] min-h-[100px]">
                    <UnoCard
                      type={cards[0].type}
                      value={cards[0].value}
                      isBack={false}
                      scale={0.5}
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-[#FED116] font-['Poppins',sans-serif] font-bold mb-3 text-[18px] sm:text-[20px]">
                      PAST
                    </h3>
                    
                    <p className="text-white/90 font-['Poppins',sans-serif] leading-relaxed text-[13px] sm:text-[14px]">
                      {getTarotReading(cards[0])}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PRESENT card */}
            <div
              className="flex flex-col items-center justify-center gap-5 sm:flex-1 sm:min-w-0 sm:max-w-xs"
              style={{
                animation: 'slideIn 0.6s 0.15s ease-out both',
              }}
            >
              <div
                className="bg-white/5 border-2 border-white/10 rounded-lg p-4 sm:p-5 max-w-xs mx-auto w-full h-full"
                style={{
                  animation: 'fadeIn 0.5s 0.35s ease-out both',
                }}
              >
                <div className="flex flex-row gap-4 items-start mt-[0px] mr-[0px] mb-[12px] ml-[0px]">
                  <div className="flex-shrink-0 flex items-center justify-center w-[50px] min-h-[100px] -translate-y-1">
                    <UnoCard
                      type={cards[1].type}
                      value={cards[1].value}
                      isBack={false}
                      scale={0.5}
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-[#179E4D] font-['Poppins',sans-serif] font-bold mb-3 text-[18px] sm:text-[20px]">
                      PRESENT
                    </h3>
                    
                    <p className="text-white/90 font-['Poppins',sans-serif] leading-relaxed text-[13px] sm:text-[14px]">
                      {getTarotReading(cards[1])}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FUTURE card */}
            <div
              className="flex flex-col items-center justify-center gap-5 sm:flex-1 sm:min-w-0 sm:max-w-xs"
              style={{
                animation: 'slideIn 0.6s 0.3s ease-out both',
              }}
            >
              <div
                className="bg-white/5 border-2 border-white/10 rounded-lg p-4 sm:p-5 max-w-xs mx-auto w-full h-full"
                style={{
                  animation: 'fadeIn 0.5s 0.5s ease-out both',
                }}
              >
                <div className="flex flex-row gap-4 items-start mt-[0px] mr-[0px] mb-[12px] ml-[0px]">
                  <div className="flex-shrink-0 flex items-center justify-center w-[50px] min-h-[100px]">
                    <div className="flex items-center justify-center">
                      <UnoCard
                        type={cards[2].type}
                        value={cards[2].value}
                        isBack={false}
                        scale={0.5}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-[#0062A8] font-['Poppins',sans-serif] font-bold mb-3 text-[18px] sm:text-[20px]">
                      FUTURE
                    </h3>
                    
                    <p className="text-white/90 font-['Poppins',sans-serif] leading-relaxed text-[13px] sm:text-[14px]">
                      {getTarotReading(cards[2])}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center w-full py-[32px] sm:py-[16px]">
        <div className="flex flex-col items-center gap-2">
          {/* Animated colored circles when button is clickable */}
          {(isButtonClickable || isPileVisible) && (
            <div className="flex gap-3 mb-2">
              <div 
                className="w-2 h-2 rounded-full bg-[#ED1C24]"
                style={{
                  animation: 'smoothBounce 1.2s ease-in-out infinite',
                }}
              />
              <div 
                className="w-2 h-2 rounded-full bg-[#0062A8]"
                style={{
                  animation: 'smoothBounce 1.2s ease-in-out infinite',
                  animationDelay: '0.2s',
                }}
              />
              <div 
                className="w-2 h-2 rounded-full bg-[#179E4D]"
                style={{
                  animation: 'smoothBounce 1.2s ease-in-out infinite',
                  animationDelay: '0.4s',
                }}
              />
              <div 
                className="w-2 h-2 rounded-full bg-[#FED116]"
                style={{
                  animation: 'smoothBounce 1.2s ease-in-out infinite',
                  animationDelay: '0.6s',
                }}
              />
            </div>
          )}
          
          <button
            onClick={isButtonClickable ? handleReset : handlePileTap}
            className={`font-['Poppins',sans-serif] font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all text-[16px] sm:text-[18px] hover:scale-105 active:scale-95 cursor-pointer ${ isButtonClickable ? 'text-white' : isPileVisible ? 'text-black' : 'opacity-60 pointer-events-none text-black'
            }`}
            style={{
              backgroundColor: getButtonColor(),
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            {getButtonText()}
          </button>
        </div>
      </div>

      {/* Footer tagline */}
      <p className="text-white/60 font-['Poppins',sans-serif] text-[10px] text-center sm:mb-2">
        Uno Tarot lecture by Claudia Tardito 2025
      </p>

      <style>{`
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

        @keyframes slideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes flipReveal {
          0% {
            transform: perspective(1000px) rotateY(90deg);
          }
          100% {
            transform: perspective(1000px) rotateY(0deg);
          }
        }

        @keyframes flipBack {
          0% {
            transform: perspective(1000px) rotateY(0deg) translateY(0);
          }
          50% {
            transform: perspective(1000px) rotateY(45deg) translateY(-30px);
          }
          100% {
            transform: perspective(1000px) rotateY(90deg) translateY(-50px);
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

        @keyframes pileAppear {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeInCard {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
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

        /* Hide scrollbars */
        * {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        
        *::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Opera */
        }

        body, html {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}