import React from 'react';
import { Button, Grid } from '@mantine/core';

const Card = () => {
  return (
    <Grid
      gutter="xl"
    >
      <Grid.Col span={3}>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
        >
          Indigo cyan
        </Button>
      </Grid.Col>
      <Grid.Col span={3}>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
        >
          Indigo cyan
        </Button>
      </Grid.Col>
      <Grid.Col span={3}>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
        >
          Indigo cyan
        </Button>
      </Grid.Col>
      <Grid.Col span={3}>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
        >
          Indigo cyan
        </Button>
      </Grid.Col>
    </Grid>
  );
};

export default Card;
