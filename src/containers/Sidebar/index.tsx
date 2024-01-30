import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';
import { BotaoTema, Descricao, SidebarContainer } from './styles';

type Props = {
  trocaTema: () => void;
};

const Sidebar: (props: Props) => JSX.Element = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Bira Neves</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          biraneves
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  );
};

export default Sidebar;
