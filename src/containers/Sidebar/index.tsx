import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';
import { BotaoTema, Descricao, SidebarContainer } from './styles';

const Sidebar: () => JSX.Element = () => {
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
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  );
};

export default Sidebar;
