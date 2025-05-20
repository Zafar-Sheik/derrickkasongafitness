// app/page.tsx
import { HeroSection } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Philosophy } from "./components/Philosophy";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Journey />
      <Philosophy />
      <Testimonials />
      <Contact />
    </>
  );
}
