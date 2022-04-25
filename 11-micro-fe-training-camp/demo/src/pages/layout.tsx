import { Route } from 'react-router-dom';
import { Card, Home, Nav } from '@nanshu/ui';

const navigation = [
  { name: 'UI', href: '/ui' },
  { name: 'React', href: '/react' },
  { name: 'Vue', href: '/vue' },
  { name: 'Monitor', href: '/monitor' },
];

export default function Layout() {
  return (
    <div className="min-h-full">
      <Nav navigation={navigation} />
      <main className="h-[calc(100vh-4rem)] flex justify-center items-center overflow-hidden">
        <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
          <div id="container">
            <Route
              path={'/'}
              exact
              render={() => <Home title="FE DEMO 🔥 🔥 🔥" />}
            />
            <Route
              path={'/ui'}
              children={({ match }) =>
                match && (
                  <Card iframe={{ url: 'http://124.223.71.181:3002/' }} />
                )
              }
            />
            <Route
              path={'/react'}
              children={({ match }) =>
                match && (
                  <iframe
                    src="http://124.223.71.181:3001/"
                    style={{ width: '100vw', height: '100vh' }}
                  />
                )
              }
            />
            <Route
              path={'/vue'}
              children={({ match }) =>
                match && (
                  <Card iframe={{ url: 'http://124.223.71.181:3003/' }} />
                )
              }
            />
            <Route
              path={'/monitor'}
              children={({ match }) =>
                match && (
                  <Card iframe={{ url: 'http://124.223.71.181:3004/' }} />
                )
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}
