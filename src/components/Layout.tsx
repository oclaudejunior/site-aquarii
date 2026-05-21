import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col relative bg-background">
    <Header />
    <main className="flex-1 relative z-10">{children}</main>
    <Footer />
    <StickyCTA />
  </div>
);

export default Layout;
