import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

function Resume() {
  return (
    <section id="resume" className="section-shell section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="glass-panel overflow-hidden"
      >
        <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <div>
            <span className="pill">Resume</span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
              Download my resume for a concise view of my experience and technical skills.
            </h2>
            {/* <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              The portfolio is now linked to `Kalanithi_resume.pdf`, so recruiters can
              download your uploaded resume directly from this section.
            </p> */}
          </div>

          <a href="/Kalanithi_resume.pdf" download className="primary-button">
            <FileText size={18} className="mr-2" />
            Download Resume
            <Download size={18} className="ml-2" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;
