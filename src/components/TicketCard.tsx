
import React from 'react';
import { Calendar, Clock, Train, MapPin, ArrowRight } from 'lucide-react';
import { Ticket } from '../types';
import { Link } from 'react-router-dom';

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  // Format the date to display in a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Calculate savings
  const savings = ticket.originalPrice - ticket.resalePrice;
  const savingsPercentage = Math.round((savings / ticket.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="p-6">
        {/* Route */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-trailblazer-500 mr-1" />
            <span className="font-semibold">{ticket.origin}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-forest-500 mr-1" />
            <span className="font-semibold">{ticket.destination}</span>
          </div>
        </div>
        
        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{formatDate(ticket.departureDate)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{ticket.departureTime}</span>
          </div>
          <div className="flex items-center">
            <Train className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">Train {ticket.trainNumber}</span>
          </div>
          <div>
            <span className="text-sm font-medium px-2 py-1 bg-trailblazer-100 text-trailblazer-800 rounded-full">
              {ticket.seatClass}
            </span>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex justify-between items-end pt-2">
          <div>
            <div className="text-sm text-gray-500">Original Price</div>
            <div className="text-gray-400 line-through">£{ticket.originalPrice.toFixed(2)}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Your Price</div>
            <div className="text-xl font-bold text-sunset-600">£{ticket.resalePrice.toFixed(2)}</div>
            <div className="text-xs text-green-600">Save {savingsPercentage}%</div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 p-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Sold by <span className="font-medium">{ticket.sellerName}</span>
          </div>
          <Link 
            to={`/tickets/${ticket.id}`} 
            className="text-trailblazer-600 hover:text-trailblazer-800 font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
