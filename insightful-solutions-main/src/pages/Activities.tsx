import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Compass, Camera, Utensils, Mountain, Palette, Music } from "lucide-react";

const activities = [
  { icon: Compass, name: "Sightseeing", count: 1250, description: "Famous landmarks and hidden gems" },
  { icon: Camera, name: "Photography Tours", count: 340, description: "Capture perfect moments" },
  { icon: Utensils, name: "Food & Dining", count: 890, description: "Local cuisine and fine dining" },
  { icon: Mountain, name: "Adventure", count: 560, description: "Hiking, diving, and thrills" },
  { icon: Palette, name: "Art & Culture", count: 420, description: "Museums and galleries" },
  { icon: Music, name: "Entertainment", count: 380, description: "Shows, concerts, and nightlife" },
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Discover <span className="text-accent">Activities</span>
            </h1>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              Find amazing experiences and activities for every destination.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <div key={activity.name} className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-soft hover:shadow-elevated transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <activity.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{activity.name}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <span className="text-sm text-accent font-medium">{activity.count}+ activities</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="accent" size="lg" asChild>
                <Link to="/explore">Explore Destinations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Activities;
