import { Dispatch, FC, SetStateAction } from 'react';
import tw from 'twin.macro';
import { Line } from './Line';

export type Options = Record<string, string>;

interface SelectionProps {
  context: string;
  options: Options;
  value: keyof Options;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Selection: FC<SelectionProps> = ({ context, options, value, onChange }) => (
  <Line
    context={context}
    text={() => (
      <div tw="grid grid-auto-flow[row] gap[0.5ch]">
        {Object.entries(options).map(([key, label], index) => (
          <label
            key={key}
            css={[
              key === value && tw`after:(content[' <'])`,
              tw`focus-within:after:(content[' <'])`,
            ]}
          >
            <input
              ref={(ref) => ref && index === 0 && ref.focus()}
              type="radio"
              value={key}
              checked={key === value}
              onChange={(e) => {
                onChange(
                  Object.entries(options).find((option) => e.target.value === option[0])?.[0] ?? ''
                );
              }}
              tw="appearance-none"
            />
            {label}
          </label>
        ))}
      </div>
    )}
  />
);
