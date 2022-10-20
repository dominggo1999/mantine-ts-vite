import type { GlobalProvider } from '@ladle/react';
import { MantineProvider } from '@mantine/core';

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
  >
    {children}

  </MantineProvider>
);
