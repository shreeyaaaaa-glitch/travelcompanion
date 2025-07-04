
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone } from 'lucide-react';

const TourismServices = () => {
  const tourCompanies = [
    {
      name: 'Himalayan Wonders Trek',
      rating: 4.8,
      license: 'NTB-2024-1234',
      specialty: 'Everest Base Camp, Annapurna Circuit',
      priceRange: 'NPR 45,000 - 180,000',
      contact: '+977-1-4426721',
      verified: true
    },
    {
      name: 'Nepal Adventure Tours',
      rating: 4.6,
      license: 'NTB-2024-5678',
      specialty: 'Cultural Tours, Wildlife Safari',
      priceRange: 'NPR 25,000 - 120,000',
      contact: '+977-1-4422896',
      verified: true
    },
    {
      name: 'Sacred Valley Expeditions',
      rating: 4.7,
      license: 'NTB-2024-9012',
      specialty: 'Mustang, Dolpo Treks',
      priceRange: 'NPR 55,000 - 200,000',
      contact: '+977-1-4428543',
      verified: true
    }
  ];

  const accommodations = [
    {
      name: 'Hotel Himalaya',
      type: 'Luxury Hotel',
      location: 'Thamel, Kathmandu',
      rating: 4.5,
      priceRange: 'NPR 8,000 - 15,000/night',
      amenities: ['Free WiFi', 'Restaurant', 'Spa', 'Airport Transfer']
    },
    {
      name: 'Everest Resort',
      type: 'Mountain Resort',
      location: 'Nagarkot',
      rating: 4.3,
      priceRange: 'NPR 12,000 - 25,000/night',
      amenities: ['Mountain View', 'Restaurant', 'Hiking Trails', 'Yoga']
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tourism Services</h2>
          <p className="text-xl text-gray-600">Verified guides and trusted companies</p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Licensed Tour Companies</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {tourCompanies.map((company, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                        {company.name}
                        {company.verified && (
                          <Badge className="ml-2 bg-green-100 text-green-800">✓ Verified</Badge>
                        )}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">License: {company.license}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="font-bold text-gray-900">{company.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Specialty: </span>
                      <span className="text-gray-600">{company.specialty}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Price Range: </span>
                      <span className="text-green-600 font-bold">{company.priceRange}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-1" />
                        {company.contact}
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Contact Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Accommodations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {accommodations.map((hotel, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{hotel.name}</CardTitle>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {hotel.location}
                      </p>
                    </div>
                    <Badge variant="outline">{hotel.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-bold">{hotel.rating}</span>
                      </div>
                      <span className="text-green-600 font-bold">{hotel.priceRange}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismServices;
