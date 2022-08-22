import { TagCloud } from 'react-tagcloud';
import './App.css';
import Experience from './Experience';
import Info from './Info';
import Portfolios from './portfolio/Portfolios';

interface Tag {
  value: string;
  count: number;
}

const data: Tag[] = [
  { value: 'Styled-Components', count: 25 },
  { value: 'Design', count: 18 },
  { value: 'Software Engineer', count: 38 },
  { value: 'FrontEnd Engineer', count: 38 },
  { value: 'Javascript', count: 30 },
  { value: 'Typescript', count: 28 },
  { value: 'Firestore', count: 25 },
  { value: 'React', count: 33 },
  { value: 'Wordpress', count: 20 },
  { value: 'Firebase Auth', count: 22 },
  { value: 'C# WPF', count: 7 },
  { value: 'GitHub Actions', count: 25 },
  { value: 'Qt', count: 17 },
  { value: 'C/C++', count: 27 },
  { value: 'Golang', count: 31 },
  { value: 'TCP/IP', count: 15 },
  { value: 'API', count: 30 },
  { value: 'Angular', count: 11 },
];

function App() {
  return (
    <div className="App">
      <div className="summary">
        <Info />
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={data}
          className="tag-cloud"
          onClick={(tag: Tag) => alert(`'${tag.value}' was selected!`)}
        />
        <Experience />
      </div>
      <Portfolios />
    </div>
  );
}

export default App;
