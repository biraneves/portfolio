import { P } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
};

const Paragrafo: (props: Props) => JSX.Element = ({
  children,
  tipo = 'principal',
  fontSize,
}) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
);

export default Paragrafo;
