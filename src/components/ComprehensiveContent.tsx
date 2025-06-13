
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Book, FileText, Video, Globe, Star, Calendar, User } from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

interface Resource {
  type: 'research' | 'book' | 'article' | 'video' | 'website' | 'organization';
  title: string;
  description: string;
  url: string;
  author?: string;
  year?: string;
  rating?: number;
  source: string;
  imageUrl?: string;
}

interface ComprehensiveContentProps {
  topic: string;
  resources: Resource[];
  statistics?: Array<{ label: string; value: string; source: string }>;
  keyFacts?: string[];
}

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'research': return <FileText className="h-4 w-4" />;
    case 'book': return <Book className="h-4 w-4" />;
    case 'article': return <FileText className="h-4 w-4" />;
    case 'video': return <Video className="h-4 w-4" />;
    case 'website': return <Globe className="h-4 w-4" />;
    case 'organization': return <Globe className="h-4 w-4" />;
    default: return <ExternalLink className="h-4 w-4" />;
  }
};

const getResourceColor = (type: string) => {
  switch (type) {
    case 'research': return 'bg-blue-100/20 text-blue-300 border-blue-300/30';
    case 'book': return 'bg-purple-100/20 text-purple-300 border-purple-300/30';
    case 'article': return 'bg-green-100/20 text-green-300 border-green-300/30';
    case 'video': return 'bg-red-100/20 text-red-300 border-red-300/30';
    case 'website': return 'bg-orange-100/20 text-orange-300 border-orange-300/30';
    case 'organization': return 'bg-indigo-100/20 text-indigo-300 border-indigo-300/30';
    default: return 'bg-slate-100/20 text-slate-300 border-slate-300/30';
  }
};

export default function ComprehensiveContent({ topic, resources, statistics, keyFacts }: ComprehensiveContentProps) {
  const handleResourceClick = (url: string) => {
    hapticFeedback.onNavigation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12">
      {/* Statistics Section */}
      {statistics && (
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-100 flex items-center">
              📊 {topic} Statistics & Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-slate-200 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-400">Source: {stat.source}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Facts */}
      {keyFacts && (
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-100">🔍 Key Facts About {topic}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFacts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-3 bg-slate-800/30 p-4 rounded-xl">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300 text-sm">{fact}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resources Grid */}
      <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl text-slate-100">
            🌐 Comprehensive {topic} Resources
          </CardTitle>
          <p className="text-slate-300">
            Latest research, books, articles, and resources from trusted sources worldwide
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="cursor-pointer bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                onClick={() => handleResourceClick(resource.url)}
              >
                {resource.imageUrl && (
                  <div className="relative h-32 overflow-hidden rounded-t-lg">
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <Badge className={`${getResourceColor(resource.type)} text-xs`}>
                        {getResourceIcon(resource.type)}
                        <span className="ml-1 capitalize">{resource.type}</span>
                      </Badge>
                      {resource.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-slate-400 text-xs">{resource.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-slate-100 font-medium text-sm line-clamp-2 group-hover:text-green-300 transition-colors">
                      {resource.title}
                    </h4>
                    
                    <p className="text-slate-400 text-xs line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-slate-600">
                      <div className="space-y-1">
                        {resource.author && (
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3 text-slate-500" />
                            <span className="text-slate-500 text-xs">{resource.author}</span>
                          </div>
                        )}
                        {resource.year && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3 text-slate-500" />
                            <span className="text-slate-500 text-xs">{resource.year}</span>
                          </div>
                        )}
                        <span className="text-xs text-slate-500">{resource.source}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-green-400 transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm mb-4">
              Resources are continuously updated from trusted global sources
            </p>
            <Button
              variant="outline"
              className="border-green-300 text-green-300 hover:bg-green-100/10"
              onClick={() => hapticFeedback.onClick()}
            >
              <Globe className="h-4 w-4 mr-2" />
              Explore More Resources
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
