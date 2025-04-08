
import React, { useState } from 'react';
import { User, Edit2, Mail, Phone, Clock, Package, ShieldCheck, LogOut } from 'lucide-react';
import { Ticket } from '../types';
import TicketCard from '../components/TicketCard';

const Profile = () => {
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+44 7123 456789',
    joined: 'January 2025',
    profileImage: null
  });
  
  // Mock ticket data
  const userTickets: Ticket[] = [
    {
      id: '101',
      sellerId: 'current-user',
      sellerName: 'You',
      origin: 'London',
      destination: 'Cardiff',
      departureDate: '2025-05-10',
      departureTime: '13:45',
      trainNumber: 'GW 3812',
      seatClass: 'Economy',
      originalPrice: 65.00,
      resalePrice: 55.00,
      available: true,
      createdAt: '2025-04-01'
    },
    {
      id: '102',
      sellerId: 'current-user',
      sellerName: 'You',
      origin: 'Bristol',
      destination: 'London',
      departureDate: '2025-05-15',
      departureTime: '09:20',
      trainNumber: 'GW 2155',
      seatClass: 'Business',
      seatNumber: 'D7',
      originalPrice: 85.00,
      resalePrice: 70.00,
      available: true,
      createdAt: '2025-04-02'
    }
  ];
  
  // Mock purchase history
  const purchaseHistory: Ticket[] = [
    {
      id: '201',
      sellerId: 'seller1',
      sellerName: 'Sarah M.',
      origin: 'Manchester',
      destination: 'York',
      departureDate: '2025-04-25',
      departureTime: '10:30',
      trainNumber: 'IC 4578',
      seatClass: 'First Class',
      originalPrice: 110.00,
      resalePrice: 92.50,
      available: false,
      createdAt: '2025-03-15'
    }
  ];
  
  const [activeTab, setActiveTab] = useState('listings');

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center text-gray-600 mb-4 md:mb-0 md:mr-6 relative">
                {userData.profileImage ? (
                  <img 
                    src={userData.profileImage} 
                    alt={userData.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <User className="h-12 w-12" />
                )}
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-50">
                  <Edit2 className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <div className="flex flex-col md:flex-row md:items-center text-gray-500 mt-2">
                  <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                    <Mail className="h-4 w-4 mr-1" />
                    <span>{userData.email}</span>
                  </div>
                  <span className="hidden md:inline mx-2">•</span>
                  <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>{userData.phone}</span>
                  </div>
                  <span className="hidden md:inline mx-2">•</span>
                  <div className="flex items-center justify-center md:justify-start">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Member since {userData.joined}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md flex items-center transition-colors">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-trailblazer-600">{userTickets.length}</div>
                <div className="text-sm text-gray-500">Active Listings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-forest-600">{purchaseHistory.length}</div>
                <div className="text-sm text-gray-500">Tickets Purchased</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sunset-600">100%</div>
                <div className="text-sm text-gray-500">Positive Feedback</div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('listings')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'listings'
                      ? 'border-trailblazer-500 text-trailblazer-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Package className="h-5 w-5 inline mr-2" />
                  Your Listings
                </button>
                <button
                  onClick={() => setActiveTab('purchases')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'purchases'
                      ? 'border-trailblazer-500 text-trailblazer-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <ShieldCheck className="h-5 w-5 inline mr-2" />
                  Purchase History
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'settings'
                      ? 'border-trailblazer-500 text-trailblazer-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Account Settings
                </button>
              </nav>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'listings' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Your Ticket Listings</h2>
                  <button className="btn-primary">
                    Add New Listing
                  </button>
                </div>
                
                {userTickets.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userTickets.map(ticket => (
                      <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <Package className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No Listings Yet</h3>
                    <p className="text-gray-500 mb-4">You haven't listed any tickets for sale yet.</p>
                    <button className="btn-primary">
                      Create Your First Listing
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'purchases' && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-bold mb-4">Your Purchase History</h2>
                
                {purchaseHistory.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {purchaseHistory.map(ticket => (
                      <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <ShieldCheck className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No Purchases Yet</h3>
                    <p className="text-gray-500 mb-4">You haven't purchased any tickets yet.</p>
                    <button className="btn-primary">
                      Browse Available Tickets
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="animate-fade-in bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded-md px-3 py-2 w-full"
                        defaultValue={userData.name}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border rounded-md px-3 py-2 w-full"
                        defaultValue={userData.email}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="border rounded-md px-3 py-2 w-full"
                        defaultValue={userData.phone}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <h3 className="text-lg font-medium mb-4">Password</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label htmlFor="current-password" className="text-sm font-medium text-gray-700">Current Password</label>
                      <input
                        type="password"
                        id="current-password"
                        name="current-password"
                        className="border rounded-md px-3 py-2 w-full"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="new-password" className="text-sm font-medium text-gray-700">New Password</label>
                      <input
                        type="password"
                        id="new-password"
                        name="new-password"
                        className="border rounded-md px-3 py-2 w-full"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">Confirm New Password</label>
                      <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        className="border rounded-md px-3 py-2 w-full"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md flex items-center transition-colors">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                  
                  <button className="btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
