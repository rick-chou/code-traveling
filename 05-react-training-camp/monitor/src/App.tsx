import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from '@pages/home';
import Layout from '@/pages/layout';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
