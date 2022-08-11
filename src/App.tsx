import { TagCloud } from 'react-tagcloud';
import './App.css';

interface Tag {
  value: string;
  count: number;
}

const data: Tag[] = [
  { value: 'Styled-Components', count: 25 },
  { value: 'C# WPF', count: 18 },
  { value: 'Software Engineer', count: 38 },
  { value: 'Javascript', count: 30 },
  { value: 'Typescript', count: 28 },
  { value: 'Firestore', count: 25 },
  { value: 'React', count: 33 },
  { value: 'CSS', count: 20 },
  { value: 'Firebase', count: 22 },
  { value: 'C language', count: 7 },
  { value: 'GitHub Actions', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Qt', count: 17 },
  { value: 'C++', count: 27 },
  { value: 'Golang', count: 31 },
  { value: 'TCP/IP', count: 15 },
  { value: 'API', count: 30 },
  { value: 'Angular', count: 11 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={data}
          className="simple-cloud"
          onClick={(tag: Tag) => alert(`'${tag.value}' was selected!`)}
        />
      </header>
    </div>
  );
}

export default App;
