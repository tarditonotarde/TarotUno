import React from 'react';
import * as OriginalCards from '../../imports/UnoCards';

// This wrapper creates standalone versions of the Figma cards
// by overriding their absolute positioning

const createCardWrapper = (CardComponent: React.FC): React.FC => {
  return () => (
    <div className="relative w-[85px] h-[140px] overflow-hidden">
      <div className="absolute inset-0 [&>div]:!static [&>div]:!left-auto [&>div]:!top-auto [&>div]:!w-[85px] [&>div]:!h-[140px]">
        <CardComponent />
      </div>
    </div>
  );
};

// Export wrapped versions of all cards
export const Green = createCardWrapper(OriginalCards.Green);
export const Green1 = createCardWrapper(OriginalCards.Green1);
export const Green2 = createCardWrapper(OriginalCards.Green2);
export const Green3 = createCardWrapper(OriginalCards.Green3);
export const Green4 = createCardWrapper(OriginalCards.Green4);
export const Green5 = createCardWrapper(OriginalCards.Green5);
export const Green6 = createCardWrapper(OriginalCards.Green6);
export const Green7 = createCardWrapper(OriginalCards.Green7);
export const Green8 = createCardWrapper(OriginalCards.Green8);
export const Green9 = createCardWrapper(OriginalCards.Green9);
export const Green10 = createCardWrapper(OriginalCards.Green10);
export const Green11 = createCardWrapper(OriginalCards.Green11);
export const Green12 = createCardWrapper(OriginalCards.Green12);
export const Green13 = createCardWrapper(OriginalCards.Green13);
export const Green14 = createCardWrapper(OriginalCards.Green14);
export const Green15 = createCardWrapper(OriginalCards.Green15);
export const Green16 = createCardWrapper(OriginalCards.Green16);
export const Green17 = createCardWrapper(OriginalCards.Green17);

export const Red = createCardWrapper(OriginalCards.Red);
export const Red1 = createCardWrapper(OriginalCards.Red1);
export const Red2 = createCardWrapper(OriginalCards.Red2);
export const Red3 = createCardWrapper(OriginalCards.Red3);
export const Red4 = createCardWrapper(OriginalCards.Red4);
export const Red5 = createCardWrapper(OriginalCards.Red5);
export const Red6 = createCardWrapper(OriginalCards.Red6);
export const Red7 = createCardWrapper(OriginalCards.Red7);
export const Red8 = createCardWrapper(OriginalCards.Red8);
export const Red9 = createCardWrapper(OriginalCards.Red9);

export const Blue = createCardWrapper(OriginalCards.Blue);
export const Blue1 = createCardWrapper(OriginalCards.Blue1);
export const Blue2 = createCardWrapper(OriginalCards.Blue2);
export const Blue3 = createCardWrapper(OriginalCards.Blue3);
export const Blue4 = createCardWrapper(OriginalCards.Blue4);
export const Blue5 = createCardWrapper(OriginalCards.Blue5);
export const Blue6 = createCardWrapper(OriginalCards.Blue6);
export const Blue7 = createCardWrapper(OriginalCards.Blue7);
export const Blue8 = createCardWrapper(OriginalCards.Blue8);
export const Blue9 = createCardWrapper(OriginalCards.Blue9);

export const Yellow = createCardWrapper(OriginalCards.Yellow);
export const Yellow1 = createCardWrapper(OriginalCards.Yellow1);
export const Yellow2 = createCardWrapper(OriginalCards.Yellow2);
export const Yellow3 = createCardWrapper(OriginalCards.Yellow3);
export const Yellow4 = createCardWrapper(OriginalCards.Yellow4);
export const Yellow5 = createCardWrapper(OriginalCards.Yellow5);
export const Yellow6 = createCardWrapper(OriginalCards.Yellow6);
export const Yellow7 = createCardWrapper(OriginalCards.Yellow7);
export const Yellow8 = createCardWrapper(OriginalCards.Yellow8);
export const Yellow9 = createCardWrapper(OriginalCards.Yellow9);

export const GreenSkip = createCardWrapper(OriginalCards.GreenSkip);
export const GreenSkip1 = createCardWrapper(OriginalCards.GreenSkip1);
export const RedSkip = createCardWrapper(OriginalCards.RedSkip);
export const RedSkip1 = createCardWrapper(OriginalCards.RedSkip1);
export const BlueSkip = createCardWrapper(OriginalCards.BlueSkip);
export const RedSkip2 = createCardWrapper(OriginalCards.RedSkip2);
export const YellowSkip = createCardWrapper(OriginalCards.YellowSkip);
export const YellowSkip1 = createCardWrapper(OriginalCards.YellowSkip1);

export const GreenDraw = createCardWrapper(OriginalCards.GreenDraw);
export const GreenDraw1 = createCardWrapper(OriginalCards.GreenDraw1);
export const GreenDraw2 = createCardWrapper(OriginalCards.GreenDraw2);
export const RedDraw = createCardWrapper(OriginalCards.RedDraw);
export const RedDraw1 = createCardWrapper(OriginalCards.RedDraw1);
export const BlueDraw = createCardWrapper(OriginalCards.BlueDraw);
export const BlueDraw1 = createCardWrapper(OriginalCards.BlueDraw1);
export const YellowDraw = createCardWrapper(OriginalCards.YellowDraw);
export const YellowDraw1 = createCardWrapper(OriginalCards.YellowDraw1);

export const GreenReverse = createCardWrapper(OriginalCards.GreenReverse);
export const GreenReverse1 = createCardWrapper(OriginalCards.GreenReverse1);
export const RedReverse = createCardWrapper(OriginalCards.RedReverse);
export const RedReverse1 = createCardWrapper(OriginalCards.RedReverse1);
export const BlueReverse = createCardWrapper(OriginalCards.BlueReverse);
export const BlueReverse1 = createCardWrapper(OriginalCards.BlueReverse1);
export const YellowReverse = createCardWrapper(OriginalCards.YellowReverse);
export const YellowReverse1 = createCardWrapper(OriginalCards.YellowReverse1);

export const Wild = createCardWrapper(OriginalCards.Wild);
export const Wild1 = createCardWrapper(OriginalCards.Wild1);
export const Wild2 = createCardWrapper(OriginalCards.Wild2);
export const Wild3 = createCardWrapper(OriginalCards.Wild3);
export const Draw = createCardWrapper(OriginalCards.Draw);
export const Draw1 = createCardWrapper(OriginalCards.Draw1);
export const Draw2 = createCardWrapper(OriginalCards.Draw2);
export const Draw3 = createCardWrapper(OriginalCards.Draw3);

export const CardBack = createCardWrapper(OriginalCards.CardBack);