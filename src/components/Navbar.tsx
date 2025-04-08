
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Train, User, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // This would come from your auth context

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Train className="h-6 w-6 text-trailblazer-600" />
          <span className="text-xl font-bold text-trailblazer-800">TrailBlazer Tickets</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-trailblazer-600 transition-colors">Home</Link>
          <Link to="/tickets" className="text-gray-700 hover:text-trailblazer-600 transition-colors">Find Tickets</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-trailblazer-600 transition-colors">How It Works</Link>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/sell" className="btn-primary">Sell Tickets</Link>
              <Link to="/profile" className="flex items-center text-gray-700 hover:text-trailblazer-600">
                <User className="h-5 w-5 mr-1" />
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="flex items-center text-gray-700 hover:text-trailblazer-600">
                <LogIn className="h-5 w-5 mr-1" />
                <span>Log In</span>
              </Link>
              <Link to="/register" className="btn-primary">Sign Up</Link>
            </div>
          )}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 border-t border-gray-100 animate-slide-up">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-trailblazer-600 transition-colors">Home</Link>
            <Link to="/tickets" className="text-gray-700 hover:text-trailblazer-600 transition-colors">Find Tickets</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-trailblazer-600 transition-colors">How It Works</Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/sell" className="btn-primary text-center">Sell Tickets</Link>
                <Link to="/profile" className="flex items-center text-gray-700 hover:text-trailblazer-600">
                  <User className="h-5 w-5 mr-1" />
                  <span>Profile</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center text-gray-700 hover:text-trailblazer-600">
                  <LogIn className="h-5 w-5 mr-1" />
                  <span>Log In</span>
                </Link>
                <Link to="/register" className="btn-primary text-center">Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
