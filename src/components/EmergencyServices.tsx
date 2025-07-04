
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Ambulance, Hospital } from 'lucide-react';

const EmergencyServices = () => {
  const emergencyContacts = [
    { name: 'Police', number: '100', icon: Phone, color: 'bg-blue-600' },
    { name: 'Fire Service', number: '101', icon: Phone, color: 'bg-red-600' },
    { name: 'Ambulance', number: '102', icon: Ambulance, color: 'bg-green-600' },
    { name: 'Tourist Helpline', number: '1144', icon: Phone, color: 'bg-purple-600' },
  ];

  const nearbyHospitals = [
    { name: 'Tribhuvan University Teaching Hospital', location: 'Maharajgunj, Kathmandu', distance: '2.5 km' },
    { name: 'Nepal Medical College', location: 'Jorpati, Kathmandu', distance: '3.2 km' },
    { name: 'Grande International Hospital', location: 'Dhapasi, Kathmandu', distance: '4.1 km' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Services</h2>
          <p className="text-xl text-gray-600">Quick access to help when you need it most</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center text-red-800">
                <Phone className="mr-2 h-6 w-6" />
                Emergency Hotlines
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full ${contact.color} text-white mr-4`}>
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-gray-800">{contact.name}</span>
                    </div>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open(`tel:${contact.number}`)}
                    >
                      {contact.number}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-green-800">
                <Hospital className="mr-2 h-6 w-6" />
                Nearby Hospitals
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {nearbyHospitals.map((hospital, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">{hospital.name}</h4>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hospital.location}
                        </p>
                      </div>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                        {hospital.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
