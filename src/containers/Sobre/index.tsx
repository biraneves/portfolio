import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';
import { GithubSecao } from './styles';

const Sobre: () => JSX.Element = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
      similique, sint veniam delectus itaque id dignissimos eum, facilis
      reiciendis fugiat aspernatur eaque in sapiente ab aperiam officiis labore
      dolor consequuntur!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=biraneves&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=biraneves&layout=compact&langs_count=8&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;
