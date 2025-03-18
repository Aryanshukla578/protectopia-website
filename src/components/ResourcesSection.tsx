
import React from 'react';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">IP Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our library of resources to help you understand and protect your intellectual property.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fadeIn">
            <div className="h-48 bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Copyright guide" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Book className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Guide</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Copyright Protection Guide</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to understanding copyright law and how to protect your creative works.
              </p>
              <Button variant="outline" className="w-full">Download Guide</Button>
            </div>
          </div>
          
          <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fadeIn delay-100">
            <div className="h-48 bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Trademark checklist" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Book className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Checklist</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trademark Application Checklist</h3>
              <p className="text-muted-foreground mb-4">
                Step-by-step checklist to prepare and file a successful trademark application.
              </p>
              <Button variant="outline" className="w-full">Download Checklist</Button>
            </div>
          </div>
          
          <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fadeIn delay-200">
            <div className="h-48 bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1588600878108-578031aa6e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Patent ebook" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Book className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">E-Book</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Patent Filing Essentials</h3>
              <p className="text-muted-foreground mb-4">
                Essential information on patent types, requirements, and the application process.
              </p>
              <Button variant="outline" className="w-full">Download E-Book</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 animate-fadeIn">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated with IP Law Changes</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest updates on intellectual property laws, 
                regulations, and best practices for protecting your valuable assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Newsletter subscription" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
