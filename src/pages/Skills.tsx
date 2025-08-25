import { motion } from "framer-motion";
import { Code, Database, Palette, Globe, Cpu, Zap } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/20",
      borderColor: "border-neon-cyan/30",
      progressColor: "from-neon-cyan to-neon-cyan/80",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js", level: 85 },
        { name: "Framer Motion", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/20",
      borderColor: "border-neon-purple/30",
      progressColor: "from-neon-purple to-neon-purple/80",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 78 },
        { name: "Docker", level: 75 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "text-neon-pink",
      bgColor: "bg-neon-pink/20",
      borderColor: "border-neon-pink/30",
      progressColor: "from-neon-pink to-neon-pink/80",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "UI Design", level: 88 },
        { name: "Prototyping", level: 82 },
        { name: "User Research", level: 75 },
        { name: "Accessibility", level: 80 },
      ],
    },
  ];

  const tools = [
    { name: "VS Code", icon: Code },
    { name: "Git/GitHub", icon: Globe },
    { name: "AWS/Vercel", icon: Cpu },
    { name: "Webpack/Vite", icon: Zap },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              My Skills
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and proficiency 
              across various technologies and tools.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor} border ${category.borderColor}`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.progressColor} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">Tools & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-3 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <tool.icon className="h-8 w-8 text-primary group-hover:text-neon-cyan transition-colors" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Achievements</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "20+", label: "Technologies Mastered" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;