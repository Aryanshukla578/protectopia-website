
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-4 md:px-8 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl md:text-2xl text-foreground">IP Protector</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#services" className="font-medium text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#ip-types" className="font-medium text-foreground hover:text-primary transition-colors">IP Types</a>
          <a href="#resources" className="font-medium text-foreground hover:text-primary transition-colors">Resources</a>
          <a href="#contact" className="font-medium text-foreground hover:text-primary transition-colors">Contact</a>
          <Button variant="default">Get Started</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white py-2 px-4 flex flex-col space-y-4 animate-fadeIn">
          <a href="#home" className="font-medium text-foreground hover:text-primary transition-colors py-2">Home</a>
          <a href="#services" className="font-medium text-foreground hover:text-primary transition-colors py-2">Services</a>
          <a href="#ip-types" className="font-medium text-foreground hover:text-primary transition-colors py-2">IP Types</a>
          <a href="#resources" className="font-medium text-foreground hover:text-primary transition-colors py-2">Resources</a>
          <a href="#contact" className="font-medium text-foreground hover:text-primary transition-colors py-2">Contact</a>
          <Button variant="default" className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
