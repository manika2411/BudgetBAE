import { Home, Receipt, CreditCard, Target, User } from 'lucide-react';

interface NavigationProps {
  currentScreen: 'home' | 'expenses' | 'subscriptions' | 'goals';
  onNavigate: (screen: 'home' | 'expenses' | 'subscriptions' | 'goals') => void;
}

export default function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        <NavItem
          icon={<Home className="w-5 h-5" />}
          label="Home"
          active={currentScreen === 'home'}
          onClick={() => onNavigate('home')}
        />
        <NavItem
          icon={<Receipt className="w-5 h-5" />}
          label="Expenses"
          active={currentScreen === 'expenses'}
          onClick={() => onNavigate('expenses')}
        />
        <NavItem
          icon={<CreditCard className="w-5 h-5" />}
          label="Subscriptions"
          active={currentScreen === 'subscriptions'}
          onClick={() => onNavigate('subscriptions')}
        />
        <NavItem
          icon={<Target className="w-5 h-5" />}
          label="Goals"
          active={currentScreen === 'goals'}
          onClick={() => onNavigate('goals')}
        />
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
        active
          ? 'text-teal-600'
          : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
