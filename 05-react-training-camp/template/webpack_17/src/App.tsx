import { Route, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/pages/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={Home} />
      <Route path={['/layout', '/subApp']} component={Layout} />
    </BrowserRouter>
  );
};

export default App;
