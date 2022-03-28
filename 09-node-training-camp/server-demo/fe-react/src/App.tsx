import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@pages/home';
import Login from '@pages/login';
import Content from '@pages/content';
import NotFound from '@pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
