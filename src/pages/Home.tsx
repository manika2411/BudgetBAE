import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Car,
  Coffee,
} from "lucide-react";
import overview from "../assets/overview.png";

type Tx = {
  id: number;
  icon: React.ReactNode;
  name: string;
  category: string;
  amount: string;
  date: string;
  timestamp: number;
  color: string;
};

export default function Home() {
  const base: Tx[] = [
    {
      id: 1,
      icon: <ShoppingCart className="w-5 h-5" />,
      name: "Grocery",
      category: "Shopping",
      amount: "-₹156.78",
      date: "Today",
      timestamp: Date.now(),
      color: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      icon: <Car className="w-5 h-5" />,
      name: "Uber",
      category: "Transportation",
      amount: "-₹156.78",
      date: "Yesterday",
      timestamp: Date.now(),
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      icon: <Coffee className="w-5 h-5" />,
      name: "Starbucks",
      category: "Food & Dining",
      amount: "-₹156.78",
      date: "Yesterday",
      timestamp: Date.now(),
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const [balance, setBalance] = useState(24750);
  const [list, setList] = useState<Tx[]>([]);
  const [type, setType] = useState<"Income" | "expense" | null>(null);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const savedTx = localStorage.getItem("transactions");
    const savedBal = localStorage.getItem("balance");
    if (savedTx) setList(JSON.parse(savedTx));
    if (savedBal) setBalance(parseFloat(savedBal));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(list));
    localStorage.setItem("balance", balance.toString());
  }, [list, balance]);

  const getIcon = (cat: string, t: "Income" | "expense") => {
    const c = cat.toLowerCase();
    if (c.includes("groc")) return <ShoppingCart className="w-5 h-5" />;
    if (c.includes("uber")) return <Car className="w-5 h-5" />;
    if (c.includes("star")) return <Coffee className="w-5 h-5" />;
    return t === "Income" ? (
      <TrendingUp className="w-5 h-5" />
    ) : (
      <TrendingDown className="w-5 h-5" />
    );
  };

  const save = () => {
    const v = parseFloat(amount);
    if (!v) return;

    const cat = category || (type ?? "");
    const icon = getIcon(cat, type!);

    const color =
      type === "Income"
        ? "bg-emerald-100 text-emerald-700"
        : cat.toLowerCase().includes("groc")
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700";

    const tx: Tx = {
      id: Date.now(),
      icon,
      name: cat,
      category: cat,
      amount: `${type === "Income" ? "+" : "-"}₹${v}`,
      date: "Today",
      timestamp: Date.now(),
      color,
    };

    setBalance(type === "Income" ? balance + v : balance - v);
    setList([tx, ...list]);

    setAmount("");
    setCategory("");
    setType(null);
  };

  const getStats = () => {
    const now = new Date();
    const month = now.getMonth();
    const lastMonth = month === 0 ? 11 : month - 1;
    const year = now.getFullYear();

    let thisMonth = 0;
    let lastMonthSum = 0;
    let last30days = 0;

    list.forEach((t) => {
      const sign = t.amount.startsWith("+") ? 1 : -1;
      const num = parseFloat(t.amount.replace(/[₹+-]/g, ""));

      const d = new Date(t.timestamp);
      const m = d.getMonth();

      if (m === month) thisMonth += num * sign;
      if (m === lastMonth) lastMonthSum += num * sign;

      if (Date.now() - t.timestamp <= 30 * 24 * 60 * 60 * 1000)
        last30days += num * sign;
    });

    return {
      thisMonth,
      lastMonth: lastMonthSum,
      avgDaily: last30days / 30,
    };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {type && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {type === "Income" ? "Add Income" : "Add Expense"}
            </h2>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <button
              onClick={save}
              className="w-full bg-teal-600 text-white p-3 rounded-lg mb-2"
            >
              Save
            </button>

            <button
              onClick={() => setType(null)}
              className="w-full text-teal-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6 lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="space-y-6 lg:col-span-2">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Balance</p>
            <h1 className="text-4xl font-bold">₹{balance.toLocaleString()}</h1>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setType("expense")}
                className="flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-lg"
              >
                <TrendingDown className="w-4 h-4" /> Add Expense
              </button>

              <button
                onClick={() => setType("Income")}
                className="flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-lg"
              >
                <TrendingUp className="w-4 h-4" /> Add Income
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Weekly Overview</h3>
            <img src={overview} alt="" className="w-full max-w-md mx-auto" />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

            <div className="space-y-3">
              {list.map((t) => (
                <Item key={t.id} {...t} />
              ))}
              {base.map((t) => (
                <Item key={t.id} {...t} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6 space-y-4">
            <Stat
              label="This Month"
              value={`₹${stats.thisMonth.toFixed(2)}`}
              change={`${stats.thisMonth >= 0 ? "+" : ""}${(
                (stats.thisMonth / 1000) *
                5
              ).toFixed(1)}%`}
              positive={stats.thisMonth >= 0}
            />

            <Stat
              label="Last Month"
              value={`₹${stats.lastMonth.toFixed(2)}`}
              change={`${stats.lastMonth >= 0 ? "+" : ""}${(
                (stats.lastMonth / 1000) *
                5
              ).toFixed(1)}%`}
              positive={stats.lastMonth >= 0}
            />

            <Stat
              label="Average Daily"
              value={`₹${stats.avgDaily.toFixed(2)}`}
              change={`+${((stats.avgDaily / 100) * 8).toFixed(1)}%`}
              positive={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ icon, name, category, amount, date, color }: Tx) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">{amount}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}

function Stat({
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
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-bold">{value}</p>
      <p className={positive ? "text-green-600" : "text-red-600"}>{change}</p>
    </div>
  );
}
