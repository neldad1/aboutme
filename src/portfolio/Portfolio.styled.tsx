import styled from 'styled-components';

const PortfolioDiv = styled.div`
  display: block;
`;

const PortfolioItemDiv = styled.div`
  background-color: #5ddef4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
`;

const PortfolioItemInfoDiv = styled.div`
  display: block;
  width: 50%;
`;

const PortfolioCover = styled.img`
  width: 50%;
  object-fit: contain;
`;

export { PortfolioDiv, PortfolioItemDiv, PortfolioItemInfoDiv, PortfolioCover };
