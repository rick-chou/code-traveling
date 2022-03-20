import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@pages/home';
import Layout from '@/pages/layout';

export default () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start/*" element={<Layout />} />
    </Routes>
  </Router>
);
