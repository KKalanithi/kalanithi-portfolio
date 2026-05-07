import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

function Projects() {
  return (
    <section id="projects" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Projects"
        title="Selected enterprise application modules built for structured business workflows."
        description="These cards highlight the kind of systems I have worked on, with emphasis on workflow clarity, maintainable architecture, and data-heavy operations."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-panel group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/10 via-transparent to-transparent opacity-60 transition duration-300 group-hover:opacity-90" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400/15 text-brand-100">
                    <Icon size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button px-4 py-2 text-xs"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button px-4 py-2 text-xs"
                    >
                      <ArrowUpRight size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-brand-400/25 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
