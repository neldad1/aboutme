import styled from 'styled-components';

const PortfolioDiv = styled.div`
  display: block;
`;

const PortfolioItemDiv = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  padding-bottom: 5em;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const PortfolioItemInfoDiv = styled.div`
  display: block;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PortfolioCover = styled.img`
  background-color: #5ddef4;
  margin: 2em;
  width: 50%;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

const PortfolioItemLinkDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export {
  PortfolioDiv,
  PortfolioItemDiv,
  PortfolioItemInfoDiv,
  PortfolioCover,
  PortfolioItemLinkDiv,
};
