import { useAuthStore } from '../../store/authStore';

const Header = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="header flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span>Welcome, {user?.firstName} {user?.lastName}</span>
      </div>
    </header>
  );
};

export default Header;