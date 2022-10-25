import React from 'react';
import {
  Stack, Title, Center, Anchor, Group, Paper,
  useMantineTheme,
  Button,
  Checkbox,
  TextInput,
  Box,
  Divider,
} from '@mantine/core';
import { IconBrandGooglePhotos } from '@tabler/icons';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { FcGoogle, FcEngineering, FcExport } from 'react-icons/fc';
import { AuthWrapper } from './styles';

// Provider Buttons
const OAuthButtonGroup = () => {
  return (
    <Group
      position="apart"
      grow
    >
      <Button
        sx={(theme) => ({ borderColor: theme.colors.gray[4] })}
        variant="outline"
      ><FcGoogle size={22} />
      </Button>
      <Button
        sx={(theme) => ({ borderColor: theme.colors.gray[4] })}
        variant="outline"
      ><FcEngineering size={22} />
      </Button>
      <Button
        sx={(theme) => ({ borderColor: theme.colors.gray[4] })}
        variant="outline"
      ><FcExport size={22} />
      </Button>
    </Group>
  );
};

// Forms
const AuthFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  rememberMe: z.boolean(),
});

const AuthForm = () => {
  const form = useForm({
    validate: zodResolver(AuthFormSchema),
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);

    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit((handleSubmit))}>
      <Stack>
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

        <Group
          align="center"
          position="apart"
        >
          <Checkbox
            label="Remember me"
            {...form.getInputProps('rememberMe', { type: 'checkbox' })}
          />
          <Anchor size="sm">Forgot password?</Anchor>
        </Group>

        <Button
          type="submit"
          fullWidth
        >
          Sign In
        </Button>
      </Stack>
    </form>
  );
};

const Auth = () => {
  const theme = useMantineTheme();

  return (
    <AuthWrapper>
      <Stack className="auth__header">
        <Center>
          <IconBrandGooglePhotos
            className="auth__header-logo"
            size={60}
            color={theme.colors.blue[5]}
          />
        </Center>
        <Stack sx={{ textAlign: 'center' }}>
          <Title
            className="auth__header-title"
            weight={500}
            order={1}
          >
            Log in to your account
          </Title>
          <Group
            position="center"
            className="auth__header-message"
          >
            <p>
              Don&apos;t have an account?
              {' '}
              <Anchor
                weight={500}
                href="#"
                className="auth__sign-up-link"
              >
                Sign up
              </Anchor>
            </p>
          </Group>
        </Stack>

        <Paper
          className="auth__content"
          shadow="xl"
          radius="lg"
        >
          <Stack>
            <AuthForm />

            <Divider
              label={(
                <Box sx={(theme) => ({ fontSize: theme.fontSizes.xs + 1 })}>Or continue with</Box>
              )}
              labelPosition="center"
            />

            <OAuthButtonGroup />
          </Stack>
        </Paper>
      </Stack>
    </AuthWrapper>
  );
};

export default Auth;
