import { BannerContainer, BannerImg } from './styles';

type Props = {
  imageUrl: string;
};

const Banner: (props: Props) => JSX.Element = ({ imageUrl }) => (
  <BannerContainer>
    <BannerImg src={imageUrl} />
  </BannerContainer>
);

export default Banner;
