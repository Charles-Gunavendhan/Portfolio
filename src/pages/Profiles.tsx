import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Trophy, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageTransition from "@/components/layout/PageTransition";

const Profiles = () => {
  const codingProfiles = [
    {
      platform: "GitHub",
      username: "@johndoe",
      description: "Open source projects and contributions",
      stats: {
        repositories: 42,
        followers: 856,
        contributions: "1,200+ this year"
      },
      url: "https://github.com/johndoe",
      icon: Github,
      color: "text-gray-400",
      bgColor: "bg-gray-400/20",
      borderColor: "border-gray-400/30",
    },
    {
      platform: "LeetCode",
      username: "@john_codes",
      description: "Algorithm and data structure challenges",
      stats: {
        solved: 450,
        ranking: "Top 10%",
        streak: "45 days"
      },
      url: "https://leetcode.com/john_codes",
      icon: Code,
      color: "text-orange-400",
      bgColor: "bg-orange-400/20",
      borderColor: "border-orange-400/30",
    },
    {
      platform: "CodePen",
      username: "@johndoe_dev",
      description: "Creative CSS animations and experiments",
      stats: {
        pens: 68,
        hearts: "2.1k",
        followers: 342
      },
      url: "https://codepen.io/johndoe_dev",
      icon: Star,
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      borderColor: "border-green-400/30",
    },
    {
      platform: "HackerRank",
      username: "@john_developer",
      description: "Programming challenges and certifications",
      stats: {
        badges: 15,
        ranking: "5 Star",
        points: "3,450"
      },
      url: "https://hackerrank.com/john_developer",
      icon: Trophy,
      color: "text-green-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
    },
    {
      platform: "Stack Overflow",
      username: "@johndoe",
      description: "Helping developers solve problems",
      stats: {
        reputation: "8.2k",
        answers: 127,
        badges: "Gold: 2, Silver: 15"
      },
      url: "https://stackoverflow.com/users/johndoe",
      icon: User,
      color: "text-orange-500",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
    },
    {
      platform: "Dribbble",
      username: "@johndesigns",
      description: "UI/UX designs and creative showcases",
      stats: {
        shots: 23,
        likes: "1.8k",
        followers: 445
      },
      url: "https://dribbble.com/johndesigns",
      icon: Star,
      color: "text-pink-400",
      bgColor: "bg-pink-400/20",
      borderColor: "border-pink-400/30",
    },
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
              Coding Profiles
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore my coding journey across different platforms. From algorithm challenges 
              to creative experiments and open-source contributions.
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${profile.bgColor} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 ${profile.bgColor} ${profile.borderColor} border rounded-xl`}>
                        <profile.icon className={`h-6 w-6 ${profile.color}`} />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <a href={profile.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    
                    <CardTitle className="text-xl font-semibold">
                      {profile.platform}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{profile.username}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {profile.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <div className="space-y-3">
                      {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground capitalize">
                            {key}:
                          </span>
                          <span className={`text-sm font-medium ${profile.color}`}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      className="w-full mt-6 neon-border hover:bg-primary/10"
                      variant="outline"
                      asChild
                    >
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
              Overall Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Contributions", value: "2,400+", icon: Github },
                { label: "Problems Solved", value: "450+", icon: Code },
                { label: "Repository Stars", value: "1,200+", icon: Star },
                { label: "Community Points", value: "15k+", icon: Trophy },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="p-4 bg-card/30 rounded-xl mb-3 inline-flex">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in collaborating or discussing code? Feel free to reach out through 
                any of these platforms or drop me a message directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300"
                  asChild
                >
                  <a href="/contact">
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="neon-border"
                  asChild
                >
                  <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Follow on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profiles;