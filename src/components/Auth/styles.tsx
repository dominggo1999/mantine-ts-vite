import styled from '@emotion/styled';
import { Container } from '@mantine/core';
import media from '../../mixins/mediaQuery';

export const AuthWrapper = styled(Container)`
  max-width : 32rem;
  min-height: 100vh;
  padding : 2rem 0.5rem;
  ${media.sm}{
    padding : 2rem;
  }
  .auth{
    &__header-message p{
      color: ${({ theme }) => (theme.colorScheme === 'dark' ? 'white' : theme.colors.gray[6])};
      margin: 0;
    }
    &__content{
      padding: 0;
      box-shadow: none;
      background-color: transparent;
      ${media.sm}{
        padding: 40px;
        box-shadow: 0px 0px 1px rgba(48, 49, 51, 0.05),0px 4px 8px rgba(48, 49, 51, 0.1);
        background-color: ${({ theme }) => (theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white')};
      }
    }
  }
`;
