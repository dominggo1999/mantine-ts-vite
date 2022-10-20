import {
  Grid, Paper, Text, Container,
  Button, TextInput, Group, Box, Checkbox, Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

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

export default {
  title: 'Card',
};
