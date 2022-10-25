import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  components: {
    Container: {
      defaultProps: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
      },
    },
  },
};
