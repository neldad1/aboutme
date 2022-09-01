import styled from 'styled-components';

const PortfolioDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const PortfolioItemDiv = styled.div`
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
  margin: 0 2em;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

const PortfolioCover = styled.img`
  background-color: #5ddef4;
  width: 40%;
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
