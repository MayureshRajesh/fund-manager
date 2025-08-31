
import Link from 'next/link';
import { FaMoneyBillWave, FaUserFriends, FaChartLine } from 'react-icons/fa';

export default function HomePage() {
  return (
    <html>
        <body>
    <div className="bg-slate-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 md:px-8 border-b border-slate-700">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Fund-Flow</h1>
          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              Login
            </Link>
            <Link href="/dashboard" className="bg-indigo-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center flex flex-col justify-center items-center py-24 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Stop Worrying About Who Owes Who.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
            Effortlessly split bills, track group expenses, and settle up with friends. Fund-Flow makes managing shared finances simple and stress-free.
          </p>
          <Link href="/dashboard" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-600 transition-transform hover:scale-105">
            Get Started for Free
          </Link>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-slate-800 py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Everything You Need to Manage Group Finances</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              
              {/* Feature 1 */}
              <div className="bg-slate-900 p-8 rounded-lg">
                <FaMoneyBillWave className="text-4xl text-indigo-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Split Expenses Easily</h4>
                <p className="text-slate-400">
                  Quickly add bills and split them by equal shares, percentages, or custom amounts. No more manual calculations.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-900 p-8 rounded-lg">
                <FaUserFriends className="text-4xl text-indigo-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Organize in Groups</h4>
                <p className="text-slate-400">
                  Create groups for trips, roommates, or any shared activity to keep all related expenses in one place.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-900 p-8 rounded-lg">
                <FaChartLine className="text-4xl text-indigo-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Track Balances</h4>
                <p className="text-slate-400">
                  Get a clear overview of who you owe and who owes you, with a running total for each friend or group.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 border-t border-slate-700">
        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Fund-Flow. All rights reserved.</p>
      </footer>
    </div>
    </body>
    </html>
  );
}