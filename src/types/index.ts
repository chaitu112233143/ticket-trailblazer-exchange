
export interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
}

export interface Ticket {
  id: string;
  sellerId: string;
  sellerName: string;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  trainNumber: string;
  seatClass: 'Economy' | 'Business' | 'First Class';
  seatNumber?: string;
  originalPrice: number;
  resalePrice: number;
  available: boolean;
  createdAt: string;
}

export interface SearchFilters {
  origin?: string;
  destination?: string;
  departureDate?: string;
  seatClass?: string;
  priceRange?: [number, number];
}
