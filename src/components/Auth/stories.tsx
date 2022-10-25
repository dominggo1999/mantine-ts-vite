import {
  AppShell, Navbar, Header, Aside, Footer,
  ScrollArea,
} from '@mantine/core';
import Auth from '.';

export const Basic = () => {
  return (
    <Auth />
  );
};

export const Shell = () => {
  return (
    <AppShell
      padding="md"
      navbar={(
        <Navbar
          width={{ base: 300 }}
          p="xs"
          sx={{ overflowY: 'auto' }}
        >
          <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>

          <Navbar.Section
            grow
            component={ScrollArea}
            mx="-xs"
            px="xs"
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem ipsum obcaecati non quos aperiam fugit dolores, maxime eum nostrum impedit consequatur soluta rem ea nihil delectus inventore voluptates minima ex. Nemo tenetur explicabo a, neque nihil minima alias earum optio natus nesciunt ab, error modi pariatur est architecto quidem aliquid nam ipsam qui vero asperiores? Dolor nesciunt possimus corporis magni, nobis architecto eos, quidem enim amet animi unde, praesentium ab ad sapiente laudantium natus distinctio expedita veritatis mollitia ullam fugiat beatae totam voluptatibus? Esse fuga at aperiam ea fugit labore, sunt nemo rerum voluptate fugiat illo cum possimus sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem ipsum obcaecati non quos aperiam fugit dolores, maxime eum nostrum impedit consequatur soluta rem ea nihil delectus inventore voluptates minima ex. Nemo tenetur explicabo a, neque nihil minima alias earum optio natus nesciunt ab, error modi pariatur est architecto quidem aliquid nam ipsam qui vero asperiores? Dolor nesciunt possimus corporis magni, nobis architecto eos, quidem enim amet animi unde, praesentium ab ad sapiente laudantium natus distinctio expedita veritatis mollitia ullam fugiat beatae totam voluptatibus? Esse fuga at aperiam ea fugit labore, sunt nemo rerum voluptate fugiat illo cum possimus sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem ipsum obcaecati non quos aperiam fugit dolores, maxime eum nostrum impedit consequatur soluta rem ea nihil delectus inventore voluptates minima ex. Nemo tenetur explicabo a, neque nihil minima alias earum optio natus nesciunt ab, error modi pariatur est architecto quidem aliquid nam ipsam qui vero asperiores? Dolor nesciunt possimus corporis magni, nobis architecto eos, quidem enim amet animi unde, praesentium ab ad sapiente laudantium natus distinctio expedita veritatis mollitia ullam fugiat beatae totam voluptatibus? Esse fuga at aperiam ea fugit labore, sunt nemo rerum voluptate fugiat illo cum possimus sequi.</p>
          </Navbar.Section>

          <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
      )}
      header={(
        <Header
          height={60}
          p="xs"
        >{/* Header content */}
        </Header>
      )}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
};
Shell.meta = { iframed: true };

export default {
  title: 'Auth',
};
