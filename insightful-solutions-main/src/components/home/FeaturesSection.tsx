import { MapPin, CalendarDays, Wallet, Share2, Compass, Clock } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Multi-City Itineraries",
    description: "Seamlessly plan trips across multiple destinations with our intuitive stop-by-stop builder.",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description: "Visualize your journey with interactive calendars and timeline views for perfect timing.",
  },
  {
    icon: Wallet,
    title: "Budget Tracking",
    description: "Automatic cost breakdowns by transport, stay, activities, and meals to stay on budget.",
  },
  {
    icon: Compass,
    title: "Discover Activities",
    description: "Browse curated activities and experiences for each destination, from local gems to popular attractions.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Edit and reorder your plans on-the-go with drag-and-drop simplicity.",
  },
  {
    icon: Share2,
    title: "Share & Inspire",
    description: "Share your itineraries publicly or with friends. Let others copy and remix your adventures.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-globe-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Why GlobeTrotter
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-accent">Plan Perfectly</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From dreaming to doing, our comprehensive tools make travel planning 
            as exciting as the journey itself.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
