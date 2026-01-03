import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, Star, Clock } from "lucide-react";
import parisImage from "@/assets/destination-paris.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import newyorkImage from "@/assets/destination-newyork.jpg";

const destinationsData: Record<string, any> = {
  paris: { name: "Paris", country: "France", image: parisImage, trips: 2847, costIndex: "$$", bestTime: "Apr - Jun", avgDays: 5, rating: 4.8 },
  tokyo: { name: "Tokyo", country: "Japan", image: tokyoImage, trips: 1923, costIndex: "$$$", bestTime: "Mar - May", avgDays: 7, rating: 4.9 },
  bali: { name: "Bali", country: "Indonesia", image: baliImage, trips: 3156, costIndex: "$", bestTime: "Apr - Oct", avgDays: 10, rating: 4.7 },
  "new york": { name: "New York", country: "USA", image: newyorkImage, trips: 4201, costIndex: "$$$", bestTime: "Sep - Nov", avgDays: 4, rating: 4.6 },
  london: { name: "London", country: "UK", image: parisImage, trips: 3542, costIndex: "$$$", bestTime: "May - Sep", avgDays: 5, rating: 4.7 },
  barcelona: { name: "Barcelona", country: "Spain", image: tokyoImage, trips: 2103, costIndex: "$$", bestTime: "May - Jun", avgDays: 4, rating: 4.8 },
  sydney: { name: "Sydney", country: "Australia", image: baliImage, trips: 1876, costIndex: "$$$", bestTime: "Sep - Nov", avgDays: 7, rating: 4.7 },
  dubai: { name: "Dubai", country: "UAE", image: newyorkImage, trips: 2654, costIndex: "$$$$", bestTime: "Nov - Mar", avgDays: 5, rating: 4.6 },
};

const Destination = () => {
  const { name } = useParams();
  const destination = destinationsData[name?.toLowerCase() || ""] || destinationsData.paris;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="container mx-auto">
              <Link to="/explore" className="inline-flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Explore
              </Link>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-2">
                {destination.name}
              </h1>
              <p className="text-xl text-accent-foreground/80 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {destination.country}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{destination.trips.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Trips Created</div>
              </div>
              <div className="text-center">
                <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{destination.costIndex}</div>
                <div className="text-sm text-muted-foreground">Cost Index</div>
              </div>
              <div className="text-center">
                <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{destination.bestTime}</div>
                <div className="text-sm text-muted-foreground">Best Time to Visit</div>
              </div>
              <div className="text-center">
                <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{destination.avgDays} days</div>
                <div className="text-sm text-muted-foreground">Avg. Stay</div>
              </div>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ready to visit {destination.name}?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/dashboard">Start Planning Trip</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/explore">Explore More Destinations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destination;
