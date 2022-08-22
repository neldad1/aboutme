import { Portfolio } from './Portfolios';
import { PortfolioCover, PortfolioItemDiv } from './Portfolio.styled';
import PortfolioItemInfo from './PortfolioItemInfo';

export interface PortfolioItemProps {
  item: Portfolio;
  isMediaLeft: boolean;
}
const PortfolioItem = ({ item, isMediaLeft }: PortfolioItemProps) => {
  const { media, name } = item;
  return isMediaLeft ? (
    <PortfolioItemDiv>
      <PortfolioCover src={media} alt={name} />
      <PortfolioItemInfo item={item} />
    </PortfolioItemDiv>
  ) : (
    <PortfolioItemDiv>
      <PortfolioItemInfo item={item} />
      <PortfolioCover src={media} alt={name} />
    </PortfolioItemDiv>
  );
};

export default PortfolioItem;
