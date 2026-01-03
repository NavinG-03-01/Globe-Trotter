import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  { id: 1, title: "Senior Frontend Developer", location: "Remote", type: "Full-time", department: "Engineering" },
  { id: 2, title: "Product Designer", location: "San Francisco, CA", type: "Full-time", department: "Design" },
  { id: 3, title: "Marketing Manager", location: "Remote", type: "Full-time", department: "Marketing" },
  { id: 4, title: "Customer Success Lead", location: "New York, NY", type: "Full-time", department: "Support" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              Help us build the future of travel planning. We're always looking for talented people.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                      </div>
                    </div>
                    <Button variant="accent">Apply Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
