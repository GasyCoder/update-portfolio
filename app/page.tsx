import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto bg-[#0f0f0f] border border-white/10 shadow-2xl">
        <div className="p-8 md:p-12">
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
