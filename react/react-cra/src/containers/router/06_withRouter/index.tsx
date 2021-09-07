import { withRouter, BrowserRouter as Router } from 'react-router-dom';

function Home(props: any) {
  console.log('home :>> ', props);
  return <h1>Home</h1>;
}

const Article = withRouter((props: any) => {
  console.log('article :>> ', props);
  return <h1>Article</h1>;
});

export default function article() {
  return (
    <Router>
      <Home />
      <Article />
    </Router>
  );
}
