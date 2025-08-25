import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PageTransition from "@/components/layout/PageTransition";

const Projects = () => {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js animations, particle effects, and smooth page transitions.",
      image: "/placeholder-project1.jpg",
      technologies: ["React", "Three.js", "Framer Motion", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "/placeholder-project2.jpg",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: "/placeholder-project3.jpg",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts and interactive charts.",
      image: "/placeholder-project4.jpg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              My Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in modern web development,
              3D graphics, and user experience design.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-48 bg-gradient-primary/20 flex items-center justify-center">
                        <span className="text-6xl gradient-text font-bold">
                          {project.title.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-3">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="bg-gradient-primary hover:shadow-glow-cyan"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="neon-border"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold flex items-center justify-between">
                        {project.title}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-muted-foreground">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with cutting-edge technology and creative design.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300 px-8 py-3 rounded-full"
                asChild
              >
                <a href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
