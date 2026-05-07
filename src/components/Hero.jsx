import { useEffect, useState } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';

const typingWords = [
  'Python Developer',
  'Django Specialist',
  'Enterprise App Builder',
];

function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId;

    if (!isDeleting && displayedText === currentWord) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1100);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
    } else {
      timeoutId = window.setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.slice(0, displayedText.length - 1)
          : currentWord.slice(0, displayedText.length + 1);

        setDisplayedText(nextText);
      }, isDeleting ? 45 : 95);
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayedText, isDeleting, wordIndex, words]);

  return displayedText;
}

function Hero() {
  const typedText = useTypingEffect(typingWords);

  return (
    <section id="home" className="section-shell section-spacing pt-10 sm:pt-16">
      <div className="glass-panel relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid opacity-95" />
        <div className="absolute -right-12 top-0 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid items-center gap-12 px-6 py-12 sm:px-10 md:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="pill">
              <Sparkles size={16} className="mr-2" />
              Open to product-focused opportunities
            </span>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              Hi, I&apos;m Kalanithi
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building reliable enterprise web experiences with clean backend engineering.........
            </h1>

            <div className="mt-6 flex min-h-[40px] items-center text-xl font-semibold text-brand-200 sm:text-2xl">
              <span>{typedText}</span>
              <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-brand-300" />
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              3 Years Experience in Enterprise Web Applications, specializing in Django,
              MySQL optimization, API-driven systems, and workflow-heavy business platforms.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="primary-button">
                View Projects
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="/Kalanithi_resume.pdf" download className="secondary-button">
                Download Resume
                <Download size={18} className="ml-2" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm animate-float overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/15 via-transparent to-cyan-400/10" />
              <img
                src="/profile-placeholder.svg"
                alt="Professional placeholder portrait for Kalanithi K"
                className="relative h-full w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/55 p-4 backdrop-blur-xl">
                <p className="text-sm text-brand-200">Current Role</p>
                <p className="mt-1 text-lg font-semibold text-white">Python Developer</p>
                <p className="mt-1 text-sm text-slate-300">Sugi Infotech • Madurai, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
