import { useEffect } from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import servicesData from '@/data/services.json';

const Services = () => {
  useEffect(() => {
    // Update page metadata
    document.title = 'Taxi Services in Guwahati, Airport Transfers, Local Rides | Orange Cabs';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Orange Cabs services in Guwahati, local city rides, airport pickup and drop, and outstation travel. Choose sedan, SUV, or traveller options based on your trip.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Taxi Services in Guwahati, Airport Transfers, Local Rides | Orange Cabs');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Explore Orange Cabs services in Guwahati, local city rides, airport pickup and drop, and outstation travel. Choose sedan, SUV, or traveller options based on your trip.');
    }

    // Update Twitter metadata
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Taxi Services in Guwahati, Airport Transfers, Local Rides | Orange Cabs');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Explore Orange Cabs services in Guwahati, local city rides, airport pickup and drop, and outstation travel. Choose sedan, SUV, or traveller options based on your trip.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of taxi services in Guwahati for local rides, airport transfers, and outstation travel across Northeast India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.cityServices.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;