import { useParams } from 'react-router-dom';
import Info from '../Info';
import Portfolios from '../portfolio/Portfolios';

const SelectedTag = () => {
  const { tagId } = useParams();
  return (
    <div>
      <Info />
      <Portfolios tag="Typescript" />
    </div>
  );
};

export default SelectedTag;
