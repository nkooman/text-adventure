import { FC } from 'react';
import 'twin.macro';

interface LineProps {
  context: string;
  text: string;
}

export const Line: FC<LineProps> = ({ context, text }) => (
  <p>
    <span tw="bg-blue-700">{context}</span> {'>'} {text}
  </p>
);
