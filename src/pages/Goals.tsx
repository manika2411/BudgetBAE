import { Trophy, Home, Plane, Wallet, MoreVertical } from 'lucide-react';

export default function Goals() {
  return (
    <div className="min-h-screen bg-[#D3E8E5] pb-20">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Goals</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <GoalCard
            icon={<Trophy className="w-6 h-6 text-white" />}
            title="12 Day Streak!"
            subtitle="Keep saving to unlock rewards!"
            progress={75}
            daysRemaining="5/7 days until next reward"
            bgGradient="from-teal-600 to-teal-700"
            coins={3}
          />

          <div className="rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">₹12,450</h2>
                <p className="text-sm text-teal-500">Total Progress</p>
              </div>
            </div>
          </div>

          <GoalCard
            icon={<Home className="w-6 h-6 text-white" />}
            title="Dream House"
            subtitle="₹45,000 / ₹100,000"
            progress={45}
            daysRemaining="Keep going!"
            bgGradient="from-teal-700 to-teal-800"
            coins={1}
          />

          <GoalCard
            icon={<Plane className="w-6 h-6 text-white" />}
            title="Bali Trip"
            subtitle="₹3,000 / ₹4,000"
            progress={75}
            daysRemaining="Almost there!"
            bgGradient="from-teal-700 to-teal-800"
            coins={1}
          />

          <GoalCard
            icon={<Wallet className="w-6 h-6 text-white" />}
            title="Emergency Fund"
            subtitle="₹9,000 / ₹10,000"
            progress={90}
            daysRemaining="So close!"
            bgGradient="from-teal-700 to-teal-800"
            coins={1}
          />

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-sm flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-50 hover:to-teal-100 transition-all">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-teal-600">+</span>
              </div>
              <p className="text-sm font-medium text-gray-600">Add New Goal</p>
            </div>
          </div>

        </div>

        <div className="mt-8 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Goal Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InsightCard
              label="Total Saved"
              value="₹12,450"
              change="+8.5% this month"
              positive={true}
            />
            <InsightCard
              label="Active Goals"
              value="4"
              change="1 near completion"
              positive={true}
            />
            <InsightCard
              label="Avg. Monthly"
              value="₹2,890"
              change="On track"
              positive={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GoalCard({
  icon,
  title,
  subtitle,
  progress,
  daysRemaining,
  bgGradient,
  coins,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  progress: number;
  daysRemaining: string;
  bgGradient: string;
  coins: number;
}) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} rounded-2xl p-6 shadow-sm text-white relative overflow-hidden`}>
      <div className="absolute top-4 right-4 flex gap-1">
        {Array.from({ length: coins }).map((_, i) => (
          <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs">🪙</span>
          </div>
        ))}
      </div>

      <div className="bg-white bg-opacity-20 rounded-full p-3 w-fit mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-teal-100 mb-4">{subtitle}</p>

      <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-2">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-xs text-teal-100">{daysRemaining}</p>

      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-white bg-opacity-5 rounded-full"></div>
    </div>
  );
}

function InsightCard({
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
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-sm text-gray-600 mb-2">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className={`text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>{change}</p>
    </div>
  );
}
