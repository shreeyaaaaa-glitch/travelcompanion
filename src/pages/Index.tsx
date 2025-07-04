
import React, { useState } from 'react';
import Hero from '../components/Hero';
import LocationSelector, { Location } from '../components/LocationSelector';
import LocationBasedServices from '../components/LocationBasedServices';
import EmergencyServices from '../components/EmergencyServices';
import CulturalHeritage from '../components/CulturalHeritage';
import TourismServices from '../components/TourismServices';
import CurrencyConverter from '../components/CurrencyConverter';
import EmbassyContacts from '../components/EmbassyContacts';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Hero />
      
      {/* Location Selection Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Nepal by Location</h2>
            <p className="text-xl text-gray-600">Select your destination to find nearby services and attractions</p>
          </div>
          
          <div className="flex justify-center mb-12">
            <LocationSelector 
              onLocationSelect={setSelectedLocation}
              selectedLocation={selectedLocation}
            />
          </div>
          
          {selectedLocation && (
            <LocationBasedServices selectedLocation={selectedLocation} />
          )}
        </div>
      </section>

      <EmergencyServices />
      <CulturalHeritage />
      <TourismServices />
      <div className="grid md:grid-cols-2 gap-8 px-4 py-12 max-w-7xl mx-auto">
        <CurrencyConverter />
        <EmbassyContacts />
      </div>
    </div>
  );
};

export default Index;
