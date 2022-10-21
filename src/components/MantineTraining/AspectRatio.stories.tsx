import React, { useState } from 'react';
import {
  AspectRatio, Image, Button, Paper, Box, Text,
} from '@mantine/core';
import styled from '@emotion/styled';
import { useToggle } from '@mantine/hooks';

const StyledCustomBox = styled.div`
  text-align: center;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue[6]};
  margin-bottom : 20px;
  user-select: none;
  color: white;
  display : flex;
  flex-direction : column;
`;

export const CustomBox = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
  };

  return (
    <AspectRatio
      ratio={1 / 1}
      sx={{ maxWidth: 300 }}
    >
      <StyledCustomBox onClick={handleClick}>
        <p>Placeholder Text</p>
        <Button
          sx={(theme) => ({
            backgroundColor: 'white',
            color: 'black',
          })}
        >
          Aspect Ratio 1/1
        </Button>
      </StyledCustomBox>
    </AspectRatio>
  );
};

export const AspectRatioDefault = () => {
  return (
    <AspectRatio
      ratio={1 / 1}
      sx={{ maxWidth: 300 }}
      mx="auto"
    >
      <Image
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>

  );
};

export const GoogleMaps = () => {
  return (
    <AspectRatio ratio={2 / 1}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        frameBorder="0"
      />
    </AspectRatio>
  );
};

export const ControlledRatio = () => {
  const [ratio, toggle] = useToggle();

  return (
    <div>
      <Button onClick={() => toggle()}>Toggle</Button>
      <AspectRatio ratio={ratio ? 1 / 1 : 1 / 1.2}>
        <Paper
          shadow="xl"
          sx={{ backgroundColor: 'salmon', flexDirection: 'column' }}
        >
          <Text p="xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque fugiat eveniet possimus nulla nam dolorem? Consequatur ducimus nemo modi odio labore libero consectetur sapiente eligendi incidunt dolorem</Text>
        </Paper>
      </AspectRatio>
    </div>
  );
};

export default {
  title: 'Aspect Ratio',
};
