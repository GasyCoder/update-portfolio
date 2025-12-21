import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-white dark:bg-[#0f0f0f] transition-colors">
      <div className="w-full h-full max-w-3xl mx-auto overflow-y-auto">
        <div className="min-h-full flex flex-col px-6 py-8 md:px-8 md:py-12">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
