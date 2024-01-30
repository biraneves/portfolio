import styled from 'styled-components';

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 36px;
  row-gap: 36px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`;
