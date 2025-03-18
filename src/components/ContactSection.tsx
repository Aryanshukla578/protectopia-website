import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about protecting your intellectual property? 
            Our experts are here to help you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="animate-fadeIn border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="johndoe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Please describe your IP needs or concerns..." rows={5} />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">
                      as3061693@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">
                      +91 7068378758<br />
                      +91 7897612654<br />
                      +91 9935147551
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
              <p className="mb-4">
                Schedule a free 30-minute consultation with one of our IP experts to discuss your specific needs.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
