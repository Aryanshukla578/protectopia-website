
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Copyright } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-36 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-background to-blue-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">Protecting What Matters</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Safeguarding Your <span className="text-primary">Intellectual Property</span> Rights
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Comprehensive solutions to protect your creative works, inventions, designs, and brand identity in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-medium">
              Get Protection
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Copyright className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Copyright</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Trademarks</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Patents</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
          <div className="relative bg-white shadow-xl rounded-lg p-6 animate-fadeIn delay-200">
            <div className="aspect-video bg-muted rounded-md mb-6 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Intellectual property protection" 
                className="w-full h-full object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Why Protect Your Intellectual Property?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Prevent unauthorized use of your work</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure your market advantage</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Create additional revenue streams</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Build business value and reputation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
