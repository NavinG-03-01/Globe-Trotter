import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Globe, Users, MapPin, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              About <span className="text-accent">GlobeTrotter</span>
            </h1>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              We're on a mission to make travel planning effortless and enjoyable for everyone.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                GlobeTrotter was born from a simple idea: travel planning should be as exciting as the journey itself. 
                We believe that everyone deserves the tools to create their perfect adventure, whether it's a weekend 
                getaway or a month-long expedition across continents.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our platform combines intuitive design with powerful features, allowing you to plan multi-city 
                itineraries, track budgets, discover activities, and share your plans with friends and fellow travelers.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">500+</h3>
                <p className="text-sm text-muted-foreground">Destinations</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">50K+</h3>
                <p className="text-sm text-muted-foreground">Happy Travelers</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">10K+</h3>
                <p className="text-sm text-muted-foreground">Trips Planned</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">4.9/5</h3>
                <p className="text-sm text-muted-foreground">User Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
