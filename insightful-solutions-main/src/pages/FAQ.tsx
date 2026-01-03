import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I create my first trip?", a: "Click on 'Start Planning Free' or go to your Dashboard and click 'Create New Trip'. Fill in your trip details and start adding destinations!" },
  { q: "Is GlobeTrotter free to use?", a: "Yes! GlobeTrotter offers a free tier with all essential features. Premium features are available for power users." },
  { q: "Can I share my trips with friends?", a: "Absolutely! You can share your itineraries publicly or with specific friends. They can view, copy, or remix your plans." },
  { q: "How does budget tracking work?", a: "Our smart budget tracker automatically categorizes expenses by transport, accommodation, activities, and meals. You can set daily limits and get alerts." },
  { q: "Can I use GlobeTrotter offline?", a: "Yes, you can download your itineraries for offline access. Any changes will sync when you're back online." },
  { q: "How do I add multiple destinations to one trip?", a: "In the trip editor, simply click 'Add Destination' to add new cities or locations to your itinerary. You can reorder them anytime." },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              Find quick answers to common questions about GlobeTrotter.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
