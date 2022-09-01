import { useEffect, useState } from 'react';
import { CategoryTitle } from '../App.styled';
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

interface PortfoliosProps {
  tag: string;
}

const Portfolios = ({ tag }: PortfoliosProps) => {
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>([]);

  useEffect(() => {
    const portfolios = Data.portfolios.map(
      (portfolio) => portfolio as Portfolio
    );
    if (tag === 'all') {
      setPortfolioList(portfolios);
    } else {
      const filteredPortfolios = portfolios.filter((portfolio) =>
        portfolio.skills.find((skill) => skill === tag)
      );
      setPortfolioList(filteredPortfolios);
    }
  }, []);

  if (portfolioList.length === 0) return <></>;

  return (
    <PortfolioDiv>
      <CategoryTitle>Portfolios</CategoryTitle>
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
