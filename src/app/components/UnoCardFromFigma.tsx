import Frame1 from '../../imports/Frame1';

interface UnoCardProps {
  type: 'green' | 'red' | 'blue' | 'yellow' | 'wild';
  value: string;
  isBack?: boolean;
  scale?: number;
}

export function UnoCardFromFigma({ type, value, isBack = false, scale = 1 }: UnoCardProps) {
  // Card mapping - adjust positioning classes to make cards standalone
  const getCardComponent = () => {
    if (isBack) {
      // Return the card back from Figma Frame1
      return (
        <div style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}>
          <Frame1 />
        </div>
      );
    }

    // For now, fallback to Frame1 which contains all cards
    // We'll extract individual cards in the next step
    return (
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}>
        <Frame1 />
      </div>
    );
  };

  return (
    <div className="relative inline-block">
      {getCardComponent()}
    </div>
  );
}
