import StarBackground from "@/components/StarBackground";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main content */}

      {/* Footer */}
    </div>
  );
};

export default Home;
