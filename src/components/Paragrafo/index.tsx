import { P } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
};

const Paragrafo: (props: Props) => JSX.Element = ({
  children,
  tipo = 'principal',
}) => <P tipo={tipo}>{children}</P>;

export default Paragrafo;
