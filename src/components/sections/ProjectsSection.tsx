import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectFakereview from "@/assets/project-fakereview.jpg";
import projectUsermgmt from "@/assets/project-usermgmt.jpg";
import projectTictactoe from "@/assets/project-tictactoe.jpg";
import projectAuth from "@/assets/project-auth.jpg";
import projectMoodMirror from "@/assets/mood-emotions.png";

const projects = [
  {
    title: "E-Commerce Web App",
    category: "Frontend Development",
    description:
      "Developed a responsive e-commerce application using React and TypeScript with reusable components and light/dark theme support.",
    image: projectEcommerce,
    color: "from-blue-400/20 to-cyan-400/10",
    link: "https://ecommercestore-liard.vercel.app/",
  },
  {
    title: "Fake Review Detection",
    category: "Machine Learning",
    description:
      "Built an AI-based system to detect fake and genuine reviews using machine learning techniques and text analysis.",
    image: projectFakereview,
    color: "from-violet-400/20 to-pink-400/10",
    link: "https://github.com/Ramasrij/fake-review-prediction",
  },
  // {
  //   title: "User Management System",
  //   category: "Web Development",
  //   description:
  //     "Created a CRUD application using PHP and MySQL to manage user data with add, edit, delete and view functionalities.",
  //   image: projectUsermgmt,
  //   color: "from-emerald-400/20 to-teal-400/10",
  //   link: "https://ramasrij.github.io/gamepro/",
  // },
  {
    title: "Tic Tac Toe Game",
    category: "Web Development",
    description:
      "Built an interactive Tic Tac Toe game using HTML, CSS and JavaScript with dynamic gameplay, win detection and a clean responsive UI.",
    image: projectTictactoe,
    color: "from-rose-400/20 to-red-400/10",
    link: "https://ramasrij.github.io/gamepro/",
  },
  {
    title: "Authentication UI",
    category: "Frontend Development",
    description:
      "Designed and developed a responsive sign-in page using TypeScript with form validation and clean UI design.",
    image: projectAuth,
    color: "from-amber-400/20 to-orange-400/10",
    link: "https://signin-five.vercel.app/",
  },
  {
    title: "Mood Mirror",
    category: "Web Development",
    description:
      "Created a browser-based mood detection app that analyzes typing speed and mouse behavior patterns, rendering 4 dynamic UI themes in real-time for an interactive user experience.",
    image: projectMoodMirror,
    color: "from-purple-400/20 to-pink-400/10",
    link: "https://ramasrij.github.io/mood-mirror/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
        <p className="text-muted-foreground">Selected work from recent years.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
          >
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500`} />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-20 glass-strong p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="w-4 h-4 text-foreground" />
              </a>
              {/* <div className="absolute top-3 right-3 z-20 glass-strong p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <ExternalLink className="w-4 h-4 text-foreground" />
              </div> */}
            </div>

            <div className="p-5 space-y-3">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="font-bold text-foreground text-lg leading-tight">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
