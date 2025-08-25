import { motion } from "framer-motion";
import { Download, Eye, FileText, Calendar, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageTransition from "@/components/layout/PageTransition";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume Downloaded",
      description: "Thank you for downloading my resume!",
    });
    // In a real app, this would trigger the actual download
  };

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of responsive web applications using React and TypeScript",
        "Implemented 3D visualizations with Three.js, improving user engagement by 40%",
        "Mentored junior developers and established coding standards for the team",
        "Optimized application performance, reducing load times by 35%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: [
        "Built full-stack applications using Node.js, React, and PostgreSQL",
        "Developed RESTful APIs serving 10,000+ daily active users",
        "Implemented CI/CD pipelines using Docker and GitHub Actions",
        "Collaborated with design team to create pixel-perfect UI implementations"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      location: "Los Angeles, CA",
      description: [
        "Created responsive websites for 20+ clients using modern web technologies",
        "Specialized in CSS animations and interactive user experiences",
        "Worked with WordPress and custom PHP solutions",
        "Maintained 98% client satisfaction rate"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of California",
      period: "2015 - 2019",
      location: "Berkeley, CA",
      details: "Graduated Magna Cum Laude • GPA: 3.8/4.0"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Three.js", "Vue.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker"],
    "Tools": ["Git", "AWS", "Figma", "VS Code", "Linux", "Webpack"]
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Resume
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Download my complete resume or view the highlights below showcasing 
              my experience and technical expertise.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300 px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="neon-border hover:bg-primary/10 px-8 py-3"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Online
              </Button>
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-gradient-primary/10 backdrop-blur-sm border border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text text-center">John Doe</CardTitle>
                <p className="text-center text-muted-foreground text-lg">Full Stack Developer & UI/UX Designer</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">john@example.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Experienced Full Stack Developer with 5+ years of expertise in creating immersive web experiences. 
                  Specialized in React, Three.js, and modern web technologies. Passionate about combining technical 
                  excellence with creative design to build applications that users love. Proven track record of 
                  delivering high-quality solutions for startups and enterprise clients.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {job.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {job.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">Education</h2>
            {education.map((edu, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.details}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-border/50 h-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-primary">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <Card className="bg-gradient-primary/10 backdrop-blur-sm border border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Work Together?</h3>
                <p className="text-muted-foreground mb-6">
                  Download the complete resume or get in touch to discuss opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={handleDownload}
                    className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Full Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="neon-border"
                    asChild
                  >
                    <a href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;