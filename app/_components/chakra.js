'use client';

import {
  ChakraProvider as StyleProvider,
  extendTheme,
} from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';

export default function ChakraProvider({ children }) {
  return (
    <CacheProvider>
      <StyleProvider theme={theme}>
        {children}
      </StyleProvider>
    </CacheProvider>
  );
}

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        cursor: 'default',
      },
    },
  },
});
