// types/twin.d.ts
import 'twin.macro';
import styledImport, { css as cssImport } from 'styled-components';

// Allow interpolation: css`${MyStyledComponent}:hover & { //... }`
type Interpolation = ObjectInterpolation<undefined>;

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport | Interpolation;
  const css: typeof cssImport | Interpolation;
}

// declare module 'react' {
//   // The css prop
//   interface HTMLAttributes<T> extends DOMAttributes<T> {
//     css?: CSSProp;
//   }
//   // The inline svg css prop
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   interface SVGProps<T> extends SVGProps<SVGSVGElement> {
//     css?: CSSProp;
//   }
// }

// // The 'as' prop on styled components
// declare global {
//   namespace JSX {
//     interface IntrinsicAttributes<T> extends DOMAttributes<T> {
//       as?: string | Element;
//     }
//   }
// }
