import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/layout/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
              404
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full animate-pulse-glow" />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Oops! The page you're looking for seems to have vanished into the digital void. 
              Let's get you back on track.
            </p>
            <p className="text-sm text-muted-foreground/70 font-mono">
              Route: {location.pathname}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300"
              asChild
            >
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="neon-border hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </motion.div>

          {/* Floating Animation Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-neon-purple rounded-full"
              animate={{
                y: [0, 15, 0],
                x: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
