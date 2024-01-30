import styled from 'styled-components';
import { Props } from './index';

export const P = styled.p<Props>`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? 'var(--cor-primaria)'
      : 'var(--cor-secundaria)'};
`;