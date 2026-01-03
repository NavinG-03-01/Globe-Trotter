import { Calendar, MapPin, Wallet, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Trip {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  destinations: string[];
  coverImage: string;
  budget: number;
  status: "upcoming" | "draft" | "completed";
}

interface TripCardProps {
  trip: Trip;
}

const statusConfig = {
  upcoming: { label: "Upcoming", className: "bg-globe-teal/10 text-globe-teal" },
  draft: { label: "Draft", className: "bg-globe-gold/10 text-globe-gold" },
  completed: { label: "Completed", className: "bg-muted text-muted-foreground" },
};

const TripCard = ({ trip }: TripCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getDaysUntil = (dateString: string) => {
    const today = new Date();
    const tripDate = new Date(dateString);
    const diffTime = tripDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntil = getDaysUntil(trip.startDate);
  const status = statusConfig[trip.status];

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={trip.coverImage}
          alt={trip.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${status.className}`}>
          {status.label}
        </div>

        {/* Days Until */}
        {trip.status === "upcoming" && daysUntil > 0 && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
            {daysUntil} days away
          </div>
        )}

        {/* Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="w-4 h-4 mr-2" />
              Edit Trip
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 line-clamp-1">
          {trip.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {trip.description}
        </p>

        {/* Destinations */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
          <span className="text-sm text-foreground line-clamp-1">
            {trip.destinations.join(" → ")}
          </span>
        </div>

        {/* Date & Budget */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>
              {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-foreground">
            <Wallet className="w-4 h-4 text-accent" />
            ${trip.budget.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
