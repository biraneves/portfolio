import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';

const Sobre: () => JSX.Element = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
      similique, sint veniam delectus itaque id dignissimos eum, facilis
      reiciendis fugiat aspernatur eaque in sapiente ab aperiam officiis labore
      dolor consequuntur!
    </Paragrafo>
  </section>
);

export default Sobre;
