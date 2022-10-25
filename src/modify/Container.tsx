import React from 'react';
import { Container as MantineContainer, MantineSize } from '@mantine/core';
import type { ContainerProps } from '@mantine/core';

type ModifiedContainerProps = Omit<ContainerProps, 'size'> & {
  size?: 'lg' | 'xs' | 'sm' | 'md' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl'
}

const Container = ({ size, children, ...restProps }: ModifiedContainerProps) => {
  return (
    <MantineContainer
      size={size as MantineSize}
      {...restProps}
    >
      {children}
    </MantineContainer>

  );
};

Container.defaultProps = {
  size: 'lg',
};

export default Container;
