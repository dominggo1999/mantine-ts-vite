import type { GlobalProvider } from '@ladle/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export const Provider: GlobalProvider = ({ children, globalState }) => {
  return (

    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: globalState.theme as 'dark' | 'light' }}
    >
      <NotificationsProvider>
        {children}
      </NotificationsProvider>
    </MantineProvider>
  );
};
