import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import parisImage from "@/assets/destination-paris.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import newyorkImage from "@/assets/destination-newyork.jpg";

const destinations = [
  { name: "Paris", country: "France", image: parisImage, trips: 2847, costIndex: "$$", description: "City of Light and romance" },
  { name: "Tokyo", country: "Japan", image: tokyoImage, trips: 1923, costIndex: "$$$", description: "Where tradition meets future" },
  { name: "Bali", country: "Indonesia", image: baliImage, trips: 3156, costIndex: "$", description: "Island of the Gods" },
  { name: "New York", country: "USA", image: newyorkImage, trips: 4201, costIndex: "$$$", description: "The city that never sleeps" },
  { name: "London", country: "UK", image: parisImage, trips: 3542, costIndex: "$$$", description: "Royal heritage and modern vibes" },
  { name: "Barcelona", country: "Spain", image: tokyoImage, trips: 2103, costIndex: "$$", description: "Art, architecture, and beaches" },
  { name: "Sydney", country: "Australia", image: baliImage, trips: 1876, costIndex: "$$$", description: "Harbor city paradise" },
  { name: "Dubai", country: "UAE", image: newyorkImage, trips: 2654, costIndex: "$$$$", description: "Luxury in the desert" },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Explore <span className="text-accent">Destinations</span>
            </h1>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              Discover amazing places around the world and start planning your next adventure.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search destinations..." 
                className="pl-12 pr-4 py-6 text-lg rounded-full border-accent/30 bg-background/80 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination) => (
                <Link
                  key={destination.name}
                  to={`/destination/${destination.name.toLowerCase()}`}
                  className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="aspect-[4/5] relative">
                    <img
                      src={destination.image}
                      alt={`${destination.name}, ${destination.country}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-full bg-accent-foreground/20 backdrop-blur-sm text-xs font-medium text-accent-foreground">
                        {destination.costIndex}
                      </span>
                      <span className="text-xs text-accent-foreground/70">
                        {destination.trips.toLocaleString()} trips
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-accent-foreground mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-accent-foreground/80">{destination.country}</p>
                    <p className="text-xs text-accent-foreground/60 mt-1">{destination.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
