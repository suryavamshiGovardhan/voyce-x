import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { psychologyTheories, searchTheories, getTheoriesByCategory, getTheoriesByDifficulty } from "@/data/psychologyTheories";
import { 
  Brain, Search, Filter, Book, Users, Lightbulb, Heart, 
  GraduationCap, Microscope, TreePine, Target, Star, Clock,
  User, Award, AlertTriangle, CheckCircle, ArrowRight
} from "lucide-react";

const categoryIcons = {
  developmental: <User className="h-4 w-4" />,
  cognitive: <Brain className="h-4 w-4" />,
  behavioral: <Target className="h-4 w-4" />,
  humanistic: <Heart className="h-4 w-4" />,
  social: <Users className="h-4 w-4" />,
  clinical: <Microscope className="h-4 w-4" />,
  educational: <GraduationCap className="h-4 w-4" />,
  positive: <Star className="h-4 w-4" />,
  neuroscience: <TreePine className="h-4 w-4" />,
  philosophical: <Lightbulb className="h-4 w-4" />
};

const difficultyColors = {
  basic: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  advanced: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
};

export default function TheoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [expandedTheory, setExpandedTheory] = useState<string | null>(null);

  const filteredTheories = useMemo(() => {
    let theories = psychologyTheories;
    
    if (searchTerm) {
      theories = searchTheories(searchTerm);
    }
    
    if (selectedCategory !== "all") {
      theories = theories.filter(theory => theory.category === selectedCategory);
    }
    
    if (selectedDifficulty !== "all") {
      theories = theories.filter(theory => theory.difficulty === selectedDifficulty);
    }
    
    return theories;
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const toggleExpanded = (theoryId: string) => {
    setExpandedTheory(expandedTheory === theoryId ? null : theoryId);
    hapticFeedback.onClick();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    hapticFeedback.onClick();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Psychology <span className="text-indigo-400">Theories</span> Library
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive collection of 100+ psychological, educational, and human development theories 
            for mental health awareness, VOYCE workshops, and educational programs.
          </p>
          <div className="flex justify-center mt-8">
            <Badge className="bg-indigo-500/20 text-indigo-300 text-lg px-6 py-2">
              <Book className="h-5 w-5 mr-2" />
              {psychologyTheories.length}+ Theories Available
            </Badge>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-indigo-200/20 shadow-xl rounded-2xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-100 flex items-center">
              <Search className="h-6 w-6 mr-3 text-indigo-400" />
              Explore & Filter Theories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search theories, originators, or concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-indigo-200/30 text-slate-100 placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white/10 border-indigo-200/30 text-slate-100">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-indigo-200/30">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="developmental">Developmental</SelectItem>
                  <SelectItem value="cognitive">Cognitive</SelectItem>
                  <SelectItem value="behavioral">Behavioral</SelectItem>
                  <SelectItem value="humanistic">Humanistic</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="clinical">Clinical</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                  <SelectItem value="positive">Positive Psychology</SelectItem>
                  <SelectItem value="neuroscience">Neuroscience</SelectItem>
                  <SelectItem value="philosophical">Philosophical</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="bg-white/10 border-indigo-200/30 text-slate-100">
                  <SelectValue placeholder="Select Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-indigo-200/30">
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                onClick={clearFilters}
                variant="outline" 
                className="border-indigo-300 text-indigo-300 hover:bg-indigo-100/10"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {filteredTheories.length} theories found
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Theories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTheories.map((theory) => (
            <Card 
              key={theory.id}
              className="cursor-pointer bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => toggleExpanded(theory.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${difficultyColors[theory.difficulty]} capitalize`}>
                    {theory.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {categoryIcons[theory.category]}
                    <span className="ml-1 capitalize">{theory.category}</span>
                  </Badge>
                </div>
                <CardTitle className="text-slate-100 text-lg line-clamp-2">
                  {theory.name}
                </CardTitle>
                <p className="text-slate-400 text-sm">
                  {theory.originators.split(' - ')[0]} • {theory.yearOrigin}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-slate-300 text-sm line-clamp-3 mb-4">
                  {theory.coreIdea}
                </p>
                
                {expandedTheory === theory.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-indigo-400" />
                        Historical Context
                      </h4>
                      <p className="text-slate-400 text-xs">{theory.historicalContext}</p>
                    </div>

                    <div>
                      <h4 className="text-slate-200 font-medium text-sm mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-indigo-400" />
                        Key Concepts
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {theory.keyConcepts.slice(0, 4).map((concept, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                        {theory.keyConcepts.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{theory.keyConcepts.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-slate-200 font-medium text-sm mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                        VOYCE Connection
                      </h4>
                      <p className="text-slate-400 text-xs">{theory.voyceConnection}</p>
                    </div>

                    <div>
                      <h4 className="text-slate-200 font-medium text-sm mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-blue-400" />
                        Practical Applications
                      </h4>
                      <ul className="text-slate-400 text-xs space-y-1">
                        {theory.practicalApplications.slice(0, 3).map((app, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-1 mt-0.5 text-blue-400 flex-shrink-0" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-slate-200 font-medium text-sm mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-yellow-400" />
                        Limitations & Criticisms
                      </h4>
                      <ul className="text-slate-400 text-xs space-y-1">
                        {theory.criticisms.slice(0, 2).map((criticism, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-1 mt-0.5 text-yellow-400 flex-shrink-0" />
                            {criticism}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-4 text-indigo-300 hover:text-indigo-200"
                >
                  {expandedTheory === theory.id ? "Show Less" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Resources Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-indigo-200/20 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100 text-center">
              Using This Library for VOYCE Programs
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs defaultValue="workshops" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-lg">
                <TabsTrigger value="workshops">Workshop Design</TabsTrigger>
                <TabsTrigger value="schools">School Programs</TabsTrigger>
                <TabsTrigger value="rural">Rural Outreach</TabsTrigger>
              </TabsList>

              <TabsContent value="workshops" className="space-y-4">
                <h3 className="text-xl text-slate-200 mb-4">VOYCE Workshop Integration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg text-indigo-300">Basic Level Workshops</h4>
                    <p className="text-slate-400 text-sm">Start with foundational theories like Maslow's Hierarchy, Growth Mindset, and Positive Psychology for accessible mental health education.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg text-indigo-300">Advanced Programs</h4>
                    <p className="text-slate-400 text-sm">Incorporate complex theories like Polyvagal Theory and Internal Family Systems for deeper therapeutic understanding.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schools" className="space-y-4">
                <h3 className="text-xl text-slate-200 mb-4">Educational Institution Programs</h3>
                <div className="space-y-4">
                  <p className="text-slate-300">Adapt theories by age group and educational level, focusing on practical applications for student mental health and learning.</p>
                  <ul className="text-slate-400 space-y-2">
                    <li>• Elementary: Basic emotional intelligence and resilience concepts</li>
                    <li>• Middle School: Social learning theory and peer relationships</li>
                    <li>• High School: Identity development and stress management</li>
                    <li>• University: Advanced psychological concepts and self-actualization</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="rural" className="space-y-4">
                <h3 className="text-xl text-slate-200 mb-4">Rural & Community Outreach</h3>
                <div className="space-y-4">
                  <p className="text-slate-300">Simplify complex theories for community education, focusing on practical mental health tools and cultural sensitivity.</p>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-indigo-300 mb-2">Cultural Adaptation Guidelines</h4>
                    <p className="text-slate-400 text-sm">Consider local customs, languages, and belief systems when presenting psychological theories. Focus on universal human experiences while respecting cultural diversity.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}