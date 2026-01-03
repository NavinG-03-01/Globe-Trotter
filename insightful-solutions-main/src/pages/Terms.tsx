import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Terms of <span className="text-accent">Service</span>
            </h1>
            <p className="text-lg text-accent-foreground/80">Last updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">By using GlobeTrotter, you agree to these terms. Please read them carefully before using our services.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Use of Services</h2>
              <p className="text-muted-foreground mb-6">You may use our services for personal, non-commercial travel planning. You're responsible for maintaining the security of your account.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">User Content</h2>
              <p className="text-muted-foreground mb-6">You retain ownership of your trip plans and content. By sharing publicly, you grant us permission to display your content to other users.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Limitations</h2>
              <p className="text-muted-foreground mb-6">GlobeTrotter provides planning tools and information but is not responsible for actual travel arrangements or third-party services.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">We may update these terms periodically. Continued use of our services constitutes acceptance of any changes.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
