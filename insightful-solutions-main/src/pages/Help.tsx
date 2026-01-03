import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search, Book, MessageCircle, Video, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const helpCategories = [
  { icon: Book, title: "Getting Started", description: "Learn the basics of planning your first trip", link: "/faq" },
  { icon: MessageCircle, title: "FAQs", description: "Find answers to common questions", link: "/faq" },
  { icon: Video, title: "Video Tutorials", description: "Watch step-by-step guides", link: "/faq" },
  { icon: FileText, title: "Documentation", description: "Detailed guides and resources", link: "/faq" },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Help <span className="text-accent">Center</span>
            </h1>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              How can we help you today?
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search for help..." className="pl-12 pr-4 py-6 text-lg rounded-full border-accent/30 bg-background/80 backdrop-blur-sm" />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category) => (
                <Link key={category.title} to={category.link} className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-elevated transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;
