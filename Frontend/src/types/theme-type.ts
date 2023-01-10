import { DefaultTheme } from 'styled-components';
import 'styled-components';

import { QUERIES } from '../utils/constants';

export type BREAKPOINTS_TYPES = {
  [query: string]: number,
};

export type MediaQueryProps = {
  [query: string]: string,
};

declare module 'styled-components' {
  interface DefaultTheme {  
    queries: MediaQueryProps,
  }
}

export const theme: DefaultTheme = {
  queries: QUERIES,
};