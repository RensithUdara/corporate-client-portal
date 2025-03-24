import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuthStore } from '../../store/authStore';
import { useRouter } from 'next/router';

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const setUser = useAuthStore((state: { setUser: (user: any) => void }) => state.setUser);
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post('/api/auth/login', data);
      setUser(response.data.user);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Login
      </button>
    </form>
  );
};

export default LoginForm;