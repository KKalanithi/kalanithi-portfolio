import { motion } from 'framer-motion';
import { CalendarRange, CircleDot } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolio';

function Experience() {
  return (
    <section id="experience" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience delivering compliance and workflow-heavy applications."
        description="A focused snapshot of the role, impact, and backend contributions that define the current stage of my career."
      />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="mt-12 glass-panel p-8 sm:p-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              {experience.company}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white">
              {experience.role}
            </h3>
          </div>

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <CalendarRange size={16} className="mr-2 text-brand-300" />
            {experience.duration}
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {experience.achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4"
            >
              <CircleDot size={18} className="mt-1 shrink-0 text-brand-300" />
              <p className="leading-7 text-slate-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
