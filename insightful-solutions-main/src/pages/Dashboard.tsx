import { useState } from "react";
import { Plus, Search, Calendar, MapPin, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CreateTripDialog from "@/components/trips/CreateTripDialog";
import TripCard from "@/components/trips/TripCard";

// Sample trip data
const sampleTrips = [
  {
    id: "1",
    name: "European Adventure",
    description: "A dream tour through iconic European cities",
    startDate: "2025-06-15",
    endDate: "2025-07-01",
    destinations: ["Paris", "Rome", "Barcelona"],
    coverImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    budget: 5500,
    status: "upcoming" as const,
  },
  {
    id: "2",
    name: "Japan Explorer",
    description: "Discovering the Land of the Rising Sun",
    startDate: "2025-09-10",
    endDate: "2025-09-25",
    destinations: ["Tokyo", "Kyoto", "Osaka"],
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    budget: 4200,
    status: "draft" as const,
  },
  {
    id: "3",
    name: "Bali Retreat",
    description: "A week of relaxation and adventure",
    startDate: "2024-12-01",
    endDate: "2024-12-08",
    destinations: ["Ubud", "Seminyak", "Nusa Penida"],
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    budget: 2800,
    status: "completed" as const,
  },
];

const Dashboard = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const upcomingTrips = sampleTrips.filter((trip) => trip.status === "upcoming");
  const draftTrips = sampleTrips.filter((trip) => trip.status === "draft");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome Back, Traveler!
              </h1>
              <p className="text-muted-foreground">
                Ready to plan your next adventure?
              </p>
            </div>
            <Button variant="accent" size="lg" onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="w-5 h-5" />
              Create New Trip
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{upcomingTrips.length}</p>
                  <p className="text-sm text-muted-foreground">Upcoming Trips</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-globe-teal/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-globe-teal" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">7</p>
                  <p className="text-sm text-muted-foreground">Cities Visited</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-globe-gold/10 flex items-center justify-center">
                  <Edit className="w-6 h-6 text-globe-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{draftTrips.length}</p>
                  <p className="text-sm text-muted-foreground">Draft Plans</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Completed Trips</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Trips Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Upcoming Trips
              </h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            
            {upcomingTrips.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card rounded-xl border border-border">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">No upcoming trips yet</p>
                <Button variant="accent" onClick={() => setIsCreateDialogOpen(true)}>
                  Plan Your First Trip
                </Button>
              </div>
            )}
          </section>

          {/* Draft Trips Section */}
          {draftTrips.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Continue Planning
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {draftTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />

      <CreateTripDialog 
        open={isCreateDialogOpen} 
        onOpenChange={setIsCreateDialogOpen} 
      />
    </div>
  );
};

export default Dashboard;
