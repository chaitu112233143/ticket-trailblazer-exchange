
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-trailblazer-700 to-forest-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Buy & Sell Railway Tickets Securely
            </h1>
            <p className="text-xl opacity-90 max-w-lg">
              TrailBlazer Tickets connects buyers and sellers in a safe marketplace. Find the best deals on railway tickets!
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/tickets"
                className="btn-primary flex items-center justify-center bg-white text-trailblazer-700 hover:bg-gray-100"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Tickets
              </Link>
              <Link
                to="/sell"
                className="btn-secondary flex items-center justify-center"
              >
                Sell Your Ticket
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -right-8 -top-8 w-64 h-64 bg-sunset-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -left-8 -bottom-8 w-64 h-64 bg-trailblazer-300 rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative bg-white p-6 rounded-lg shadow-lg transform rotate-3">
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">London</span>
                    <ArrowRight className="h-5 w-5 text-trailblazer-500" />
                    <span className="font-semibold text-gray-800">Edinburgh</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Apr 15, 2025 • 14:30 • First Class
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">Original</div>
                    <div className="text-gray-400 line-through">£95.00</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Resale Price</div>
                    <div className="text-xl font-bold text-sunset-600">£75.00</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-lg shadow-lg transform -rotate-6">
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">Manchester</span>
                    <ArrowRight className="h-5 w-5 text-trailblazer-500" />
                    <span className="font-semibold text-gray-800">Liverpool</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Apr 12, 2025 • 09:15 • Economy
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">Original</div>
                    <div className="text-gray-400 line-through">£25.00</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Resale Price</div>
                    <div className="text-xl font-bold text-sunset-600">£18.50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Banner */}
      <div className="bg-white/10 backdrop-blur-sm py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm opacity-80">Tickets Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-sm opacity-80">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-80">Secure Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
