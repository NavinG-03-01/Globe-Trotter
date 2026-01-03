import { useState } from "react";
import { Plus, Search, Filter, Grid, List, Calendar, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CreateTripDialog from "@/components/trips/CreateTripDialog";
import TripCard from "@/components/trips/TripCard";

// Sample trip data
const allTrips = [
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
  {
    id: "4",
    name: "New York City Break",
    description: "The Big Apple in 5 days",
    startDate: "2025-03-20",
    endDate: "2025-03-25",
    destinations: ["Manhattan", "Brooklyn", "Queens"],
    coverImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    budget: 3200,
    status: "upcoming" as const,
  },
  {
    id: "5",
    name: "Thailand Adventure",
    description: "Beaches, temples, and street food",
    startDate: "2025-11-01",
    endDate: "2025-11-15",
    destinations: ["Bangkok", "Chiang Mai", "Phuket"],
    coverImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
    budget: 3500,
    status: "draft" as const,
  },
  {
    id: "6",
    name: "Greek Islands Hopping",
    description: "Sun, sea, and ancient history",
    startDate: "2024-08-10",
    endDate: "2024-08-20",
    destinations: ["Santorini", "Mykonos", "Athens"],
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
    budget: 4100,
    status: "completed" as const,
  },
];

const MyTrips = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredTrips = allTrips.filter((trip) => {
    const matchesSearch = trip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.destinations.some((dest) => dest.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === "all" || trip.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: allTrips.length,
    upcoming: allTrips.filter((t) => t.status === "upcoming").length,
    draft: allTrips.filter((t) => t.status === "draft").length,
    completed: allTrips.filter((t) => t.status === "completed").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                My Trips
              </h1>
              <p className="text-muted-foreground">
                Manage and organize all your travel plans in one place.
              </p>
            </div>
            <Button variant="accent" size="lg" onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="w-5 h-5" />
              New Trip
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === "all"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All ({stats.total})
            </button>
            <button
              onClick={() => setStatusFilter("upcoming")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === "upcoming"
                  ? "bg-globe-teal/20 text-globe-teal"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Upcoming ({stats.upcoming})
            </button>
            <button
              onClick={() => setStatusFilter("draft")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === "draft"
                  ? "bg-globe-gold/20 text-globe-gold"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Drafts ({stats.draft})
            </button>
            <button
              onClick={() => setStatusFilter("completed")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === "completed"
                  ? "bg-muted text-muted-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Completed ({stats.completed})
            </button>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search trips or destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trips Grid */}
          {filteredTrips.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "sm:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-2xl border border-border">
              <MapPin className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No trips found
              </h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || statusFilter !== "all"
                  ? "Try adjusting your search or filters."
                  : "Start planning your first adventure!"}
              </p>
              <Button variant="accent" onClick={() => setIsCreateDialogOpen(true)}>
                <Plus className="w-5 h-5" />
                Create Your First Trip
              </Button>
            </div>
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

export default MyTrips;
