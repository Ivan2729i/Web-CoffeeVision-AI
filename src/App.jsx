import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Hardware from "./components/Hardware";
import Software from "./components/Software";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#fbf7f2] text-[#2b1b13] overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Hardware />
      <Software />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
