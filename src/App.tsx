import { ThemeProvider } from 'styled-components';

import EstiloGlobal, { Container } from './styles';
import Sidebar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';
import Banner from './containers/Banner';
import temaLight from './themes/light';
import temaDark from './themes/dark';
import { useState } from 'react';

function App() {
  const [temaDarkAtivo, setTemaDarkAtivo] = useState(false);

  const trocaTema: () => void = () => {
    setTemaDarkAtivo(!temaDarkAtivo);
  };

  return (
    <>
      <ThemeProvider theme={temaDarkAtivo ? temaDark : temaLight}>
        <EstiloGlobal />
        <Container>
          <Sidebar trocaTema={trocaTema} />
          <main>
            <Banner imageUrl="https://static-server-ten.vercel.app/capa-github-bira.jpg" />
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
