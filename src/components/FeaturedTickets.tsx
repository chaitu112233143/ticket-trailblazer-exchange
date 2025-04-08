
import React from 'react';
import TicketCard from './TicketCard';
import { Ticket } from '../types';

interface FeaturedTicketsProps {
  tickets: Ticket[];
  title: string;
  description?: string;
}

const FeaturedTickets: React.FC<FeaturedTicketsProps> = ({ 
  tickets, 
  title,
  description 
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>
        
        {tickets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No tickets available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedTickets;
