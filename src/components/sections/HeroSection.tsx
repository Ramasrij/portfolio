import { motion } from "framer-motion";
import { ArrowRight, Terminal, Braces, Cpu } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-foreground"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      {/* Floating code blocks */}
      <motion.div
        className="absolute right-0 top-8 glass-subtle rounded-xl p-4 hidden lg:block max-w-[240px] font-mono text-[11px] text-muted-foreground/70 leading-relaxed"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
        </div>
        <span className="text-primary/60">const</span> dev = {"{"}<br />
        &nbsp;&nbsp;name: <span className="text-emerald-400/80">"Ramashree"</span>,<br />
        &nbsp;&nbsp;role: <span className="text-emerald-400/80">"Frontend Dev"</span>,<br />
        &nbsp;&nbsp;passion: <span className="text-emerald-400/80">"UI/UX"</span><br />
        {"}"};
      </motion.div>

      <motion.div
        className="absolute right-12 bottom-16 glass-subtle rounded-xl p-3 hidden lg:block font-mono text-[10px] text-muted-foreground/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-primary/50">npm run</span> build ✓
      </motion.div>

      <div className="w-full space-y-8 relative z-10">
        {/* Top line with icon */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="glass p-2 rounded-lg">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary/40 to-transparent" />
          <span className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
            Portfolio v2.0
          </span>
        </motion.div>

        {/* Name - large & bold */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wide">Hello, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-none">
            Rama
            {/* <br /> */}
            <span className="text-gradient"> Sri</span>
            <motion.span
              className="inline-block text-4xl md:text-5xl ml-3 origin-bottom-right"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 4 }}
            >
              ✦
            </motion.span>
          </h1>
        </motion.div>

        {/* Role with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
            Frontend Developer
          </h2>
          <motion.div
            className="h-px bg-muted-foreground/30 hidden sm:block"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed"
        >
          Crafting pixel-perfect interfaces with{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span> &{" "}
          <span className="text-foreground font-medium">Tailwind CSS</span>.
          Turning ideas into elegant, performant web experiences.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-8"
        >
          {[
            { value: "5+", label: "Projects" },
            { value: "6+", label: "Months Exp" },
            { value: "100%", label: "Passion" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3"
        >
          {[Braces, Cpu, Terminal].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="glass p-2.5 rounded-xl"
            >
              <Icon className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          ))}
          <span className="text-xs text-muted-foreground/40 ml-2 font-mono">
            react · ts · tailwind
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 pt-4"
        >
          <button
            onClick={() => onNavigate("projects")}
            className="glass-strong group px-8 py-4 rounded-2xl text-sm font-semibold text-foreground hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            Explore Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="glass-subtle px-8 py-4 rounded-2xl text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            Say Hello
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
