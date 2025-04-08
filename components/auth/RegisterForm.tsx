import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  customerType: 'Corporate' | 'Private';
  companyName?: string;
  companyAddress?: string;
  email: string;
  contactNumber: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const router = useRouter();
  const customerType = watch('customerType');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await axios.post('/api/auth/register', data);
      router.push('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <div>
        <label className="block">First Name</label>
        <input {...register('firstName', { required: 'First Name is required' })} className="w-full p-2 border rounded" />
        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
      </div>
      <div>
        <label className="block">Last Name</label>
        <input {...register('lastName', { required: 'Last Name is required' })} className="w-full p-2 border rounded" />
        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
      </div>
      <div>
        <label className="block">Customer Type</label>
        <select {...register('customerType', { required: 'Customer Type is required' })} className="w-full p-2 border rounded">
          <option value="Corporate">Corporate</option>
          <option value="Private">Private</option>
        </select>
        {errors.customerType && <p className="text-red-500">{errors.customerType.message}</p>}
      </div>
      {customerType === 'Corporate' && (
        <>
          <div>
            <label className="block">Company Name</label>
            <input {...register('companyName', { required: 'Company Name is required for Corporate' })} className="w-full p-2 border rounded" />
            {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
          </div>
          <div>
            <label className="block">Company Address</label>
            <input {...register('companyAddress', { required: 'Company Address is required for Corporate' })} className="w-full p-2 border rounded" />
            {errors.companyAddress && <p className="text-red-500">{errors.companyAddress.message}</p>}
          </div>
        </>
      )}
      <div>
        <label className="block">Email</label>
        <input type="email" {...register('email', { required: 'Email is required' })} className="w-full p-2 border rounded" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block">Contact Number</label>
        <input {...register('contactNumber', { required: 'Contact Number is required' })} className="w-full p-2 border rounded" />
        {errors.contactNumber && <p className="text-red-500">{errors.contactNumber.message}</p>}
      </div>
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <div>
        <label className="block">Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword', { required: 
            
            
            'Confirm Password is required', validate: (val) => val === watch('password') || 'Passwords do not match' })}
          className="w-full p-2 border rounded"
        />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;