import styled from 'styled-components';

const H1 = styled.h1`
  margin: 0.2em;
  color: white;
  :hover {
    color: #5ddef4;
    font-size: 2.25em;
  }
`;

const H3 = styled.h3`
  margin: 0;
  color: whitesmoke;
`;

const HorizontalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { H1, H3, HorizontalDiv };
