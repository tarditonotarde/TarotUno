export interface Card {
  id: string;
  type: 'green' | 'red' | 'blue' | 'yellow' | 'wild';
  value: string;
}

export const allCards: Card[] = [
  // Green cards
  { id: 'green-0', type: 'green', value: '0' },
  { id: 'green-1', type: 'green', value: '1' },
  { id: 'green-2', type: 'green', value: '2' },
  { id: 'green-3', type: 'green', value: '3' },
  { id: 'green-4', type: 'green', value: '4' },
  { id: 'green-5', type: 'green', value: '5' },
  { id: 'green-6', type: 'green', value: '6' },
  { id: 'green-7', type: 'green', value: '7' },
  { id: 'green-8', type: 'green', value: '8' },
  { id: 'green-9', type: 'green', value: '9' },
  { id: 'green-skip', type: 'green', value: 'Skip' },
  { id: 'green-reverse', type: 'green', value: 'Reverse' },
  { id: 'green-draw2', type: 'green', value: 'Draw 2' },
  // Red cards
  { id: 'red-0', type: 'red', value: '0' },
  { id: 'red-1', type: 'red', value: '1' },
  { id: 'red-2', type: 'red', value: '2' },
  { id: 'red-3', type: 'red', value: '3' },
  { id: 'red-4', type: 'red', value: '4' },
  { id: 'red-5', type: 'red', value: '5' },
  { id: 'red-6', type: 'red', value: '6' },
  { id: 'red-7', type: 'red', value: '7' },
  { id: 'red-8', type: 'red', value: '8' },
  { id: 'red-9', type: 'red', value: '9' },
  { id: 'red-skip', type: 'red', value: 'Skip' },
  { id: 'red-reverse', type: 'red', value: 'Reverse' },
  { id: 'red-draw2', type: 'red', value: 'Draw 2' },
  // Blue cards
  { id: 'blue-0', type: 'blue', value: '0' },
  { id: 'blue-1', type: 'blue', value: '1' },
  { id: 'blue-2', type: 'blue', value: '2' },
  { id: 'blue-3', type: 'blue', value: '3' },
  { id: 'blue-4', type: 'blue', value: '4' },
  { id: 'blue-5', type: 'blue', value: '5' },
  { id: 'blue-6', type: 'blue', value: '6' },
  { id: 'blue-7', type: 'blue', value: '7' },
  { id: 'blue-8', type: 'blue', value: '8' },
  { id: 'blue-9', type: 'blue', value: '9' },
  { id: 'blue-skip', type: 'blue', value: 'Skip' },
  { id: 'blue-reverse', type: 'blue', value: 'Reverse' },
  { id: 'blue-draw2', type: 'blue', value: 'Draw 2' },
  // Yellow cards
  { id: 'yellow-0', type: 'yellow', value: '0' },
  { id: 'yellow-1', type: 'yellow', value: '1' },
  { id: 'yellow-2', type: 'yellow', value: '2' },
  { id: 'yellow-3', type: 'yellow', value: '3' },
  { id: 'yellow-4', type: 'yellow', value: '4' },
  { id: 'yellow-5', type: 'yellow', value: '5' },
  { id: 'yellow-6', type: 'yellow', value: '6' },
  { id: 'yellow-7', type: 'yellow', value: '7' },
  { id: 'yellow-8', type: 'yellow', value: '8' },
  { id: 'yellow-9', type: 'yellow', value: '9' },
  { id: 'yellow-skip', type: 'yellow', value: 'Skip' },
  { id: 'yellow-reverse', type: 'yellow', value: 'Reverse' },
  { id: 'yellow-draw2', type: 'yellow', value: 'Draw 2' },
  // Wild cards
  { id: 'wild-1', type: 'wild', value: 'Wild' },
  { id: 'wild-2', type: 'wild', value: 'Wild' },
  { id: 'wild-3', type: 'wild', value: 'Wild' },
  { id: 'wild-4', type: 'wild', value: 'Wild' },
  { id: 'wild-draw4-1', type: 'wild', value: 'Wild Draw 4' },
  { id: 'wild-draw4-2', type: 'wild', value: 'Wild Draw 4' },
  { id: 'wild-draw4-3', type: 'wild', value: 'Wild Draw 4' },
  { id: 'wild-draw4-4', type: 'wild', value: 'Wild Draw 4' },
];

