import logo from "../assets/logo.jpeg";

interface GetStartedProps {
  onGetStarted: () => void;
}

export default function GetStarted({ onGetStarted }: GetStartedProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center justify-center p-4 relative">
      <div className="max-w-md w-full">

        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="BudgetBAE Logo"
            className="w-auto h-28 object-cover shadow-md"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-teal-800">Budget</span>
            <span className="text-yellow-500">BAE</span>
          </h1>

          <p className="text-gray-600 text-sm mb-2">Your Money Wingmate</p>

          <p className="text-teal-700 text-base font-medium px-8">
            Making money management simple, fun, and stress-free.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onGetStarted}
            className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-24 rounded-lg transition-colors duration-200 shadow-md"
          >
            Get Started
          </button>
        </div>

        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-40" />
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-pink-200 rounded-full opacity-40" />
        <div className="absolute top-40 right-32 w-8 h-8 bg-purple-200 rounded-full opacity-40" />
      </div>
    </div>
  );
}
