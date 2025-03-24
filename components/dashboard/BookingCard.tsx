import { Booking } from '../../types';

interface BookingCardProps {
  booking: Booking;
}

const BookingCard = ({ booking }: BookingCardProps) => {
  return (
    <div className="booking-card card">
      <h3 className="font-semibold">Booking #{booking.id}</h3>
      <p><strong>Date:</strong> {booking.bookingDate}</p>
      <p><strong>Pickup:</strong> {booking.pickupLocation}</p>
      <p><strong>Drop-off:</strong> {booking.dropoffLocation}</p>
      <p><strong>Vehicle:</strong> {booking.vehicleType}</p>
      <p><strong>Passengers:</strong> {booking.passengers}</p>
      <p><strong>Status:</strong> {booking.status}</p>
    </div>
  );
};

export default BookingCard;