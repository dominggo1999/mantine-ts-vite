import type { GlobalProvider } from '@ladle/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
  >
    <NotificationsProvider>
      {children}
    </NotificationsProvider>
  </MantineProvider>
);
