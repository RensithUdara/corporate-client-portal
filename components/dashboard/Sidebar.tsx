import { useRouter } from 'next/router';
import { HomeIcon, CalendarIcon, ChartBarIcon, LogoutIcon } from '@heroicons/react/outline';
import { useAuthStore } from '../../store/authStore';

const Sidebar = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="sidebar flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Corporate Portal</h2>
      <nav className="space-y-4 flex-1">
        <a href="/dashboard" className={`flex items-center space-x-2 p-2 rounded ${router.pathname === '/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <HomeIcon className="w-5 h-5" /> <span>Dashboard</span>
        </a>
        <a href="/dashboard/bookings" className={`flex items-center space-x-2 p-2 rounded ${router.pathname === '/dashboard/bookings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <CalendarIcon className="w-5 h-5" /> <span>Bookings</span>
        </a>
        <a href="/dashboard/reports" className={`flex items-center space-x-2 p-2 rounded ${router.pathname === '/dashboard/reports' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <ChartBarIcon className="w-5 h-5" /> <span>Reports</span>
        </a>
      </nav>
      <button onClick={handleLogout} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 mt-auto">
        <LogoutIcon className="w-5 h-5" /> <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;