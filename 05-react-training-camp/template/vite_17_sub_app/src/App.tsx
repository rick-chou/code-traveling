import { Route } from 'react-router-dom';
import Layout from '@/pages/layout/welcome';

const App = () => {
  return (
    <>
      <Route path={'*'} exact component={Layout} />
    </>
  );
};

export default App;
