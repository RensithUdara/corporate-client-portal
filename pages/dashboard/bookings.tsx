import DashboardLayout from '../../components/layout/DashboardLayout';
import BookingCard from '../../components/dashboard/BookingCard';
import { Booking } from '../../types';

const mockBookings: Booking[] = [
  { id: '1', bookingDate: '2025-03-24', pickupLocation: 'Office A', dropoffLocation: 'Airport', vehicleType: 'Sedan', passengers: 2, status: 'Pending' },
  { id: '2', bookingDate: '2025-03-25', pickupLocation: 'Hotel B', dropoffLocation: 'Office A', vehicleType: 'SUV', passengers: 4, status: 'Approved' },
];

export default function BookingsPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">Scheduled Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </DashboardLayout>
  );
}