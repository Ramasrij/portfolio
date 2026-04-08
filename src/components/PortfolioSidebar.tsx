import { User, Mail, Home, Layers, Briefcase, FileText, Code, Sparkles } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

interface PortfolioSidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

const PortfolioSidebar = ({ activeSection, onNavigate }: PortfolioSidebarProps) => {
  return (
    <aside className="hidden md:flex flex-col w-72 shrink-0 h-screen sticky top-0 p-4">
      <div className="glass rounded-2xl h-full flex flex-col p-5 gap-6">
        {/* Avatar & Name */}
        <div className="flex flex-col items-center gap-3 pt-4 pb-2">
          <div className="w-20 h-20 rounded-full overflow-hidden glass-strong p-1">
            <img
              src={avatarImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-foreground text-lg">Rama Sri J</h2>
            <p className="text-sm text-muted-foreground">Frontend Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "glass-strong text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Status */}
        <div className="glass-subtle rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
             Actively Seeking Roles
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PortfolioSidebar;
