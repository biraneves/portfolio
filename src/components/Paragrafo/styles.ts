import styled from 'styled-components';
import { Props } from './index';

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrimaria
      : props.theme.corSecundaria};

  @media screen and (max-width: 767px) {
    margin-bottom: ${(props) => (props.tipo === 'secundario' ? '0' : '24px')};
  }
`;
