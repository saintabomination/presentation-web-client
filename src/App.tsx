import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import PresentationPage from './pages/PresentationPage';
import ControlsPage from './pages/ControlsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = (): JSX.Element =>
  (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presentation" element={<JoinPage />} />
        <Route path="/presentation/:id" element={<PresentationPage />} />
        <Route path="/controls" element={<ControlsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );

export default App;