export function getTarotReading(card: Card): string {
  const { type, value } = card;
  const color = type.toUpperCase();

  // Number cards
  if (!isNaN(Number(value))) {
    const num = Number(value);
    const colorReadings: Record<string, string[]> = {
      GREEN: [
        'Absolute nothingness. Your past was as eventful as watching paint dry. Congratulations on achieving peak mediocrity.',
        'You took one step forward. Spoiler alert: you\'ll take two steps back.',
        'Two choices, both terrible. You picked the slightly less catastrophic one.',
        'Third time\'s the charm, they said. They lied. It was actually worse.',
        'Four walls closing in. But hey, at least you had walls.',
        'Five stages of grief, you\'re stuck at denial. Good luck with that.',
        'Six feet under your responsibilities. Still digging.',
        'Lucky number seven? More like "why did I even try" number seven.',
        'Eight ball says: outlook not so good. The eight ball never lies.',
        'Nine lives wasted. You\'re a cat who keeps landing on its face.',
      ],
      RED: [
        'Zero accountability for your actions. Classic move.',
        'Number one at disappointing people. At least you\'re consistent.',
        'Two-faced decisions that came back to haunt you. Shocking.',
        'Three strikes and you\'re out. You knew the rules.',
        'Four alarm fire of bad choices. Did you bring marshmallows?',
        'Five finger discount on your dignity. It was on clearance anyway.',
        'Six ways to Sunday you messed this up. Impressive range.',
        'Seven deadly sins? You collected them all like Pokémon.',
        'Eight hours of sleep you\'ll never get back worrying about this.',
        'Nine circles of hell, you\'re shopping for real estate in all of them.',
      ],
      BLUE: [
        'Zero emotional intelligence detected. Have you tried turning it off and on again?',
        'One brain cell working overtime. Give it a break.',
        'Two wrongs don\'t make a right, but you\'re going for three anyway.',
        'Three\'s a crowd, especially when all three are your problems.',
        'Four horsemen of the apocalypse are taking notes from you.',
        'Five-star rating in self-sabotage. Yelp reviewers are impressed.',
        'Six pack of regret, now available in your emotional fridge.',
        'Seven year itch? Try seven minute commitment issues.',
        'Eight track mind stuck on the same mistake. Very retro.',
        'Nine-to-five grinding your soul into dust. Living the dream!',
      ],
      YELLOW: [
        'Zero surprise here. This was telegraphed from miles away.',
        'One hit wonder of bad timing. At least you made an impact.',
        'Two for one deal on anxiety. What a bargain!',
        'Three sheets to the wind and still making decisions. Bold.',
        'Four leaf clover you stepped on. Luck has left the chat.',
        'Five o\'clock somewhere? It\'s rock bottom o\'clock here.',
        'Six degrees of separation from common sense.',
        'Seven samurai couldn\'t save this situation. You tried though.',
        'Eight ball, corner pocket of despair. Nice shot.',
        'Nine yards you went. Should\'ve stopped at three.',
      ],
    };

    return colorReadings[color]?.[num] || 'The universe shrugs at this number.';
  }

  // Special cards
  const cardKey = `${color}-${value.toUpperCase()}`;
  const specialReadings: Record<string, string> = {
    'GREEN-SKIP': 'Skip ahead, they said. You skipped right over the important parts. Now you\'re lost.',
    'GREEN-REVERSE': 'Reverse your mistakes? Too late. The damage is permanent. Enjoy the memories.',
    'GREEN-DRAW 2': 'Draw two more problems to add to your collection. You\'re a hoarder of misery.',
    
    'RED-SKIP': 'Skipped your chance at redemption. It was right there. How did you miss it?',
    'RED-REVERSE': 'Uno reverse card on your happiness. The universe is laughing at you.',
    'RED-DRAW 2': 'Two more issues drawn from the deck of chaos. Your hand is getting heavy.',
    
    'BLUE-SKIP': 'Skipped the tutorial, now you\'re dying on level one. Classic.',
    'BLUE-REVERSE': 'Reversed into the same parking spot of failure. You have a reserved space.',
    'BLUE-DRAW 2': 'Draw two conclusions: both wrong. Your analytical skills are impressive.',
    
    'YELLOW-SKIP': 'Skip to the end? It doesn\'t get better. Spoiler: you don\'t win.',
    'YELLOW-REVERSE': 'Reverse psychology worked on you. You\'re that predictable.',
    'YELLOW-DRAW 2': 'Draw two straws, both are short. The universe is consistent, at least.',
    
    'WILD-WILD': 'Wild card of chaos. Anything could happen! (It will be bad.)',
    'WILD-WILD DRAW 4': 'Draw four horsemen of the apocalypse. They\'re all riding toward you. Lovely.',
  };

  return specialReadings[cardKey] || 'The cards speak in riddles. So does your therapist.';
}

export function shuffleDeck(): Card[] {
  const deck = [...allCards];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
