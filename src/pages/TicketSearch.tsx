
import React, { useState } from 'react';
import SearchFilters from '../components/SearchFilters';
import { Ticket, SearchFilters as SearchFiltersType } from '../types';
import TicketCard from '../components/TicketCard';
import { Calendar, Filter, MapPin, SortAsc, SortDesc } from 'lucide-react';

const TicketSearch = () => {
  // Mock ticket data
  const allTickets: Ticket[] = [
    {
      id: '1',
      sellerId: 'seller1',
      sellerName: 'John D.',
      origin: 'London',
      destination: 'Manchester',
      departureDate: '2025-04-15',
      departureTime: '14:30',
      trainNumber: 'IC 2547',
      seatClass: 'Economy',
      seatNumber: 'B12',
      originalPrice: 78.50,
      resalePrice: 65.00,
      available: true,
      createdAt: '2025-04-01'
    },
    {
      id: '2',
      sellerId: 'seller2',
      sellerName: 'Emma S.',
      origin: 'Edinburgh',
      destination: 'Glasgow',
      departureDate: '2025-04-18',
      departureTime: '09:15',
      trainNumber: 'SC 1024',
      seatClass: 'Business',
      originalPrice: 45.00,
      resalePrice: 37.50,
      available: true,
      createdAt: '2025-04-02'
    },
    {
      id: '3',
      sellerId: 'seller3',
      sellerName: 'Michael P.',
      origin: 'Birmingham',
      destination: 'Liverpool',
      departureDate: '2025-04-20',
      departureTime: '16:45',
      trainNumber: 'RE 8742',
      seatClass: 'First Class',
      seatNumber: 'A5',
      originalPrice: 120.00,
      resalePrice: 95.00,
      available: true,
      createdAt: '2025-04-03'
    },
    {
      id: '4',
      sellerId: 'seller4',
      sellerName: 'Sophie T.',
      origin: 'London',
      destination: 'Edinburgh',
      departureDate: '2025-04-22',
      departureTime: '08:00',
      trainNumber: 'EC 5210',
      seatClass: 'Economy',
      originalPrice: 110.00,
      resalePrice: 89.99,
      available: true,
      createdAt: '2025-04-04'
    },
    {
      id: '5',
      sellerId: 'seller5',
      sellerName: 'David R.',
      origin: 'Manchester',
      destination: 'London',
      departureDate: '2025-04-25',
      departureTime: '12:15',
      trainNumber: 'IC 3698',
      seatClass: 'Business',
      seatNumber: 'C8',
      originalPrice: 95.00,
      resalePrice: 80.00,
      available: true,
      createdAt: '2025-04-05'
    },
    {
      id: '6',
      sellerId: 'seller6',
      sellerName: 'Sarah L.',
      origin: 'Glasgow',
      destination: 'Aberdeen',
      departureDate: '2025-04-28',
      departureTime: '10:30',
      trainNumber: 'SC 4732',
      seatClass: 'Economy',
      originalPrice: 58.50,
      resalePrice: 42.00,
      available: true,
      createdAt: '2025-04-06'
    }
  ];

  const [searchParams, setSearchParams] = useState<SearchFiltersType>({});
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>(allTickets);
  const [sortOption, setSortOption] = useState<string>('price-low');
  
  const handleSearch = (filters: SearchFiltersType) => {
    setSearchParams(filters);
    
    // Filter tickets based on search parameters
    let results = [...allTickets];
    
    if (filters.origin) {
      results = results.filter(ticket => 
        ticket.origin.toLowerCase().includes(filters.origin?.toLowerCase() || '')
      );
    }
    
    if (filters.destination) {
      results = results.filter(ticket => 
        ticket.destination.toLowerCase().includes(filters.destination?.toLowerCase() || '')
      );
    }
    
    if (filters.departureDate) {
      results = results.filter(ticket => 
        ticket.departureDate === filters.departureDate
      );
    }
    
    if (filters.seatClass) {
      results = results.filter(ticket => 
        ticket.seatClass === filters.seatClass
      );
    }
    
    if (filters.priceRange) {
      results = results.filter(ticket => 
        ticket.resalePrice >= filters.priceRange![0] && 
        ticket.resalePrice <= filters.priceRange![1]
      );
    }
    
    // Sort results
    sortResults(results, sortOption);
  };
  
  const sortResults = (tickets: Ticket[], option: string) => {
    let sortedTickets = [...tickets];
    
    switch (option) {
      case 'price-low':
        sortedTickets.sort((a, b) => a.resalePrice - b.resalePrice);
        break;
      case 'price-high':
        sortedTickets.sort((a, b) => b.resalePrice - a.resalePrice);
        break;
      case 'date-asc':
        sortedTickets.sort((a, b) => new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime());
        break;
      case 'date-desc':
        sortedTickets.sort((a, b) => new Date(b.departureDate).getTime() - new Date(a.departureDate).getTime());
        break;
      default:
        break;
    }
    
    setFilteredTickets(sortedTickets);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    sortResults(filteredTickets, newSortOption);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Find Your Perfect Railway Ticket</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search our marketplace for the best deals on railway tickets from verified sellers.
          </p>
        </div>
        
        <SearchFilters onSearch={handleSearch} />
        
        {/* Results section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-700">
              <strong>{filteredTickets.length}</strong> tickets found
              {searchParams.origin && searchParams.destination && (
                <span className="ml-2 inline-flex items-center">
                  <MapPin className="h-4 w-4 text-trailblazer-500 mr-1" />
                  <span className="font-medium">{searchParams.origin}</span>
                  <span className="mx-1">to</span>
                  <span className="font-medium">{searchParams.destination}</span>
                </span>
              )}
              {searchParams.departureDate && (
                <span className="ml-2 inline-flex items-center">
                  <Calendar className="h-4 w-4 text-trailblazer-500 mr-1" />
                  <span>{new Date(searchParams.departureDate).toLocaleDateString()}</span>
                </span>
              )}
            </div>
            
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <select 
                value={sortOption}
                onChange={handleSortChange}
                className="border-gray-300 rounded-md text-sm focus:ring-trailblazer-500 focus:border-trailblazer-500"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="date-asc">Date: Earliest First</option>
                <option value="date-desc">Date: Latest First</option>
              </select>
            </div>
          </div>
          
          {filteredTickets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Filter className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No Tickets Found</h3>
              <p className="text-gray-500 mb-4">
                We couldn't find any tickets matching your search criteria.<br />
                Try adjusting your filters or search for a different route.
              </p>
              <button 
                onClick={() => {
                  setSearchParams({});
                  setFilteredTickets(allTickets);
                }}
                className="text-trailblazer-600 hover:text-trailblazer-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketSearch;
