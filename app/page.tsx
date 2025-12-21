import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-[#05060a] transition-colors">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/50 via-indigo-200/40 to-transparent blur-3xl dark:from-indigo-600/20 dark:via-sky-500/15" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-200/60 via-sky-200/40 to-transparent blur-3xl dark:from-purple-700/20 dark:via-blue-600/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] opacity-60 [background-size:48px_48px] dark:bg-[radial-gradient(circle_at_1px_1px,#111827_1px,transparent_0)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl px-6 pb-16 pt-10 md:px-8 md:pt-14">
        <div className="flex w-full flex-col gap-12 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-lg dark:border-white/5 dark:bg-white/5 dark:shadow-none md:p-10">
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
