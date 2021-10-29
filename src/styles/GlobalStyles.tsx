import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font: 62.5%;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500` as string};
    ${tw`antialiased`};
    font-family: ${theme`fontFamily.display` as string};
    background-color: ${theme`colors.gray.900` as string};
    color: ${theme`colors.white` as string};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #root {
    display: contents;
  }
`;

export const GlobalStyles: FC = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
