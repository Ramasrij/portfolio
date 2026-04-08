import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend Basics",
    skills: [
      { name: "PHP", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "REST APIs", level: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "XAMPP", level: 75 },
    ],
  },
];

const getLevel = (level: number) => {
  if (level >= 85) return { text: "Advanced", color: "text-green-400 bg-green-500/10 border-green-500/20" };
  if (level >= 75) return { text: "Intermediate", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" };
  return { text: "Beginner", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" };
};

const SkillsSection = () => {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">Skills</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Here are the technologies and tools I use to build responsive and scalable web applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
            className="glass rounded-2xl p-6 space-y-5 group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-1">
              <div
                className="h-8 w-1 rounded-full"
                style={{
                  background: "linear-gradient(180deg, hsl(215 80% 55%), hsl(280 60% 55%))",
                }}
              />
              <h3 className="font-semibold text-foreground text-lg">{category.title}</h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, si) => {
                const levelData = getLevel(skill.level);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.06 }}
                    className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-secondary/40 hover:bg-secondary/70 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Dot indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.06 + 0.2 }}
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          background: "linear-gradient(135deg, hsl(215 80% 55%), hsl(280 60% 55%))",
                        }}
                      />
                      <span className="text-foreground text-sm font-medium truncate">{skill.name}</span>
                    </div>

                    <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${levelData.color}`}>
                      {levelData.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Category progress summary */}
            <div className="pt-2 border-t border-border/50">
              <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                <span>Overall</span>
                <span>
                  {Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length)}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length)}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: ci * 0.2 }}
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, hsl(215 80% 55%), hsl(280 60% 55%))",
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
