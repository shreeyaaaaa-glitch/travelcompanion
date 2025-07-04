
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin } from 'lucide-react';

export interface Location {
  id: string;
  name: string;
  region: string;
  coordinates: { lat: number; lng: number };
}

interface LocationSelectorProps {
  onLocationSelect: (location: Location) => void;
  selectedLocation: Location | null;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ onLocationSelect, selectedLocation }) => {
  const nepalLocations: Location[] = [
    { id: 'ktm', name: 'Kathmandu', region: 'Bagmati Province', coordinates: { lat: 27.7172, lng: 85.3240 } },
    { id: 'pkr', name: 'Pokhara', region: 'Gandaki Province', coordinates: { lat: 28.2096, lng: 83.9856 } },
    { id: 'cht', name: 'Chitwan', region: 'Bagmati Province', coordinates: { lat: 27.5291, lng: 84.3542 } },
    { id: 'lmb', name: 'Lumbini', region: 'Lumbini Province', coordinates: { lat: 27.4833, lng: 83.2833 } },
    { id: 'ebc', name: 'Everest Base Camp Region', region: 'Province No. 1', coordinates: { lat: 27.9881, lng: 86.9250 } },
    { id: 'anp', name: 'Annapurna Region', region: 'Gandaki Province', coordinates: { lat: 28.5965, lng: 83.8202 } },
    { id: 'mst', name: 'Mustang', region: 'Gandaki Province', coordinates: { lat: 28.7833, lng: 83.8833 } },
    { id: 'ban', name: 'Bandipur', region: 'Gandaki Province', coordinates: { lat: 27.9317, lng: 84.4206 } },
    { id: 'grk', name: 'Gorkha', region: 'Gandaki Province', coordinates: { lat: 28.0000, lng: 84.6333 } },
    { id: 'nag', name: 'Nagarkot', region: 'Bagmati Province', coordinates: { lat: 27.7167, lng: 85.5167 } }
  ];

  const handleLocationChange = (locationId: string) => {
    const location = nepalLocations.find(loc => loc.id === locationId);
    if (location) {
      onLocationSelect(location);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <CardTitle className="flex items-center text-lg">
          <MapPin className="mr-2 h-5 w-5" />
          Select Your Location
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Select onValueChange={handleLocationChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a city or region in Nepal" />
          </SelectTrigger>
          <SelectContent>
            {nepalLocations.map((location) => (
              <SelectItem key={location.id} value={location.id}>
                <div className="flex flex-col">
                  <span className="font-medium">{location.name}</span>
                  <span className="text-sm text-gray-500">{location.region}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {selectedLocation && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Selected:</strong> {selectedLocation.name}, {selectedLocation.region}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LocationSelector;
