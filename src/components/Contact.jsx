import { motion } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { contacts } from '../data/portfolio';

function Contact() {
  return (
    <section id="contact" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s connect for Python, Django, or product engineering opportunities."
        description="The section below is set up for recruiters and hiring managers to reach out quickly across the most relevant professional channels."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400/15 text-brand-100">
            <Send size={24} />
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold text-white">
            Ready for the next strong opportunity
          </h3>
          <p className="mt-4 leading-7 text-slate-300">
            I’m interested in backend and full-stack roles where I can contribute to
            scalable products, workflow systems, and high-quality engineering practices.
          </p>
          <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-200">
              Preferred Base
            </p>
            <p className="mt-2 text-lg font-semibold text-white">Chennai, India</p>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith('http');

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel flex items-center justify-between gap-4 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{contact.label}</p>
                    <p className="mt-1 font-medium text-white">{contact.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="shrink-0 text-slate-400" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
