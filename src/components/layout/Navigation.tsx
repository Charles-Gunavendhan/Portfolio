import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Award, Mail, BookOpen, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/skills", label: "Skills", icon: Award },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "/articles", label: "Articles", icon: BookOpen },
    { path: "/profiles", label: "Profiles", icon: Code },
    { path: "/resume", label: "Resume", icon: Download },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 hidden md:block">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text font-space">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  location.pathname === path
                    ? "bg-gradient-primary text-primary-foreground shadow-glow-cyan"
                    : "hover:bg-muted/50 hover-glow"
                }`}
              >
                {label}
                {location.pathname === path && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-primary rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold gradient-text font-space">
            Portfolio
          </Link>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="relative z-50 p-2"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-80 bg-card/50 backdrop-blur-xl border-l border-border"
            >
              <div className="flex flex-col justify-center h-full px-8 space-y-6">
                {navItems.map(({ path, label, icon: Icon }, index) => (
                  <motion.div
                    key={path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                        location.pathname === path
                          ? "bg-gradient-primary text-primary-foreground shadow-glow-cyan"
                          : "hover:bg-muted/50 hover-glow"
                      }`}
                    >
                      <Icon size={24} />
                      <span className="text-lg font-medium">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;