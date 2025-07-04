
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Hospital, Hotel, MapPin, Phone, Star } from 'lucide-react';
import { Location } from './LocationSelector';

interface LocationBasedServicesProps {
  selectedLocation: Location;
}

const LocationBasedServices: React.FC<LocationBasedServicesProps> = ({ selectedLocation }) => {
  // Mock data based on location
  const getLocationBasedData = (locationId: string) => {
    const data: { [key: string]: any } = {
      ktm: {
        hospitals: [
          { name: 'Tribhuvan University Teaching Hospital', distance: '2.3 km', specialty: 'Multi-specialty', contact: '+977-1-4412303' },
          { name: 'Bir Hospital', distance: '1.8 km', specialty: 'General Hospital', contact: '+977-1-4221119' },
          { name: 'Grande International Hospital', distance: '4.2 km', specialty: 'Private Hospital', contact: '+977-1-5159266' }
        ],
        accommodations: [
          { name: 'Hotel Himalaya', type: 'Luxury', rating: 4.5, price: 'NPR 8,000-15,000', amenities: ['WiFi', 'Restaurant', 'Spa'] },
          { name: 'Thamel Backpackers', type: 'Budget', rating: 4.0, price: 'NPR 1,500-3,000', amenities: ['WiFi', 'Common Area'] },
          { name: 'Dwarika\'s Hotel', type: 'Heritage', rating: 4.8, price: 'NPR 25,000-40,000', amenities: ['Pool', 'Spa', 'Cultural Tours'] }
        ],
        heritage: [
          { name: 'Kathmandu Durbar Square', type: 'UNESCO Site', fee: 'NPR 1,000', hours: '6 AM - 7 PM' },
          { name: 'Swayambhunath Stupa', type: 'Buddhist Temple', fee: 'NPR 200', hours: '5 AM - 9 PM' },
          { name: 'Pashupatinath Temple', type: 'Hindu Temple', fee: 'NPR 1,000', hours: '4 AM - 12 PM, 5 PM - 9 PM' }
        ]
      },
      pkr: {
        hospitals: [
          { name: 'Manipal Teaching Hospital', distance: '3.1 km', specialty: 'Multi-specialty', contact: '+977-61-526416' },
          { name: 'Western Regional Hospital', distance: '2.5 km', specialty: 'Government Hospital', contact: '+977-61-520066' }
        ],
        accommodations: [
          { name: 'Temple Tree Resort', type: 'Resort', rating: 4.6, price: 'NPR 12,000-22,000', amenities: ['Lake View', 'Spa', 'Adventure Sports'] },
          { name: 'Hotel Barahi', type: 'Luxury', rating: 4.4, price: 'NPR 9,000-18,000', amenities: ['Lake View', 'Restaurant', 'WiFi'] },
          { name: 'Backstreet Academy', type: 'Hostel', rating: 4.1, price: 'NPR 800-2,000', amenities: ['WiFi', 'Shared Kitchen'] }
        ],
        heritage: [
          { name: 'Phewa Lake', type: 'Natural Heritage', fee: 'Free', hours: '24 hours' },
          { name: 'Bindhyabasini Temple', type: 'Hindu Temple', fee: 'Free', hours: '5 AM - 9 PM' },
          { name: 'International Mountain Museum', type: 'Museum', fee: 'NPR 300', hours: '9 AM - 5 PM' }
        ]
      }
    };

    return data[locationId] || {
      hospitals: [
        { name: 'Local Health Post', distance: '1.5 km', specialty: 'Primary Care', contact: '+977-XX-XXXXXX' }
      ],
      accommodations: [
        { name: 'Local Guesthouse', type: 'Guesthouse', rating: 3.8, price: 'NPR 2,000-5,000', amenities: ['WiFi', 'Meals'] }
      ],
      heritage: [
        { name: 'Local Heritage Site', type: 'Cultural Site', fee: 'NPR 100', hours: '6 AM - 6 PM' }
      ]
    };
  };

  const locationData = getLocationBasedData(selectedLocation.id);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Services in {selectedLocation.name}
        </h2>
        <p className="text-gray-600">{selectedLocation.region}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Hospitals */}
        <Card className="shadow-lg">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center text-red-800">
              <Hospital className="mr-2 h-6 w-6" />
              Nearby Hospitals
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {locationData.hospitals.map((hospital: any, index: number) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">{hospital.name}</h4>
                  <p className="text-sm text-gray-600">{hospital.specialty}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-green-600">{hospital.distance}</span>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-1" />
                      <span className="text-xs">{hospital.contact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accommodations */}
        <Card className="shadow-lg">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center text-blue-800">
              <Hotel className="mr-2 h-6 w-6" />
              Accommodations
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {locationData.accommodations.map((hotel: any, index: number) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{hotel.name}</h4>
                    <Badge variant="outline">{hotel.type}</Badge>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-bold">{hotel.rating}</span>
                    </div>
                    <span className="text-sm text-green-600 font-bold">{hotel.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {hotel.amenities.map((amenity: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Heritage Sites */}
        <Card className="shadow-lg">
          <CardHeader className="bg-orange-50">
            <CardTitle className="flex items-center text-orange-800">
              <MapPin className="mr-2 h-6 w-6" />
              Heritage Sites
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {locationData.heritage.map((site: any, index: number) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{site.name}</h4>
                    <Badge variant="outline">{site.type}</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      <strong>Entry Fee:</strong> {site.fee}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Hours:</strong> {site.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
          View on Map
        </Button>
      </div>
    </div>
  );
};

export default LocationBasedServices;
