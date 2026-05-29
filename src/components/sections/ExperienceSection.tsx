import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Technovation",
    period: "Mar 2023",
    desc: "Built responsive web pages using HTML, CSS and JavaScript. Gained hands-on experience in frontend development and UI design.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Neural Schema IT",
    period: "Jul 2024 — Aug 2024",
    desc: "Developed a responsive service-based web application using React, TypeScript and Tailwind CSS. Focused on clean UI design and responsiveness.",
  },
  
  {
    role: "Frontend Developer",
    company: "Vision Scematics Pvt Ltd",
    period: "Aug 2025 — Present",
    desc: "Developing and maintaining scalable frontend applications using React and TypeScript. Implementing dynamic UI components, role-based access control, and complex features such as project management views, settings modules, and dataset interfaces.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          6+ years of designing products people actually enjoy using.
        </p>
      </motion.div>

      <div className="relative space-y-6 pl-6 border-l border-border/50">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(1.5rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

            <div className="glass rounded-2xl p-5 space-y-2 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground glass-subtle px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
