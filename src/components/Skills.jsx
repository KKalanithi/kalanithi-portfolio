import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/portfolio';

function Skills() {
  return (
    <section id="skills" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack toolkit centered around Python, Django, and efficient data systems."
        description="Organized across frontend, backend, database, and collaboration tools for a polished technical snapshot."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel group p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-cyan-300/10 text-brand-100 transition duration-300 group-hover:scale-105">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                {category.title}
              </h3>
              <div className="mt-5 space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <CheckCircle2 size={18} className="text-brand-300" />
                    <span className="text-sm font-medium text-slate-200">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
