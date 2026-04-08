import { motion } from "framer-motion";
import { Code, Layout, Database, Wrench } from "lucide-react";

const skills = [
  {
    icon: Code,
    label: "Frontend Development",
    desc: "React, TypeScript, JavaScript",
  },
  {
    icon: Layout,
    label: "UI Development",
    desc: "HTML, CSS, Tailwind CSS",
  },
  {
    icon: Database,
    label: "Backend Basics",
    desc: "PHP, MySQL",
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    desc: "Git, GitHub, VS Code",
  },
];

const AboutSection = () => {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">
          About Me
        </h2>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I’m a passionate Frontend Developer with experience in building
          responsive and scalable web applications using React, TypeScript
          and Tailwind CSS. I enjoy turning ideas into real-world applications
          and continuously learning new technologies to improve my skills.
        </p>

        {/* Optional extra line */}
        <p className="text-sm text-muted-foreground mt-2">
          Aspiring Software Developer aiming to build impactful applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass rounded-2xl p-5 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="glass-strong p-3 rounded-xl">
              <skill.icon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                {skill.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;