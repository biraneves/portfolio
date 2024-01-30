import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  :root {
    --font-base: 'Inter', sans-serif;
    --cor-primaria: #282a35;
    --cor-secundaria: #949494;
    --cor-card-borda: #c1c1c1;
    --cor-botao: #4476bf;
    --cor-botao-texto: #fff;
    --cor-botao-texto-secundaria: #eee;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: var(--font-base);
    list-style-type: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 40px;

    @media screen and (max-width: 767px) {
      padding-top: 32px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media screen and (max-width: 767px) {
    max-width: 80%;
    display: block;
  }
`;

export default EstiloGlobal;
