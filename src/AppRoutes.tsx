import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SelectedTag from './pages/SelectedTag';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:tagId" element={<SelectedTag />} />
    </Routes>
  );
};

export default AppRoutes;
