import styled from 'styled-components';
import { P } from '../../components/Paragrafo/styles';

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  background-color: var(--cor-primaria);
  color: var(--cor-botao-texto-secundaria);
  padding: 8px;
  border: none;
  border-radius: 12px;
  font-size: 10px;
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
