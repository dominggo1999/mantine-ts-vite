import {
  Grid, Paper, Text, Container,
  Button, TextInput, Group, Box, Checkbox, Title, SimpleGrid, Space, Tabs, Accordion, Burger, HoverCard, Modal, Kbd,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons';
import { useState } from 'react';
import { z } from 'zod';

import { showNotification } from '@mantine/notifications';
import Card from '.';

export const Basic = () => {
  return (
    <>
      <Card />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem corporis soluta aliquid animi, magni culpa illo sint tempora facere ab excepturi dicta? Similique praesentium, aliquam impedit provident unde suscipit aut sed magni est ullam sapiente hic aperiam, fugiat veniam, nihil commodi porro repellat molestiae cum exercitationem neque consequuntur culpa? Dolorum, quod! Iste ullam dicta dolorum tenetur neque. Ex, dolor consectetur. Minima error ipsam, consectetur sit voluptas iure nihil ab ipsa? Porro ipsa reprehenderit, ea ad ullam iste eum quidem eos dicta nostrum ducimus laborum dolore repellendus inventore! Quibusdam, obcaecati facere in amet, id consequatur dolores exercitationem ad beatae, distinctio eligendi?</p>
    </>
  );
};

const cells = Array.from(Array(12).keys());

export const JustTesting = () => {
  return (
    <Container
      size="lg"
      py={60}
    >
      <Grid gutter="xl">
        {
          cells.map((item) => {
            return (
              <Grid.Col
                sm={6}
                md={4}
                key={`cell-${item}`}
              >
                <Paper
                  shadow="lg"
                  p="xl"
                  sx={{
                    backgroundColor: '#deeaf1',
                  }}
                >
                  <Text
                    size="lg"
                    weight={600}
                  >
                    Paper is the most basic ui component
                  </Text>
                  <Text>
                    Use it to create cards, dropdowns, modals and other components that require background
                    with shadow
                  </Text>
                  <Group
                    mt={20}
                    position="right"
                  >
                    <Button>
                      Test Button
                    </Button>
                  </Group>
                </Paper>
              </Grid.Col>
            );
          })
        }
      </Grid>
    </Container>
  );
};

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(8, { message: 'Password must be at least 8' }),
  termsOfService: z.boolean().refine((val) => Boolean(val), {
    message: 'You must agree to sell your data to continue',
  }),
});

export const FormTest = () => {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);

    form.reset();
  };

  return (
    <Box
      mx="auto"
      sx={{ maxWidth: '400px' }}
    >
      <Title
        size={30}
        order={2}
        mb={20}
      >
        Sign In First
      </Title>
      <form onSubmit={form.onSubmit((handleSubmit))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          type="password"
          withAsterisk
          label="Password"
          placeholder="*******"
          {...form.getInputProps('password')}
        />
        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        {form.errors.termsOfService && (
          <Text
            mt={2}
            size={12}
            color="red"
          >
            {form.errors.termsOfService}
          </Text>
        )}

        <Group
          position="right"
          mt="md"
        >
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export const SuperSimpleGrid = () => {
  const cells = Array.from(Array(5).keys());

  return (
    <Container>
      <SimpleGrid
        spacing="xl"
        breakpoints={[
          { minWidth: 'lg', cols: 3 },
          { minWidth: 'md', cols: 2 },
        ]}
      >
        {
          cells.map((item) => {
            return (
              <Box
                key={`box-${item}`}
                sx={{ padding: '20px', background: '#A7C0DC' }}
              >
                <div>
                  {item}
                </div>
              </Box>
            );
          })
        }
      </SimpleGrid>
    </Container>
  );
};

export const TrySpace = () => {
  return (
    <Group>
      <Button
        color="red"
        fullWidth
        mb={20}
      >
        Red Button
      </Button>
      <Button
        color="green"
      >
        Green Button
      </Button>
    </Group>
  );
};

export const DemoBurger = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close Navigation' : 'Open Navigation';

  return (
    <Group>
      <Burger
        opened={opened}
        title={title}
        onClick={() => setOpened(!opened)}
      />
      <Burger
        size="lg"
        color="red"
        opened={opened}
        title={title}
        onClick={() => setOpened(!opened)}
      />
      <Burger
        size="xl"
        color="green"
        opened={opened}
        title={title}
        onClick={() => setOpened(!opened)}
      />
    </Group>
  );
};

export const CoolTabs = () => {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab
          value="gallery"
          icon={<IconPhoto size={14} />}
        >Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          icon={<IconMessageCircle size={14} />}
        >Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="settings"
          icon={<IconSettings size={14} />}
        >Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel
        value="gallery"
        pt="xs"
      >
        <Accordion defaultValue="customization">
          <Accordion.Item value="customization">
            <Accordion.Control>Customization</Accordion.Control>
            <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="flexibility">
            <Accordion.Control>Flexibility</Accordion.Control>
            <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="focus-ring">
            <Accordion.Control>No annoying focus ring</Accordion.Control>
            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Tabs.Panel>

      <Tabs.Panel
        value="messages"
        pt="xs"
      >
        <DemoBurger />
      </Tabs.Panel>

      <Tabs.Panel
        value="settings"
        pt="xs"
      >
        <Group position="center">
          <HoverCard
            position="bottom-end"
            width={350}
            shadow="md"
          >
            <HoverCard.Target>
              <Button>Hover to reveal the card</Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Accordion defaultValue="customization">
                <Accordion.Item value="customization">
                  <Accordion.Control>Customization</Accordion.Control>
                  <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="flexibility">
                  <Accordion.Control>Flexibility</Accordion.Control>
                  <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="focus-ring">

                  <HoverCard position="bottom">
                    <HoverCard.Target>
                      <Button>Hover to reveal the card</Button>
                    </HoverCard.Target>

                    <HoverCard.Dropdown>
                      <Paper>
                        <p>Lorem </p>
                      </Paper>
                    </HoverCard.Dropdown>

                  </HoverCard>

                </Accordion.Item>
              </Accordion>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </Tabs.Panel>
    </Tabs>
  );
};

export const TryModal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        styles={{
          title: {
            fontSize: 30,
            fontWeight: 600,
          },
          close: {
            color: 'red',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: '#1E1E1E',
            },
          },
        }}
      >
        <>
          <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
          <Space h={20} />
          <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> + <Kbd>M</Kbd>
        </>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolor placeat ullam similique nobis itaque impedit asperiores deserunt laboriosam perspiciatis.</p>

        <Button
          variant="outline"
          onClick={() => showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })}
        >
          Notify Me
        </Button>

      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
};
export default {
  title: 'Card',
};
