import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, Download } from "lucide-react";

const education = [
  {
    degree: "B.E Computer Science and Engineering",
    school: "SCAD College of Engineering and Technology",
    year: "2021 — 2025 | CGPA: 8.01",
  },
  {
    degree: "HSC",
    school: "Bharathiyar Government Higher Secondary School",
    year: "2020 — 2021 | 81%",
  },
  {
    degree: "SSLC",
    school: "Bharathiyar Government Higher Secondary School",
    year: "2018 — 2019 | 69%",
  },
];

const certifications = [
  "HTML for Beginners",
  "UI/UX for Beginners",
  "Programming in Java",
  "Paper Presentation - Blue Eye Technology",
];

const languages = [
  { name: "English", level: "Professional" },
  { name: "Sourashtra", level: "Native" },
  { name: "Tamil", level: "Native" },
];

const ResumeSection = () => {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between gap-4 flex-wrap"
      >
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Resume</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Education, certifications, and more at a glance.
          </p>
        </div>

        {/* <Download className="w-4 h-4" />
          Download CV */}
        <a
          href="/ramasrij-resume1.pdf"
          download
          className="glass-strong px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>

      </motion.div>


      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass rounded-2xl p-6 space-y-4"
      >
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <GraduationCap className="w-5 h-5" />
          Education
        </div>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.degree} className="space-y-0.5">
              <h4 className="text-sm font-medium text-foreground">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground">{edu.school}</p>
              <p className="text-xs text-muted-foreground/60">{edu.year}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="glass rounded-2xl p-6 space-y-4"
      >
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Languages className="w-5 h-5" />
          Languages
        </div> 
        <div className="space-y-3">
          {languages.map((lang) => (
            <div key={lang.name} className="flex justify-between text-sm">
              <span className="text-foreground">{lang.name}</span>
              <span className="text-muted-foreground">{lang.level}</span>
            </div>
          ))}
        </div>
      </motion.div>


      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="glass rounded-2xl p-6 space-y-4"
      >
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Award className="w-5 h-5" />
          Certifications
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert} className="glass-subtle rounded-xl px-4 py-3 text-sm text-foreground">
              {cert}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
