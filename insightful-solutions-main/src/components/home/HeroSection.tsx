import { ArrowRight, MapPin, Calendar, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-santorini.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Santorini coastline at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[10%] w-20 h-20 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-[15%] w-32 h-32 bg-globe-gold/20 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">
              Plan your next adventure
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your Journey,{" "}
            <span className="relative">
              <span className="text-gradient bg-gradient-to-r from-globe-gold to-accent">Perfectly</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Planned
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Create personalized multi-city itineraries, discover amazing destinations, 
            estimate budgets, and share your travel plans with the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/dashboard">
                Start Planning Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/explore">Explore Destinations</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center">
              <MapPin className="w-5 h-5 text-accent mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-accent-foreground">500+</span>
              <span className="text-xs md:text-sm text-accent-foreground/70">Destinations</span>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-5 h-5 text-accent mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-accent-foreground">10K+</span>
              <span className="text-xs md:text-sm text-accent-foreground/70">Trips Created</span>
            </div>
            <div className="flex flex-col items-center">
              <Wallet className="w-5 h-5 text-accent mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-accent-foreground">$2M+</span>
              <span className="text-xs md:text-sm text-accent-foreground/70">Saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-accent-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
