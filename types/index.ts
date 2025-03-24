export interface User {
    email: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    customerType: 'Corporate' | 'Private';
    companyName?: string;
    companyAddress?: string;
    password?: string;
  }
  
  export interface Booking {
    id: string;
    bookingDate: string;
    pickupLocation: string;
    dropoffLocation: string;
    vehicleType: string;
    passengers: number;
    status: 'Pending' | 'Approved' | 'Completed' | 'Canceled';
  }
  
  export interface Report {
    id: string;
    type: string;
    date: string;
    details: string;
  }