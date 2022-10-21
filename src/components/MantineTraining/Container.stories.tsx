import {
  Container, Box, Text, Title,
} from '@mantine/core';

export const Basic = () => {
  return (
    <>
      <Title
        mb={20}
        align="center"
      >
        Zoom Out To see the difference
      </Title>
      <Container size="xs">
        <Box
          px={40}
          py={60}
          sx={{
            border: '1px solid red',
          }}
        >
          <Text align="center">
            This is XS
          </Text>
        </Box>
      </Container>
      <Container size="sm">
        <Box
          px={40}
          py={60}
          sx={{
            border: '1px solid red',
          }}
        >
          <Text align="center">
            This is sm
          </Text>
        </Box>
      </Container>
      <Container size="md">
        <Box
          px={40}
          py={60}
          sx={{
            border: '1px solid red',
          }}
        >
          <Text align="center">
            This is MD
          </Text>
        </Box>
      </Container>
      <Container size="lg">
        <Box
          px={40}
          py={60}
          sx={{
            border: '1px solid red',
          }}
        >
          <Text align="center">
            This is LG
          </Text>
        </Box>
      </Container>
      <Container size="xl">
        <Box
          px={40}
          py={60}
          sx={{
            border: '1px solid red',
          }}
        >
          <Text align="center">
            This is XL
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default {
  title: 'Container',
};
