import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import tw from 'twin.macro';
import { Line } from './Line';

const StyledSpan = tw.span`
  bg-transparent
  text-white
  caret-transparent
  outline-none
  relative
  flex
  width[min-content]
  whitespace-nowrap
  after:(
    content['']
    animate-blink
    width[0.5rem]
    height[2ex]
    bg-white 
    block
    absolute
    right[-1ch]
    top-0
  )`;

export const Input: FC<{
  setState: Dispatch<SetStateAction<string>>;
  context: string;
}> = ({ setState, context }) => {
  const input = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  return (
    <Line
      context={context}
      text={() => (
        <StyledSpan
          ref={input}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          onInput={(e) => setState((e.target as HTMLSpanElement).innerText)}
        />
      )}
    />
  );
};
