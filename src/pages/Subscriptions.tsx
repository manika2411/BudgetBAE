import { ArrowUpDown, Music, Package, Coffee, Film } from 'lucide-react';
import subsImg from "../assets/trends.png";

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Subscription Manager</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Monthly Spending</p>
            <h2 className="text-3xl font-bold">Rs. 89.94</h2>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Annual Spending</p>
            <h2 className="text-3xl font-bold">Rs. 1,079.28</h2>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Potential Annual Savings</p>
            <h2 className="text-3xl font-bold">Rs. 156.48</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Spending Trends</h3>
            <button className="flex items-center gap-1 text-sm text-teal-600 font-medium">
              <ArrowUpDown className="w-4 h-4" />
              Cost (High to Low)
            </button>
          </div>
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="flex justify-center items-center h-40">
                <img src={subsImg} alt="Subscriptions" className="w-64 h-auto opacity-90" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
          <button className="flex items-center gap-2 text-sm text-teal-600 font-medium">
            <ArrowUpDown className="w-4 h-4" />
            Sort by: Cost (High to Low)
          </button>
        </div>

        <div className="space-y-4">
          <SubscriptionCard
            icon={<Film className="w-6 h-6" />}
            name="Netflix Premium"
            cost="Rs. 1799/month"
            savings="Rs. 35"
            iconColor="bg-red-100 text-red-600"
            active={true}
          />
          <SubscriptionCard
            icon={<Package className="w-6 h-6" />}
            name="Amazon Prime"
            cost="Rs. 1499/month"
            savings="Rs. 40"
            iconColor="bg-blue-100 text-blue-600"
            active={true}
          />
          <SubscriptionCard
            icon={<Music className="w-6 h-6" />}
            name="Spotify Premium"
            cost="Rs. 999/month"
            savings="Rs. 20"
            iconColor="bg-green-100 text-green-600"
            active={true}
          />
          <SubscriptionCard
            icon={<Coffee className="w-6 h-6" />}
            name="Motiff Subscription"
            cost="Rs. 299/month"
            savings="Rs. 6"
            iconColor="bg-purple-100 text-purple-600"
            active={true}
          />
        </div>
      </div>
    </div>
  );
}

function SubscriptionCard({
  icon,
  name,
  cost,
  savings,
  iconColor,
  active,
}: {
  icon: React.ReactNode;
  name: string;
  cost: string;
  savings: string;
  iconColor: string;
  active: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full ${iconColor}`}>{icon}</div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{cost}</p>
            <p className="text-xs text-gray-500 mt-1">Annual savings available: {savings}</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={active} readOnly />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
        </label>
      </div>
    </div>
  );
}
