import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
