import { Progress, Slider, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

export const Experiment = () => {
  const [value, setValue] = useState<number>(10);
  const theme = useMantineTheme();

  return (
    <>
      <Progress
        value={value}
        animate
        styles={{
          bar: {
            transition: 'none',
          },
        }}
      />
      <br />
      <br />
      <br />
      <Slider
        value={value}
        size="xl"
        onChange={setValue}
        color="orange"
        styles={{
          label: {
            backgroundColor: theme.colors.red[5],
            color: 'white',
          },
        }}
      />
    </>
  );
};

export default {
  title: 'Progress Bard',
};
