import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/layout/PageTransition";
import ThreeScene from "@/components/3d/ThreeScene";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background Scene */}
        <div className="absolute inset-0 z-0">
          <ThreeScene />
        </div>
        
        {/* Animated Background Blurs */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.8, 1],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 font-mono"
            >
              Hello, I'm
            </motion.p>

            {/* Name with Gradient */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">John Doe</span>
            </motion.h1>

            {/* Profession */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="text-2xl md:text-4xl font-semibold mb-8 text-foreground/90"
            >
              Full Stack Developer & UI/UX Designer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting digital experiences with cutting-edge technology and creative design.
              Passionate about React, Three.js, and building immersive web applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300 text-primary-foreground font-semibold px-8 py-3 rounded-full"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                </Button>
              </Link>
              
              <Link to="/resume">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="neon-border hover:bg-primary/10 font-semibold px-8 py-3 rounded-full"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="flex justify-center gap-6 mb-12"
            >
              {[
                { Icon: Github, href: "https://github.com", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:john@example.com", label: "Email" },
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                  className="p-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:shadow-glow-cyan transition-all duration-300 group"
                >
                  <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-muted-foreground"
              >
                <ArrowDown className="h-6 w-6 mx-auto" />
                <p className="text-sm mt-2 font-mono">Scroll to explore</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating 
                immersive digital experiences that combine cutting-edge technology with intuitive design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans from React and Node.js to Three.js and advanced animation libraries, 
                allowing me to bring ideas to life with stunning visuals and seamless interactions.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse-glow" />
                <div className="relative w-full h-full bg-card/50 backdrop-blur-sm rounded-full border-2 border-primary/20 flex items-center justify-center">
                  <div className="text-6xl font-bold gradient-text">JD</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Hero;