import { PortfolioItemInfoDiv } from './Portfolio.styled';
import { Portfolio } from './Portfolios';

interface PortfolioItemInfoProps {
  item: Portfolio;
}
const PortfolioItemInfo = ({ item }: PortfolioItemInfoProps) => {
  const { name, description, skills } = item;
  return (
    <PortfolioItemInfoDiv>
      <h1>{name}</h1>
      <h4>{description}</h4>
      <h4>Skills:</h4>
      <p>{skills}</p>
    </PortfolioItemInfoDiv>
  );
};

export default PortfolioItemInfo;
