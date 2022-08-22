import { PortfolioItemInfoDiv } from './Portfolio.styled';
import PortfolioItemLink from './PortfolioItemLink';
import { Portfolio } from './Portfolios';

interface PortfolioItemInfoProps {
  item: Portfolio;
}
const PortfolioItemInfo = ({ item }: PortfolioItemInfoProps) => {
  const { name, description, skills, github, link } = item;
  return (
    <PortfolioItemInfoDiv>
      <h1>{name}</h1>
      <h4>{description}</h4>
      <PortfolioItemLink github={github} webApp={link} />
      <p>{skills.join(' | ')}</p>
    </PortfolioItemInfoDiv>
  );
};

export default PortfolioItemInfo;
