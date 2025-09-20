import Cities from "./components/Cities";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Cities />
      <Testimonials />
    </main>
  );
}
