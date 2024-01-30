import styled from 'styled-components';

type BotaoProps = {
  principal?: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  color: ${(props) => (props.principal ? 'black' : 'white')};
  font-size: ${(props) => props.fontSize || '16px'};
`;

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;
`;

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px">Cancelar</Botao>
      <BotaoPerigo>Não clicar!</BotaoPerigo>
    </>
  );
}

export default Teste;
