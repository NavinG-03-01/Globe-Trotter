import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import parisImage from "@/assets/destination-paris.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import newyorkImage from "@/assets/destination-newyork.jpg";

const destinations = [
  {
    name: "Paris",
    country: "France",
    image: parisImage,
    trips: 2847,
    costIndex: "$$",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: tokyoImage,
    trips: 1923,
    costIndex: "$$$",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: baliImage,
    trips: 3156,
    costIndex: "$",
  },
  {
    name: "New York",
    country: "USA",
    image: newyorkImage,
    trips: 4201,
    costIndex: "$$$",
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Popular Destinations
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Trending Places to{" "}
              <span className="text-accent">Explore</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto" asChild>
            <Link to="/explore">
              View All Destinations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Destinations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Link
              to={`/destination/${destination.name.toLowerCase()}`}
              key={destination.name}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] relative">
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              </div>

              {/* Content */}
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
                <p className="text-sm text-accent-foreground/80">
                  {destination.country}
                </p>
              </div>

              {/* Hover Action */}
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
