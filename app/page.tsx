import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center p-0 m-0 bg-gray-100 dark:bg-black">
      <div className="w-full h-full max-w-3xl bg-white dark:bg-[#0f0f0f] border-x border-gray-200 dark:border-white/10 shadow-2xl overflow-y-auto">
        <div className="min-h-full flex flex-col p-8 md:p-12">
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
