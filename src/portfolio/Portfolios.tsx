import { PortfolioDiv } from './Portfolio.styled';
import Data from './PortfolioData.json';
import PortfolioItem from './PortfolioItem';

export interface Portfolio {
  id: string;
  skills: string[];
  name: string;
  description: string;
  media: string;
  link: string;
  github: string;
  experience: string;
}

const Portfolios = () => {
  const portfolioList = Data.portfolios.map(
    (portfolio) => portfolio as Portfolio
  );
  return (
    <PortfolioDiv>
      {portfolioList.map((portfolio, i) => (
        <PortfolioItem
          key={portfolio.id}
          item={portfolio}
          isMediaLeft={i % 2 === 0}
        />
      ))}
    </PortfolioDiv>
  );
};

export default Portfolios;
