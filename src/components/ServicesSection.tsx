
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Copyright, Book, Gavel } from 'lucide-react';

const services = [
  {
    title: "IP Registration",
    description: "Fast and efficient registration of patents, trademarks, and copyrights with global protection options.",
    icon: Shield
  },
  {
    title: "Legal Consultation",
    description: "Expert advice on intellectual property rights, infringement issues, and licensing strategies.",
    icon: Gavel
  },
  {
    title: "IP Portfolio Management",
    description: "Comprehensive management and monitoring of your intellectual property assets.",
    icon: Book
  },
  {
    title: "Infringement Protection",
    description: "Monitoring and enforcement services to protect against unauthorized use of your IP.",
    icon: Copyright
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive intellectual property protection services 
            tailored to safeguard your creative works and innovations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
