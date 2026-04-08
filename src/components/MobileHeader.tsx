import { useState } from "react";
import { User, Mail, Home, Layers, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileHeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "contact", label: "Contact", icon: Mail },
];

const MobileHeader = ({ activeSection, onNavigate }: MobileHeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 p-3">
      <div className="glass-strong rounded-2xl px-4 py-3 flex items-center justify-between">
        <span className="font-semibold text-foreground">Alex Morgan</span>
        <button onClick={() => setOpen(!open)} className="text-foreground p-1">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong rounded-2xl mt-2 p-2 flex flex-col gap-1"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "glass text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileHeader;
