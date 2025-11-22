import { TrendingUp, TrendingDown, ShoppingBag, Car, Coffee, ShoppingCart, Lightbulb } from 'lucide-react';
import overview from "../assets/overview.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-600 text-sm mb-2">Balance</p>
            <h1 className="text-4xl font-bold mb-1">₹24,750.00</h1>
            <p className="text-green-600 text-sm">+₹1,240 (5.3%)</p>

            <div className="flex gap-3 mt-6">
              <button className="flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                <TrendingDown className="w-4 h-4" />
                Add Expense
              </button>
              <button className="flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                <TrendingUp className="w-4 h-4" />
                Add Income
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Weekly Overview</h3>
            <div className="w-full flex justify-center">
              <img
                src={overview}
                alt="Weekly Overview"
                className="w-full max-w-md object-contain opacity-90"
              />
            </div>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Monthly Savings</h3>
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#10b981"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.78} ${2 * Math.PI * 28}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">78%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">Goal: ₹10,000</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-teal-600 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-2xl p-5 shadow-sm border border-blue-100">
            <div className="flex items-start gap-3">
              <div className="bg-white rounded-full p-2">
                <Lightbulb className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Smart Suggestion</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Unused Spotify subscription detected. Cancel to save ₹10/month.
                </p>
                <button className="text-teal-600 text-sm font-medium hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              <TransactionItem
                icon={<ShoppingCart className="w-5 h-5" />}
                name="Grocery"
                category="Shopping"
                amount="-Rs. 156.78"
                date="Today"
                color="bg-green-100 text-green-700"
              />
              <TransactionItem
                icon={<Car className="w-5 h-5" />}
                name="Uber"
                category="Transportation"
                amount="-Rs. 156.78"
                date="Yesterday"
                color="bg-blue-100 text-blue-700"
              />
              <TransactionItem
                icon={<Coffee className="w-5 h-5" />}
                name="Starbucks"
                category="Food & Dining"
                amount="-Rs. 156.78"
                date="Yesterday"
                color="bg-orange-100 text-orange-700"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <StatItem label="This Month" value="₹2,847.32" change="+5.3%" positive />
              <StatItem label="Last Month" value="₹3,124.89" change="-2.1%" positive={false} />
              <StatItem label="Average Daily" value="₹94.91" change="+8.2%" positive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransactionItem({
  icon,
  name,
  category,
  amount,
  date,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  category: string;
  amount: string;
  date: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-900">{amount}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="p-4 bg-gray-50 rounded-xl">
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-xl font-bold text-gray-900 mb-1">{value}</p>
      <p className={`text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>{change}</p>
    </div>
  );
}
