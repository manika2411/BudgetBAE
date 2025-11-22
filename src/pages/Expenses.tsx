import { ShoppingCart, Car, Coffee, ShoppingBag, Calendar, Tag } from 'lucide-react';
import expenseImg from "../assets/expense.png";

export default function Expenses() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Expenses</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Expenses</p>
            <h2 className="text-3xl font-bold mb-1">Rs. 2,847.32</h2>
            <p className="text-sm text-gray-500">April 2024</p>
            <img src={expenseImg} alt="Expenses" className="w-64 h-auto opacity-90" />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Category Breakdown</h3>
            <div className="flex items-center justify-center h-48">
              <svg viewBox="0 0 200 200" className="w-48 h-48">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="40" />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="40"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.3} ${2 * Math.PI * 80}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="40"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.2} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.3}`}
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="40"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.25} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.5}`}
                  transform="rotate(-90 100 100)"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <LegendItem color="bg-green-500" label="Shopping" percentage="30%" />
              <LegendItem color="bg-orange-500" label="Food & Dining" percentage="25%" />
              <LegendItem color="bg-blue-500" label="Transportation" percentage="20%" />
              <LegendItem color="bg-gray-400" label="Others" percentage="25%" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <FilterChip label="Date Range" icon={<Calendar className="w-4 h-4" />} />
            <FilterChip label="Merchant" icon={<ShoppingBag className="w-4 h-4" />} />
            <FilterChip label="Tags" icon={<Tag className="w-4 h-4" />} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Recent Expenses</h3>
            <div className="space-y-3">
              <ExpenseItem
                icon={<ShoppingCart className="w-5 h-5" />}
                name="Grocery"
                category="Shopping"
                amount="-Rs. 156.78"
                date="Today"
                color="bg-green-100 text-green-700"
              />
              <ExpenseItem
                icon={<Car className="w-5 h-5" />}
                name="Uber"
                category="Transportation"
                amount="-Rs. 156.78"
                date="Yesterday"
                color="bg-blue-100 text-blue-700"
              />
              <ExpenseItem
                icon={<Coffee className="w-5 h-5" />}
                name="Starbucks"
                category="Food & Dining"
                amount="-Rs. 156.78"
                date="Yesterday"
                color="bg-orange-100 text-orange-700"
              />
              <ExpenseItem
                icon={<ShoppingBag className="w-5 h-5" />}
                name="Mall"
                category="Shopping"
                amount="-Rs. 156.78"
                date="Apr 21"
                color="bg-green-100 text-green-700"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Spending Trends</h3>
            <div className="space-y-4">
              <TrendItem category="Shopping" amount="₹854.34" percentage={30} color="bg-green-500" />
              <TrendItem category="Food & Dining" amount="₹711.83" percentage={25} color="bg-orange-500" />
              <TrendItem category="Transportation" amount="₹569.46" percentage={20} color="bg-blue-500" />
              <TrendItem category="Others" amount="₹711.83" percentage={25} color="bg-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Budget vs Actual</h3>
            <div className="space-y-4">
              <BudgetItem category="Shopping" budget={1000} actual={854} />
              <BudgetItem category="Food" budget={800} actual={712} />
              <BudgetItem category="Transport" budget={600} actual={569} />
              <BudgetItem category="Others" budget={500} actual={712} isOverBudget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpenseItem({
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
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-sm">{amount}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
}

function LegendItem({ color, label, percentage }: { color: string; label: string; percentage: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <span className="text-xs text-gray-600">{label}</span>
      <span className="text-xs font-semibold ml-auto">{percentage}</span>
    </div>
  );
}

function FilterChip({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-teal-200 transition-colors">
      {icon}
      {label}
    </button>
  );
}

function TrendItem({
  category,
  amount,
  percentage,
  color,
}: {
  category: string;
  amount: string;
  percentage: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{category}</span>
        <span className="font-semibold">{amount}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

function BudgetItem({
  category,
  budget,
  actual,
  isOverBudget = false,
}: {
  category: string;
  budget: number;
  actual: number;
  isOverBudget?: boolean;
}) {
  const percentage = (actual / budget) * 100;
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{category}</span>
        <span className="text-xs text-gray-500">
          ₹{actual} / ₹{budget}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${isOverBudget ? 'bg-red-500' : 'bg-teal-600'}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}
