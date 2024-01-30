import styled from 'styled-components';

export const GithubSecao = styled.div`
  margin: 32px 0 64px;
  display: grid;
  grid-template-columns: 1fr auto;

  img {
    height: 200px;
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    display: block;
    width: 100%;
    height: auto;
  }
`;
