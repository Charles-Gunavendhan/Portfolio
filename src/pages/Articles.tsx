import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PageTransition from "@/components/layout/PageTransition";

const Articles = () => {
  const articles = [
    {
      title: "Building Immersive 3D Web Experiences with Three.js",
      excerpt: "A comprehensive guide to creating stunning 3D animations and interactive experiences on the web using Three.js and React Three Fiber.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "/placeholder-article1.jpg",
      featured: true,
    },
    {
      title: "The Future of Web Animations with Framer Motion",
      excerpt: "Exploring advanced animation techniques and performance optimization tips for creating smooth, engaging user experiences.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Animation",
      image: "/placeholder-article2.jpg",
      featured: true,
    },
    {
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Discover the latest CSS features and how to leverage them for creating beautiful, responsive designs that users love.",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "CSS",
      image: "/placeholder-article3.jpg",
      featured: false,
    },
    {
      title: "TypeScript Best Practices for Large Applications",
      excerpt: "Essential patterns and practices for maintaining type safety and code quality in enterprise-level TypeScript projects.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "TypeScript",
      image: "/placeholder-article4.jpg",
      featured: false,
    },
    {
      title: "Performance Optimization in React Applications",
      excerpt: "Techniques for improving React app performance, from code splitting to virtual DOM optimization and beyond.",
      date: "2023-12-10",
      readTime: "9 min read",
      category: "React",
      image: "/placeholder-article5.jpg",
      featured: false,
    },
    {
      title: "Creating Dark Mode with CSS Custom Properties",
      excerpt: "A step-by-step guide to implementing flexible, maintainable dark mode themes using modern CSS techniques.",
      date: "2023-11-25",
      readTime: "4 min read",
      category: "CSS",
      image: "/placeholder-article6.jpg",
      featured: false,
    },
  ];

  const categories = ["All", "Web Development", "Animation", "CSS", "TypeScript", "React"];
  
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
              Featured Articles
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on modern web development, 
              design patterns, and emerging technologies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-gradient-primary" : "neon-border hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {articles.filter(article => article.featured).map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-primary/20 flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-primary/60" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium backdrop-blur-sm">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Articles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Recent Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.filter(article => !article.featured).map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-8">
                Get the latest articles and insights delivered directly to your inbox.
                No spam, just valuable content about web development and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background/50 border border-border/50 rounded-lg focus:border-primary focus:outline-none"
                />
                <Button className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;