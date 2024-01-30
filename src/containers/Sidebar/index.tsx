import Titulo from '../../components/Titulo';

const Sidebar: () => JSX.Element = () => {
  return (
    <aside>
      <img src="https://github.com/biraneves.png" />
      <Titulo fontSize={20}>Bira Neves</Titulo>
    </aside>
  );
};

export default Sidebar;
