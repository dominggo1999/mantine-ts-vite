import {
  Box, Center, Paper, Button, Text, Grid, createStyles, Anchor,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';

export const Basic = () => {
  return (
    <Paper
      shadow="xl"
      sx={{ maxWidth: 800 }}
    >
      <Center>
        <Box sx={{ padding: 30 }}>
          <Text align="center">Hello World</Text>
          <Button
            mt="xl"
            variant="outline"
          >
            Hello World 2
          </Button>
        </Box>
      </Center>
    </Paper>
  );
};

const useStyles = createStyles((theme) => ({
  col: {
    borderColor: theme.colors.red[2],
    borderWidth: 2,
    borderStyle: 'solid',
  },
}));

export const WithGrids = () => {
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col
        span={6}
        className={classes.col}
      >
        <Center>
          <Text>Lorem ipsum</Text>
        </Center>
      </Grid.Col>
      <Grid.Col
        span={6}
        className={classes.col}
      >
        <Center>
          <Button>
            Hello World
          </Button>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export const CenterInine = () => {
  return (
    <Anchor
      href="#"
    >
      <Center inline>
        <IconArrowLeft size={14} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
};

export default {
  title: 'Center',
};
