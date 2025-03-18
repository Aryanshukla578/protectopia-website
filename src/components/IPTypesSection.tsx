
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Copyright, Book } from 'lucide-react';

const IPTypesSection = () => {
  return (
    <section id="ip-types" className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Types of Intellectual Property</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the different types of intellectual property and how to protect each one.
          </p>
        </div>
        
        <Tabs defaultValue="copyright" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3 mx-auto mb-8">
            <TabsTrigger value="copyright">Copyright</TabsTrigger>
            <TabsTrigger value="trademark">Trademark</TabsTrigger>
            <TabsTrigger value="patent">Patent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="copyright">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fadeIn">
                <div className="flex items-center space-x-3 mb-4">
                  <Copyright className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Copyright Protection</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Copyright protects original works of authorship, including literary, dramatic, musical, 
                  artistic, and certain other intellectual works.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">What It Covers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Literary works, including books, poems, articles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Musical compositions and sound recordings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Dramatic works and screenplays</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Visual artwork, photographs, and sculptures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Software code and computer programs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <p className="text-muted-foreground">
                      In most countries, copyright protection lasts for the author's lifetime plus 70 years.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fadeIn delay-200">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm"></div>
                <div className="relative bg-white shadow-sm rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-4">Key Copyright Facts</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Automatic Protection</h5>
                        <p className="text-sm text-muted-foreground">Copyright protection is automatic upon creation. No registration required.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Registration Benefits</h5>
                        <p className="text-sm text-muted-foreground">While not required, registration provides legal advantages in case of infringement.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Fair Use Exceptions</h5>
                        <p className="text-sm text-muted-foreground">Limited use of copyrighted material without permission for criticism, education, etc.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">International Protection</h5>
                        <p className="text-sm text-muted-foreground">The Berne Convention provides protection in most countries worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="trademark">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fadeIn">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Trademark Protection</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Trademarks protect brands, logos, symbols, and names that distinguish your products or services from others.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">What It Covers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Brand names and logos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Slogans and taglines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Product packaging and design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Sounds, colors, and scents (in some cases)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Domain names (when used in commerce)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <p className="text-muted-foreground">
                      Trademark protection can last indefinitely as long as it remains in use and renewal fees are paid.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fadeIn delay-200">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm"></div>
                <div className="relative bg-white shadow-sm rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-4">Key Trademark Facts</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Registration Required</h5>
                        <p className="text-sm text-muted-foreground">Unlike copyright, trademarks require registration for full protection.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Use It or Lose It</h5>
                        <p className="text-sm text-muted-foreground">Trademarks must be actively used in commerce to maintain protection.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Territory-Based</h5>
                        <p className="text-sm text-muted-foreground">Trademark protection is specific to the country or region of registration.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Distinctiveness Matters</h5>
                        <p className="text-sm text-muted-foreground">The more distinctive your mark, the stronger the protection it receives.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="patent">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fadeIn">
                <div className="flex items-center space-x-3 mb-4">
                  <Book className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Patent Protection</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Patents protect new inventions, innovations, processes, and improvements that are novel, useful, and non-obvious.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">What It Covers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Utility patents for new functional inventions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Design patents for ornamental designs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Plant patents for new plant varieties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Manufacturing processes and methods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Chemical compositions and formulations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <p className="text-muted-foreground">
                      Utility and plant patents last 20 years from filing date. Design patents last 15 years from grant date.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fadeIn delay-200">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm"></div>
                <div className="relative bg-white shadow-sm rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-4">Key Patent Facts</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Strict Requirements</h5>
                        <p className="text-sm text-muted-foreground">Inventions must be novel, useful, and non-obvious to qualify for patent protection.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Public Disclosure</h5>
                        <p className="text-sm text-muted-foreground">Publicly disclosing an invention before filing can invalidate patent rights in many countries.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Complex Application</h5>
                        <p className="text-sm text-muted-foreground">Patent applications require detailed descriptions, drawings, and claims defining the invention.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Monopoly Rights</h5>
                        <p className="text-sm text-muted-foreground">Patents give the holder the right to exclude others from making, using, or selling the invention.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default IPTypesSection;
