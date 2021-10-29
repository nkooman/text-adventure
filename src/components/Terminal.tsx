import { FC } from 'react';
import 'twin.macro';

export const Terminal: FC = ({ children }) => (
  <div tw="height[35rem] width[70rem]  font-size[1.2rem] grid grid-template[3rem 1fr / 1fr]">
    <div tw="bg-gray-800 relative">
      <div tw="bg-black width[fit-content] py-2 pl-5 pr-16 font-size[1rem] absolute left-4 bottom-0 rounded-t-md after:(content['✖'] absolute right-5)">
        C:\Games\text-adventure
      </div>
      <div tw="right-0 mr-5 height[100%] grid grid-flow-col justify-end gap-5 align-items[center] font-size[0.75rem]">
        <span>➖</span>
        <span>🔳</span>
        <span>✖</span>
      </div>
    </div>
    <div tw="bg-black padding[1rem]">{children}</div>
  </div>
);
