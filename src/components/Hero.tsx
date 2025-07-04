
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3')"
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Travel <span className="text-yellow-300">Companion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Your Complete Guide to Safe & Cultural Tourism in the Himalayas
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-scale-in"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency Help
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30 px-8 py-4 text-lg animate-scale-in"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explore Heritage
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg animate-scale-in"
            >
              <Heart className="mr-2 h-5 w-5" />
              Find Guides
            </Button>
          </div>

          <div className="text-sm opacity-75">
            🏔️ Safe Travel • 🏛️ Cultural Heritage • 🧭 Licensed Guides • 💱 Currency Help
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
