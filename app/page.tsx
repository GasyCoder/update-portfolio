import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center p-0 m-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300">
      <div className="w-full h-full max-w-6xl bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-sm border-x border-gray-200/50 dark:border-white/10 shadow-2xl overflow-y-auto transition-all duration-300">
        <div className="min-h-full flex flex-col p-8 md:p-16 lg:p-20">
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
