import { useEffect, useState } from 'react';
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
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>([]);

  useEffect(() => {
    const portfolios = Data.portfolios.map(
      (portfolio) => portfolio as Portfolio
    );
    setPortfolioList(portfolios);
  }, []);

  if (portfolioList.length === 0) return <></>;

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
