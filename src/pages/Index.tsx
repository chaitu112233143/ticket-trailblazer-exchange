
import React from 'react';
import Hero from '../components/Hero';
import FeaturedTickets from '../components/FeaturedTickets';
import { Ticket } from '../types';
import { ArrowRight, Shield, CreditCard, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Mock data for featured tickets
  const featuredTickets: Ticket[] = [
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
  ];

  return (
    <div>
      <Hero />
      
      <FeaturedTickets 
        tickets={featuredTickets} 
        title="Featured Tickets" 
        description="Hand-picked deals from verified sellers. Save on your next journey!" 
      />
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How TrailBlazer Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes buying and selling railway tickets simple, secure, and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-trailblazer-100 text-trailblazer-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Your Ticket</h3>
              <p className="text-gray-600">
                Search for tickets by route, date, or price. Filter to find the perfect ticket for your journey.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-forest-100 text-forest-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
              <p className="text-gray-600">
                Pay securely through our integrated payment system. Your transaction is protected by our guarantee.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-sunset-100 text-sunset-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Train className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Travel with Confidence</h3>
              <p className="text-gray-600">
                Receive your ticket instantly. Show up at the station and enjoy your journey with peace of mind.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-trailblazer-600 hover:text-trailblazer-800 font-medium inline-flex items-center">
              Learn more about our process
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trust Banner */}
      <section className="py-12 bg-gradient-to-r from-trailblazer-600 to-trailblazer-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Shield className="h-10 w-10 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl">Secure Platform</h3>
                <p className="opacity-90">All transactions are protected and encrypted</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <CreditCard className="h-10 w-10 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl">Money-Back Guarantee</h3>
                <p className="opacity-90">Full refund if your ticket isn't as described</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <HelpCircle className="h-10 w-10 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl">24/7 Support</h3>
                <p className="opacity-90">Our team is always here to help you</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied travelers who are buying and selling railway tickets easily and securely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn-primary px-8 py-3 text-lg">
              Create an Account
            </Link>
            <Link to="/tickets" className="btn-secondary px-8 py-3 text-lg">
              Browse Available Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { Search } from 'lucide-react';
