
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';

const EmbassyContacts = () => {
  const embassies = [
    {
      country: 'United States',
      flag: '🇺🇸',
      address: 'Maharajgunj, Kathmandu',
      phone: '+977-1-423-4000',
      emergency: '+977-1-400-7272'
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      address: 'Lainchaur, Kathmandu',
      phone: '+977-1-441-0583',
      emergency: '+977-1-441-0583'
    },
    {
      country: 'India',
      flag: '🇮🇳',
      address: 'Lainchaur, Kathmandu',
      phone: '+977-1-441-0900',
      emergency: '+977-1-441-0900'
    },
    {
      country: 'China',
      flag: '🇨🇳',
      address: 'Hattisar, Kathmandu',
      phone: '+977-1-441-1740',
      emergency: '+977-1-441-1740'
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      address: 'Gyaneshwor, Kathmandu',
      phone: '+977-1-441-2786',
      emergency: '+977-1-441-2786'
    },
    {
      country: 'Japan',
      flag: '🇯🇵',
      address: 'Panipokhari, Kathmandu',
      phone: '+977-1-442-6680',
      emergency: '+977-1-442-6680'
    }
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-blue-800 flex items-center">
          🏛️ Embassy Contacts
        </CardTitle>
        <p className="text-sm text-blue-600">Emergency contacts for your country</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {embassies.map((embassy, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <span className="text-2xl mr-2">{embassy.flag}</span>
                    {embassy.country}
                  </h4>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {embassy.address}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">General:</span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open(`tel:${embassy.phone}`)}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    {embassy.phone}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Emergency:</span>
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.open(`tel:${embassy.emergency}`)}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    {embassy.emergency}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          Contact your embassy for passport issues, legal help, or emergencies
        </div>
      </CardContent>
    </Card>
  );
};

export default EmbassyContacts;
