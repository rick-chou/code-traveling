import { useLocation } from 'react-router-dom';
import { Card, Home, Nav } from '@nanshu/ui';

const navigation = [
  { name: 'UI', href: '/ui' },
  { name: 'React', href: '/react' },
  { name: 'Vue', href: '/vue' },
  { name: 'Monitor', href: '/monitor' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-full">
      <Nav navigation={navigation} />
      <main className="h-[calc(100vh-4rem)] flex justify-center items-center overflow-hidden">
        <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
          <div id="container">
            <div
              style={{
                display: location.pathname === '/' ? 'block' : 'none',
              }}
            >
              <Home title="FE DEMO 🔥 🔥 🔥" />
            </div>
            <Card
              style={{
                display: location.pathname === '/ui' ? 'block' : 'none',
              }}
              iframe={{ url: 'http://124.223.71.181:3002/' }}
            />
            <iframe
              style={{
                width: '100vw',
                height: '100vh',
                display: location.pathname === '/react' ? 'block' : 'none',
              }}
              src="http://124.223.71.181:3001/"
            />
            <Card
              style={{
                display: location.pathname === '/vue' ? 'block' : 'none',
              }}
              iframe={{ url: 'http://124.223.71.181:3003/' }}
            />
            <Card
              style={{
                display: location.pathname === '/monitor' ? 'block' : 'none',
              }}
              iframe={{ url: 'http://124.223.71.181:3004/' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
