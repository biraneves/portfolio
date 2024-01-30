import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  :root {
    --font-base: 'Inter', sans-serif;
    --cor-primaria: #282a35;
    --cor-secundaria: #949494;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: var(--font-base);
  }

  body {
    padding-top: 80px;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
  }
`;

export default EstiloGlobal;
