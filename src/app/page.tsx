import { CalendlySection } from "@/components/CalendlySection";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { YouTubeSection } from "@/components/YouTubeSection";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-12 md:px-10">
      <Hero />
      <YouTubeSection />
      <ContactForm />
      <CalendlySection />
    </main>
  );
}
