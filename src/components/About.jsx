import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { highlights } from '../data/portfolio';

function About() {
  return (
    <section id="about" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="About Me"
        title="Backend-focused development with strong enterprise domain experience."
        description="I design dependable business applications that balance performance, maintainability, and smooth user workflows."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="glass-panel p-8 sm:p-10"
        >
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            I am Kalanithi K, a Python Developer with 3 years of experience building
            enterprise-grade web applications using Django and MySQL. My work focuses on
            translating complex business processes into scalable systems that support
            compliance, governance, and operational efficiency.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            I have hands-on experience developing workflow-driven applications such as
            Document Management Systems, CAPA, Risk Management, Audit Management,
            Non-Conformance, Complaint Management, and Training modules. I enjoy shaping
            robust backend architectures, improving SQL performance, building REST APIs,
            and adding frontend interactivity with JavaScript, jQuery, HTML, CSS, and
            Bootstrap where it creates a better user experience.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            My approach combines clean code, dependable database design, and practical UI
            thinking to deliver recruiter-friendly results for both users and businesses.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/15 text-brand-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
