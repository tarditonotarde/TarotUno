import * as UnoCardComponents from './UnoCardWrapper';

interface UnoCardProps {
  type: 'green' | 'red' | 'blue' | 'yellow' | 'wild';
  value: string;
  isBack?: boolean;
  scale?: number;
}

// Map card IDs to Figma component names
const getCardComponentName = (type: string, value: string): string => {
  const id = `${type}-${value.toLowerCase().replace(/\s+/g, '')}`;
  
  const cardMap: Record<string, keyof typeof UnoCardComponents> = {
    // Green cards
    'green-0': 'Green',
    'green-1': 'Green8',
    'green-2': 'Green9',
    'green-3': 'Green10',
    'green-4': 'Green11',
    'green-5': 'Green12',
    'green-6': 'Green13',
    'green-7': 'Green14',
    'green-8': 'Green16',
    'green-9': 'Green17',
    'green-skip': 'GreenSkip',
    'green-reverse': 'GreenReverse',
    'green-draw2': 'GreenDraw',
    
    // Red cards
    'red-0': 'Red',
    'red-1': 'Red1',
    'red-2': 'Red2',
    'red-3': 'Red3',
    'red-4': 'Red4',
    'red-5': 'Red5',
    'red-6': 'Red6',
    'red-7': 'Red7',
    'red-8': 'Red8',
    'red-9': 'Red9',
    'red-skip': 'RedSkip',
    'red-reverse': 'RedReverse',
    'red-draw2': 'RedDraw',
    
    // Blue cards
    'blue-0': 'Blue',
    'blue-1': 'Blue1',
    'blue-2': 'Blue2',
    'blue-3': 'Blue3',
    'blue-4': 'Blue4',
    'blue-5': 'Blue5',
    'blue-6': 'Blue6',
    'blue-7': 'Blue7',
    'blue-8': 'Blue8',
    'blue-9': 'Blue9',
    'blue-skip': 'BlueSkip',
    'blue-reverse': 'BlueReverse',
    'blue-draw2': 'BlueDraw',
    
    // Yellow cards
    'yellow-0': 'Yellow',
    'yellow-1': 'Yellow1',
    'yellow-2': 'Yellow2',
    'yellow-3': 'Yellow3',
    'yellow-4': 'Yellow4',
    'yellow-5': 'Yellow5',
    'yellow-6': 'Yellow6',
    'yellow-7': 'Yellow7',
    'yellow-8': 'Yellow8',
    'yellow-9': 'Yellow9',
    'yellow-skip': 'YellowSkip',
    'yellow-reverse': 'YellowReverse',
    'yellow-draw2': 'YellowDraw',
    
    // Wild cards
    'wild-wild': 'Wild',
    'wild-wilddraw4': 'Draw',
  };
  
  return cardMap[id] || 'CardBack';
};

export function UnoCard({ type, value, isBack = false, scale = 1 }: UnoCardProps) {
  if (isBack) {
    const CardBack = UnoCardComponents.CardBack;
    return (
      <div 
        className="inline-block -mb-12"
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      >
        <CardBack />
      </div>
    );
  }

  const componentName = getCardComponentName(type, value);
  const CardComponent = UnoCardComponents[componentName as keyof typeof UnoCardComponents] as React.FC;

  if (!CardComponent) {
    // Fallback if component not found
    return (
      <div 
        className="bg-gray-800 rounded-lg -mb-12"
        style={{ 
          width: `${85 * scale}px`,
          height: `${140 * scale}px`,
        }}
      />
    );
  }

  return (
    <div 
      className="inline-block -mb-12"
      style={{ 
        transform: `scale(${scale})`,
        transformOrigin: 'center',
      }}
    >
      <CardComponent />
    </div>
  );
}