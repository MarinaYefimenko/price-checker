import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage'; 
import AddCheckPage from './pages/AddCheckPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-check" element={<AddCheckPage />} />
    </Routes>
  );
};

export default App;
