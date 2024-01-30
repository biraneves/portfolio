import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.corCardFundo};
  border: solid 1px ${(props) => props.theme.corCardBorda};
  padding: 16px;
`;

export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corBotao};
  color: ${(props) => props.theme.corBotaoTexto};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`;
