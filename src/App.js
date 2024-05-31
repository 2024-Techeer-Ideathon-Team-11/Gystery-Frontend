import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Game from './page/Game';
import Fail from './page/Fail';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/fail" element={<Fail />} />
      </Routes>
    </Router>
  );
}

export default App;
