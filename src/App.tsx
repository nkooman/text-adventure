import { FC } from 'react';
import { Terminal } from '@/components/Terminal';
import { Line } from '@/components/Line';
import 'twin.macro';

export const App: FC = () => (
  <div tw="grid place-items-center height[100%] width[100%]">
    <Terminal>
      <Line context="Game@Tavern" text="Text Adventure!" />
      <Line context="Game@Tavern" text="Woah!" />
    </Terminal>
  </div>
);
