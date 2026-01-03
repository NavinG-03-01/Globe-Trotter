import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-lg text-accent-foreground/80">Last updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-6">We collect information you provide directly, such as account details, trip information, and preferences to enhance your travel planning experience.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-6">Your information helps us provide personalized recommendations, improve our services, and communicate important updates about your trips.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-6">We implement industry-standard security measures to protect your personal information and trip data from unauthorized access.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-6">You have the right to access, update, or delete your personal information at any time through your account settings.</p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">If you have questions about this policy, please contact us at privacy@globetrotter.com</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
