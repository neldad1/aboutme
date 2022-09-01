import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TagCloud } from 'react-tagcloud';
import Experience from '../Experience';
import Info from '../Info';
import Portfolios, { Portfolio } from '../portfolio/Portfolios';
import Data from './../portfolio/PortfolioData.json';

interface Tag {
  id: string;
  value: string;
  count: number;
}

const data: Tag[] = [
  { id: 'tag-gd', value: 'Graphic Design', count: 18 },
  { id: 'tag-se', value: 'Software Engineerr', count: 36 },
  { id: 'tag-fe', value: 'Frontend', count: 32 },
  { id: 'tag-js', value: 'Javascript', count: 30 },
  { id: 'tag-ts', value: 'Typescript', count: 28 },
  { id: 'tag-fs', value: 'Firestore', count: 25 },
  { id: 'tag-ra', value: 'React', count: 30 },
  { id: 'tag-wp', value: 'Wordpress', count: 20 },
  { id: 'tag-fba', value: 'Firebase Auth', count: 22 },
  { id: 'tag-cw', value: 'C# WPF', count: 7 },
  { id: 'tag-ga', value: 'GitHub Actions', count: 25 },
  { id: 'tag-qt', value: 'Qt', count: 25 },
  { id: 'tag-cc', value: 'C/C++', count: 25 },
  { id: 'tag-go', value: 'Golang', count: 28 },
  { id: 'tag-tcp', value: 'TCP/IP', count: 15 },
  { id: 'tag-api', value: 'API', count: 30 },
  { id: 'tag-agl', value: 'Angular', count: 11 },
];

const Home = () => {
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const portfolios = Data.portfolios.map(
      (portfolio) => portfolio as Portfolio
    );
    setPortfolioList(portfolios);
  }, []);
  return (
    <div className="App">
      <div className="summary">
        <Info />
        {data.length > 0 && (
          <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            className="tag-cloud"
            onClick={(tag: Tag) => navigate(`/${tag.id}`)}
          />
        )}
        <Experience />
      </div>
      <Portfolios tag="all" />
    </div>
  );
};

export default Home;
