
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

const CulturalHeritage = () => {
  const heritageSites = [
    {
      name: 'Kathmandu Durbar Square',
      location: 'Kathmandu',
      description: 'Historic palace complex with stunning architecture',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3',
      type: 'UNESCO World Heritage',
      entryFee: 'NPR 1000 (Foreigners)'
    },
    {
      name: 'Swayambhunath Stupa',
      location: 'Kathmandu',
      description: 'Ancient Buddhist stupa also known as Monkey Temple',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3',
      type: 'UNESCO World Heritage',
      entryFee: 'NPR 200'
    },
    {
      name: 'Pashupatinath Temple',
      location: 'Kathmandu',
      description: 'Sacred Hindu temple dedicated to Lord Shiva',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3',
      type: 'UNESCO World Heritage',
      entryFee: 'NPR 1000 (Foreigners)'
    },
    {
      name: 'Boudhanath Stupa',
      location: 'Kathmandu',
      description: 'One of the largest Buddhist stupas in the world',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3',
      type: 'UNESCO World Heritage',
      entryFee: 'NPR 400'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural Heritage Sites</h2>
          <p className="text-xl text-gray-600">Explore Nepal's rich cultural treasures</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {heritageSites.map((site, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${site.image})` }} />
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">{site.name}</CardTitle>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    {site.type}
                  </Badge>
                </div>
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {site.location}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{site.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-green-600">Entry Fee: {site.entryFee}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritage;
