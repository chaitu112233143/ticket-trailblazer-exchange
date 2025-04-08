
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { SearchFilters as SearchFiltersType } from '../types';

interface SearchFiltersProps {
  onSearch: (filters: SearchFiltersType) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFiltersType>({
    origin: '',
    destination: '',
    departureDate: '',
    seatClass: '',
    priceRange: [0, 500]
  });
  
  const [expanded, setExpanded] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const index = name === 'minPrice' ? 0 : 1;
    const newPriceRange = [...filters.priceRange!];
    newPriceRange[index] = parseInt(value);
    setFilters(prev => ({ ...prev, priceRange: newPriceRange as [number, number] }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };
  
  const handleReset = () => {
    setFilters({
      origin: '',
      destination: '',
      departureDate: '',
      seatClass: '',
      priceRange: [0, 500]
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <form onSubmit={handleSubmit}>
        {/* Basic Search (Always Visible) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="input-group">
            <label htmlFor="origin" className="text-sm font-medium text-gray-700">Origin</label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={filters.origin}
              onChange={handleInputChange}
              placeholder="Departure station"
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="destination" className="text-sm font-medium text-gray-700">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={filters.destination}
              onChange={handleInputChange}
              placeholder="Arrival station"
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="departureDate" className="text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={filters.departureDate}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>
        
        {/* Advanced Filters */}
        {expanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fade-in">
            <div className="input-group">
              <label htmlFor="seatClass" className="text-sm font-medium text-gray-700">Seat Class</label>
              <select
                id="seatClass"
                name="seatClass"
                value={filters.seatClass}
                onChange={handleInputChange}
                className="border rounded-md px-3 py-2 w-full"
              >
                <option value="">Any Class</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Price Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  name="minPrice"
                  value={filters.priceRange?.[0]}
                  onChange={handlePriceChange}
                  min={0}
                  max={filters.priceRange?.[1]}
                  className="border rounded-md px-3 py-2 w-full"
                  placeholder="Min"
                />
                <span>to</span>
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.priceRange?.[1]}
                  onChange={handlePriceChange}
                  min={filters.priceRange?.[0]}
                  className="border rounded-md px-3 py-2 w-full"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Controls */}
        <div className="flex flex-wrap justify-between mt-6">
          <button
            type="button"
            className="text-gray-600 text-sm flex items-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <X className="h-4 w-4 mr-1" />
                Less Filters
              </>
            ) : (
              <>
                <span className="mr-1">+</span>
                More Filters
              </>
            )}
          </button>
          
          <div className="flex space-x-3">
            {(filters.origin || filters.destination || filters.departureDate || filters.seatClass) && (
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Clear All
              </button>
            )}
            
            <button
              type="submit"
              className="btn-primary flex items-center"
            >
              <Search className="h-4 w-4 mr-2" />
              Search Tickets
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
