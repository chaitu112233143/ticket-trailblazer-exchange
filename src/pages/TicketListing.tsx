
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, Train, User, AlertCircle, CreditCard, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Ticket } from '../types';

// Mock ticket data - in production this would come from API/database
const mockTickets: Record<string, Ticket> = {
  '1': {
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
  '2': {
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
  }
};

const TicketListing = () => {
  const { id } = useParams<{ id: string }>();
  const [purchasing, setPurchasing] = useState(false);
  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);
  
  // In a real app, we would fetch the ticket by ID from an API
  const ticket = mockTickets[id || '1'];  // Default to first ticket if ID not found
  
  if (!ticket) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <div className="flex items-center justify-center text-red-500 mb-4">
            <AlertCircle className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Ticket Not Found</h2>
          <p className="text-gray-600 text-center mb-6">
            The ticket you are looking for does not exist or has been removed.
          </p>
          <div className="flex justify-center">
            <a href="/tickets" className="btn-primary">
              Browse Available Tickets
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  // Calculate savings
  const savings = ticket.originalPrice - ticket.resalePrice;
  const savingsPercentage = Math.round((savings / ticket.originalPrice) * 100);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  const handlePurchase = () => {
    setPurchasing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setPurchasing(false);
      setPurchaseSuccessful(true);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Purchase Success */}
          {purchaseSuccessful ? (
            <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 text-green-600 rounded-full p-4 mb-6">
                  <CheckCircle className="h-16 w-16" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Purchase Successful!</h2>
                <p className="text-gray-600 mb-6 max-w-md">
                  Thank you for your purchase. Your ticket has been sent to your email address.
                </p>
                <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{ticket.origin}</span>
                    <ArrowRight className="h-5 w-5 text-trailblazer-500" />
                    <span className="font-semibold text-gray-700">{ticket.destination}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <span className="text-gray-500">Date: </span>
                      <span className="font-medium">{formatDate(ticket.departureDate)}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Time: </span>
                      <span className="font-medium">{ticket.departureTime}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Train: </span>
                      <span className="font-medium">{ticket.trainNumber}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Class: </span>
                      <span className="font-medium">{ticket.seatClass}</span>
                    </div>
                    {ticket.seatNumber && (
                      <div>
                        <span className="text-gray-500">Seat: </span>
                        <span className="font-medium">{ticket.seatNumber}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4 mt-2">
                    <span className="text-gray-600">Total Paid:</span>
                    <span className="font-bold text-lg">£{ticket.resalePrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="/profile" className="btn-primary">
                    View Your Tickets
                  </a>
                  <a href="/tickets" className="btn-secondary">
                    Find More Tickets
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Ticket Details */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Ticket Header */}
                <div className="bg-gradient-to-r from-trailblazer-600 to-trailblazer-800 text-white p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm uppercase tracking-wide opacity-90">One-Way Ticket</span>
                      <div className="flex items-center mt-1">
                        <h1 className="text-2xl font-bold">{ticket.origin}</h1>
                        <ArrowRight className="h-5 w-5 mx-2" />
                        <h1 className="text-2xl font-bold">{ticket.destination}</h1>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="text-xs opacity-90">Price</div>
                      <div className="text-2xl font-bold">£{ticket.resalePrice.toFixed(2)}</div>
                      <div className="text-xs">
                        <span className="line-through">£{ticket.originalPrice.toFixed(2)}</span>
                        <span className="ml-1">Save {savingsPercentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Ticket Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Journey Details</h2>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-start mb-3">
                              <Calendar className="h-5 w-5 text-trailblazer-600 mr-2 flex-shrink-0" />
                              <div>
                                <div className="text-sm text-gray-500">Departure Date</div>
                                <div className="font-medium">{formatDate(ticket.departureDate)}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start mb-3">
                              <Clock className="h-5 w-5 text-trailblazer-600 mr-2 flex-shrink-0" />
                              <div>
                                <div className="text-sm text-gray-500">Departure Time</div>
                                <div className="font-medium">{ticket.departureTime}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <Train className="h-5 w-5 text-trailblazer-600 mr-2 flex-shrink-0" />
                              <div>
                                <div className="text-sm text-gray-500">Train Number</div>
                                <div className="font-medium">{ticket.trainNumber}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-start mb-3">
                              <MapPin className="h-5 w-5 text-trailblazer-600 mr-2 flex-shrink-0" />
                              <div>
                                <div className="text-sm text-gray-500">Departure Station</div>
                                <div className="font-medium">{ticket.origin} Station</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start mb-3">
                              <MapPin className="h-5 w-5 text-forest-600 mr-2 flex-shrink-0" />
                              <div>
                                <div className="text-sm text-gray-500">Arrival Station</div>
                                <div className="font-medium">{ticket.destination} Station</div>
                              </div>
                            </div>
                            
                            {ticket.seatNumber && (
                              <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-trailblazer-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" />
                                </svg>
                                <div>
                                  <div className="text-sm text-gray-500">Seat Number</div>
                                  <div className="font-medium">{ticket.seatNumber}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center">
                            <div className="px-3 py-1 bg-trailblazer-100 text-trailblazer-800 rounded-full text-sm font-medium">
                              {ticket.seatClass}
                            </div>
                            {ticket.seatClass === 'First Class' && (
                              <div className="ml-2 text-sm text-gray-500">
                                Includes complimentary meals and WiFi
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Seller Information</h2>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center bg-gray-200 rounded-full w-12 h-12 mr-3">
                            <User className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <div className="font-medium">{ticket.sellerName}</div>
                            <div className="text-sm text-gray-500">Member since February 2025</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="flex items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>4.9 (56 reviews)</span>
                          </div>
                          <div>98% successful transactions</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold mb-3">Price Details</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Original Ticket Price</span>
                            <span className="line-through">£{ticket.originalPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Listed Price</span>
                            <span>£{ticket.resalePrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Service Fee</span>
                            <span>£0.00</span>
                          </div>
                          <div className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                            <span>Total</span>
                            <span>£{ticket.resalePrice.toFixed(2)}</span>
                          </div>
                          <div className="text-green-600 text-sm">
                            You save £{savings.toFixed(2)} ({savingsPercentage}% off)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ticket Policy */}
                  <div className="border-t border-gray-200 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div className="flex items-start mb-4 md:mb-0">
                        <Shield className="h-5 w-5 text-trailblazer-600 mr-2 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Buyer Protection Guarantee</div>
                          <div className="text-sm text-gray-500">
                            Full refund if ticket is not as described or if there are any issues
                          </div>
                        </div>
                      </div>
                      
                      <button
                        className="btn-primary flex items-center px-6 py-3 text-lg"
                        onClick={handlePurchase}
                        disabled={purchasing}
                      >
                        {purchasing ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard className="h-5 w-5 mr-2" />
                            Purchase Ticket
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-5">
                  <div className="text-trailblazer-600 mb-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">Secure Transaction</h3>
                  <p className="text-sm text-gray-600">
                    Your payment is protected by our secure payment system.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-5">
                  <div className="text-forest-600 mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">Instant Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Receive your ticket instantly via email after purchase.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-5">
                  <div className="text-sunset-600 mb-2">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">Verified Ticket</h3>
                  <p className="text-sm text-gray-600">
                    This ticket has been verified by our system for authenticity.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketListing;
