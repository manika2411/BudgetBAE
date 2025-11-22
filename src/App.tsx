import { useState } from 'react';
import GetStarted from './pages/GetStarted';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Subscriptions from './pages/Subscriptions';
import Goals from './pages/Goals';
import Navigation from './pages/Navigation';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'getstarted' | 'home' | 'expenses' | 'subscriptions' | 'goals'>('getstarted');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'getstarted':
        return <GetStarted onGetStarted={() => setCurrentScreen('home')} />;
      case 'home':
        return <Home />;
      case 'expenses':
        return <Expenses />;
      case 'subscriptions':
        return <Subscriptions />;
      case 'goals':
        return <Goals />;
      default:
        return <Home />;
    }
  };

  const showNavigation = currentScreen !== 'getstarted';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {renderScreen()}
        {showNavigation && <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
      </div>
    </div>
  );
}

export default App;
