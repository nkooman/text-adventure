import { FC } from 'react';
import 'twin.macro';

interface LineProps {
  context: string;
  text: string | (() => JSX.Element);
}

export const Line: FC<LineProps> = ({ context, text }) => (
  <div tw="grid gap[1ch] grid[1fr / auto auto 1fr] line-height[1]">
    <span tw="bg-blue-700 align-self[flex-start]">{context}</span> {'>'}{' '}
    {typeof text === 'string' ? text : text()}
  </div>
);
